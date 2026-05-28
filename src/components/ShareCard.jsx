import { forwardRef } from 'react';

function fmt(val, decimals = 2) {
  if (!val && val !== 0) return '0';
  const n = Number(val);
  if (isNaN(n)) return '0';
  if (n >= 1) return n.toLocaleString(undefined, { maximumFractionDigits: decimals });
  if (n < 0.001) return n.toFixed(6).replace(/\.?0+$/, '');
  return n.toFixed(4).replace(/\.?0+$/, '');
}

const SECONDARY = [
  { sym: 'EUR', label: 'Euro', flag: '🇪🇺' },
  { sym: 'GBP', label: 'Pound', flag: '🇬🇧' },
  { sym: 'JPY', label: 'Yen', flag: '🇯🇵' },
  { sym: 'CAD', label: 'CAD', flag: '🇨🇦' },
];

// ForwardRef so the parent can pass a ref for html2canvas capture
const ShareCard = forwardRef(function ShareCard({ values }, ref) {
  const usd         = values?.USD ?? 0;
  const sb          = values?.SB  ?? 0;
  const officeLabel = 'Schrute Bucks';

  const headlineSB  = sb  >= 1 ? fmt(sb,  0) : fmt(sb,  4);
  const headlineUSD = usd >= 1 ? fmt(usd, 2) : fmt(usd, 6);

  return (
    <div
      ref={ref}
      style={{
        width: 600,
        background: '#fdfaf3',
        fontFamily: "'Courier New', Courier, monospace",
        color: '#2c2c2c',
        border: '2px solid #d4c9b0',
        boxSizing: 'border-box',
        padding: '0 0 24px',
        position: 'relative',
      }}
    >
      {/* Inner border */}
      <div style={{
        position: 'absolute', top: 6, left: 6, right: 6, bottom: 6,
        border: '1px solid #d4c9b0', pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{
        background: '#8b1a2e',
        padding: '18px 24px 14px',
        textAlign: 'center',
        color: '#fdfaf3',
      }}>
        <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.8, marginBottom: 4 }}>
          Official Exchange Receipt
        </div>
        <div style={{ fontSize: 20, fontWeight: 'bold', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          Schrute Bucks &amp; Stanley Nickels Exchange
        </div>
        <div style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.7, marginTop: 4 }}>
          Lackawanna County Regional Office · Est. 2005
        </div>
      </div>

      {/* Headline conversion */}
      <div style={{ padding: '28px 36px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#5a5a5a', marginBottom: 10 }}>
          Today's Rate
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 36, fontWeight: 'bold', color: '#8b1a2e', lineHeight: 1 }}>
              {headlineSB}
            </div>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7a7a8a', marginTop: 4 }}>
              {officeLabel}
            </div>
          </div>

          <div style={{ fontSize: 28, color: '#c8a84b', fontWeight: 'bold', padding: '0 4px' }}>=</div>

          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 36, fontWeight: 'bold', color: '#2c2c2c', lineHeight: 1 }}>
              ${headlineUSD}
            </div>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7a7a8a', marginTop: 4 }}>
              US Dollars
            </div>
          </div>
        </div>
      </div>

      {/* Dashed divider */}
      <div style={{ borderTop: '1px dashed #d4c9b0', margin: '0 36px 20px' }} />

      {/* Secondary currencies */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 32, padding: '0 36px', flexWrap: 'wrap' }}>
        {SECONDARY.map(({ sym, label, flag }) => (
          <div key={sym} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 10, marginBottom: 2 }}>{flag}</div>
            <div style={{ fontSize: 18, fontWeight: 'bold', color: '#2c2c2c' }}>
              {fmt(values?.[sym] ?? 0, sym === 'JPY' ? 0 : 2)}
            </div>
            <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#7a7a8a' }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: 24,
        fontSize: 10,
        color: '#9a9a9a',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        schrutebucks.app · Not Legal Tender. Not Even in Scranton.
      </div>
    </div>
  );
});

export default ShareCard;
