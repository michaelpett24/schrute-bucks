import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const REAL_CURRENCIES = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'MXN', 'INR'];

const REAL_CURRENCY_FLAGS = {
  USD: '🇺🇸', EUR: '🇪🇺', GBP: '🇬🇧', JPY: '🇯🇵',
  CAD: '🇨🇦', AUD: '🇦🇺', MXN: '🇲🇽', INR: '🇮🇳',
};

const WHOLE_NUMBER_CURRENCIES = new Set(['JPY', 'INR', 'MXN']);

const SB_USD_RATE = 0.001; // 1 Schrute Buck = $0.001

const COMMENTS = [
  (sb) => sb >= 1000000 ? `${sb.toLocaleString()} Schrute Bucks. Dwight is almost impressed.` : null,
  (sb) => sb >= 1 && sb < 1000000 ? `That's ${sb.toLocaleString()} Schrute Bucks. Dwight says "very impressive." He is lying.` : null,
  (usd) => usd > 0 && usd < 1 ? `Less than a dollar. Michael Scott once spent this on a single paper clip.` : null,
  (_, usd) => usd >= 1000000 ? `$${(usd / 1000000).toFixed(1)}M USD. Ryan would build an app for this. It would fail.` : null,
  (_, usd) => usd >= 100 && usd < 1000 ? `$${usd.toFixed(2)} USD. Still not enough to buy Dwight's loyalty.` : null,
];

function getComment(sb, usd) {
  for (const fn of COMMENTS) {
    const r = fn(sb, usd);
    if (r) return r;
  }
  return 'Identity theft is not a joke, Jim. Neither are these exchange rates.';
}

function formatDisplay(val, symbol) {
  if (val === undefined || val === null) return '';
  const n = Number(val);
  if (isNaN(n) || n === 0) return '0';
  if (symbol === 'SB') return Math.round(n).toLocaleString();
  if (WHOLE_NUMBER_CURRENCIES.has(symbol)) return Math.round(n).toLocaleString();
  if (n < 0.001) return n.toFixed(6).replace(/\.?0+$/, '');
  if (n < 1) return n.toFixed(4).replace(/\.?0+$/, '');
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function Converter({ rates, loading, onValuesChange }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [displayValues, setDisplayValues] = useState({});
  const [numericValues, setNumericValues] = useState({});

  useEffect(() => {
    if (loading) return;
    const from = searchParams.get('from');
    const amount = searchParams.get('amount');
    if (from && amount) compute(from, amount, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const compute = useCallback((symbol, rawStr, updateUrl = true) => {
    const cleaned = rawStr.replace(/,/g, '').trim();

    if (cleaned === '' || cleaned === '-') {
      setDisplayValues({});
      setNumericValues({});
      onValuesChange?.({});
      return;
    }

    const input = parseFloat(cleaned);
    if (isNaN(input)) return;

    let usdValue;
    if (symbol === 'SB') {
      usdValue = input * SB_USD_RATE;
    } else {
      usdValue = input / (rates[symbol] ?? 1);
    }

    const next = { SB: usdValue / SB_USD_RATE, _from: symbol };
    for (const sym of REAL_CURRENCIES) {
      next[sym] = usdValue * (rates[sym] ?? 1);
    }
    next[symbol] = input;

    setNumericValues(next);
    onValuesChange?.(next);

    const newDisplay = {};
    for (const [sym, val] of Object.entries(next)) {
      if (sym.startsWith('_')) continue;
      newDisplay[sym] = sym === symbol ? rawStr : formatDisplay(val, sym);
    }
    setDisplayValues(newDisplay);

    if (updateUrl) {
      setSearchParams({ from: symbol, amount: cleaned }, { replace: true });
    }
  }, [rates, onValuesChange, setSearchParams]);

  function handleChange(symbol, raw) {
    setDisplayValues(prev => ({ ...prev, [symbol]: raw }));
    compute(symbol, raw);
  }

  function handleBlur(symbol) {
    if (numericValues[symbol] != null) {
      setDisplayValues(prev => ({
        ...prev,
        [symbol]: formatDisplay(numericValues[symbol], symbol),
      }));
    }
  }

  const sb  = numericValues['SB']  ?? 0;
  const usd = numericValues['USD'] ?? 0;
  const hasValues = sb > 0 || usd > 0;
  const comment = hasValues ? getComment(sb, usd) : null;

  return (
    <div className="converter">
      {loading && <p className="loading">Fetching live exchange rates from the Dunder Mifflin treasury...</p>}

      {/* Schrute Bucks — primary */}
      <div className="sb-primary-row">
        <div className="currency-row office-currency beet sb-featured">
          <label>
            <span className="currency-flag">🥬</span>
            <span className="currency-name">Schrute Bucks</span>
            <span className="currency-symbol">(SB)</span>
          </label>
          <input
            type="text"
            inputMode="decimal"
            placeholder="0"
            value={displayValues['SB'] ?? ''}
            onChange={(e) => handleChange('SB', e.target.value)}
            onBlur={() => handleBlur('SB')}
          />
        </div>
      </div>

      <div className="divider"><span>converts to</span></div>

      <div className="currency-section">
        <h3 className="section-label">Real World Currencies</h3>
        <div className="currency-grid">
          {REAL_CURRENCIES.map((sym) => (
            <div key={sym} className="currency-row real-currency">
              <label>
                <span className="currency-flag">{REAL_CURRENCY_FLAGS[sym]}</span>
                <span className="currency-name">{sym}</span>
              </label>
              <input
                type="text"
                inputMode="decimal"
                placeholder="0"
                value={displayValues[sym] ?? ''}
                onChange={(e) => handleChange(sym, e.target.value)}
                onBlur={() => handleBlur(sym)}
                disabled={loading}
              />
            </div>
          ))}
        </div>
      </div>

      {comment && (
        <div className="comment-box">
          <span className="comment-icon">📎</span>
          <p>{comment}</p>
        </div>
      )}
    </div>
  );
}
