import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ShareButton from '../components/ShareButton';
import ShopBanner from '../components/ShopBanner';

const SB_RATE = 0.0001;

function fmtSB(n) {
  if (n >= 1_000_000_000_000) return `${(n / 1_000_000_000_000).toFixed(1)} trillion`;
  if (n >= 1_000_000_000)     return `${(n / 1_000_000_000).toFixed(1)} billion`;
  if (n >= 1_000_000)         return `${(n / 1_000_000).toFixed(1)} million`;
  if (n >= 1_000)             return `${(n / 1_000).toFixed(0)}K`;
  return n.toLocaleString();
}

function getCommentary(sb) {
  if (!sb) return null;
  if (sb < 10_000)
    return "Dwight earns more than this in beet sales. He will not say this to your face, but he is thinking it.";
  if (sb < 50_000)
    return "This covers approximately one year of Angela's cat vet bills. You are surviving, not thriving.";
  if (sb < 100_000)
    return "Kevin would spend this entirely on food. He has done the math. He is comfortable with this.";
  if (sb < 200_000)
    return "Michael Scott territory. He will spend 40% of this on Chili's, 30% on magic tricks, and lose the rest.";
  if (sb < 500_000)
    return "Ryan Howard's starting salary after his Wharton MBA. He wasted it. You might do better.";
  if (sb < 1_000_000)
    return "A respectable haul. Dwight would attempt to tax this under Schrute Farms municipal law.";
  if (sb < 5_000_000)
    return "You are in Regional Manager territory. Michael would celebrate this with a Dundie. You've earned it.";
  if (sb < 50_000_000)
    return "This is Sabre executive compensation. Jo Bennett would call this 'a decent start.'";
  if (sb < 500_000_000)
    return "You have achieved David Wallace post-Suck It net worth. The respect is warranted.";
  return "This exceeds the GDP of the Lackawanna County beet economy. Dwight is furious and also impressed.";
}

const PERIODS = [
  { label: 'Annual', divisor: 1 },
  { label: 'Monthly', divisor: 12 },
  { label: 'Weekly', divisor: 52 },
  { label: 'Hourly', divisor: 2080 },
];

const BENCHMARKS = [
  { label: "Dwight's estimated salary", usd: 60000 },
  { label: "Michael Scott's salary (Regional Manager)", usd: 79900 },
  { label: "Ryan Howard (VP, briefly)", usd: 130000 },
  { label: "US median household income (2024)", usd: 80610 },
  { label: "Sabre CEO Jo Bennett (est.)", usd: 4500000 },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Salary in Schrute Bucks Calculator',
  description: 'How much is your salary worth in Schrute Bucks? Enter your income and see it converted to the official currency of Dunder Mifflin.',
};

export default function Salary() {
  const [input, setInput] = useState('');
  const [period, setPeriod] = useState('Annual');

  const raw = parseFloat(input.replace(/,/g, '')) || 0;
  const annualUsd = raw * (PERIODS.find(p => p.label === period)?.divisor === 1
    ? 1
    : 1 / PERIODS.find(p => p.label === period).divisor * (period === 'Annual' ? 1 : 1));

  // Normalize everything to annual USD first
  const periodObj = PERIODS.find(p => p.label === period);
  const annualUsdNorm = period === 'Annual' ? raw : raw * (
    period === 'Monthly' ? 12 :
    period === 'Weekly'  ? 52 :
    2080
  );

  const annualSB = annualUsdNorm / SB_RATE;
  const monthlySB = annualSB / 12;
  const weeklySB = annualSB / 52;
  const hourlySB = annualSB / 2080;

  const commentary = getCommentary(annualSB);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function applyBenchmark(usd) {
    setInput(usd.toLocaleString());
    setPeriod('Annual');
  }

  return (
    <>
      <SEO
        title="Salary in Schrute Bucks Calculator"
        description="How much is your salary in Schrute Bucks? Enter your income and instantly see it converted to Dunder Mifflin's official currency. Annual, monthly, weekly, and hourly."
        path="/salary"
        jsonLd={jsonLd}
      />

      <article className="content-page">
        <h2 className="content-h2">What Is Your Salary in Schrute Bucks?</h2>
        <p style={{ marginBottom: '1.5rem', color: 'var(--ink-light)' }}>
          Enter your income below. We'll convert it to Schrute Bucks using the official rate of
          $0.001 USD per Schrute Buck — as established by the full faith and credit of Schrute Farms.
        </p>

        {/* Input section */}
        <div className="salary-input-row">
          <div className="salary-input-wrap">
            <span className="salary-dollar">$</span>
            <input
              type="number"
              className="salary-input"
              placeholder="Enter your income"
              value={input}
              onChange={handleInput}
              min="0"
              step="1"
            />
          </div>
          <div className="salary-period-btns">
            {PERIODS.map(p => (
              <button
                key={p.label}
                className={`filter-btn${period === p.label ? ' active' : ''}`}
                onClick={() => setPeriod(p.label)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {annualUsdNorm > 0 && (
          <>
            <div className="salary-result-card">
              <div className="salary-result-headline">
                Your annual salary of <span className="beet-text">${annualUsdNorm.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD</span> equals
              </div>
              <div className="salary-sb-big">
                {fmtSB(annualSB)}
                <span className="salary-sb-label"> Schrute Bucks / year</span>
              </div>

              <div className="salary-breakdown">
                <div className="salary-breakdown-item">
                  <div className="salary-breakdown-amount">{fmtSB(monthlySB)} SB</div>
                  <div className="salary-breakdown-label">per month</div>
                </div>
                <div className="salary-breakdown-divider">·</div>
                <div className="salary-breakdown-item">
                  <div className="salary-breakdown-amount">{fmtSB(weeklySB)} SB</div>
                  <div className="salary-breakdown-label">per week</div>
                </div>
                <div className="salary-breakdown-divider">·</div>
                <div className="salary-breakdown-item">
                  <div className="salary-breakdown-amount">{fmtSB(hourlySB)} SB</div>
                  <div className="salary-breakdown-label">per hour</div>
                </div>
              </div>

              {commentary && (
                <div className="salary-commentary">{commentary}</div>
              )}
            </div>

            <div className="salary-note">
              1,000 Schrute Bucks = $1.00 USD &nbsp;·&nbsp; Use the <Link to="/">converter</Link> for any custom amount
            </div>
          </>
        )}

        {/* Benchmarks */}
        <div className="salary-benchmarks">
          <h3 className="salary-benchmarks-title">Compare to Dunder Mifflin Employees</h3>
          <div className="salary-benchmark-list">
            {BENCHMARKS.map(b => (
              <button
                key={b.label}
                className="salary-benchmark-btn"
                onClick={() => applyBenchmark(b.usd)}
              >
                <span className="benchmark-label">{b.label}</span>
                <span className="benchmark-sb">{fmtSB(b.usd / SB_RATE)} SB/yr</span>
              </button>
            ))}
          </div>
        </div>

        <ShopBanner />

        <ShareButton
          path="/salary"
          text="I just found out my salary in Schrute Bucks. The number is technically impressive. The actual value is not. 🥬💸"
        />
      </article>
    </>
  );
}
