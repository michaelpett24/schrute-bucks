const MARKERS = [
  { label: 'Monopoly Money', pct: 0 },
  { label: 'Schrute Bucks', pct: 15 },
  { label: 'Stanley Nickels', pct: 30 },
  { label: 'Canadian Tire Money', pct: 50, mobileHide: true },
  { label: 'Chuck E. Cheese Tokens', pct: 65, mobileHide: true },
  { label: 'Actual USD', pct: 100 },
];

export default function WorthinessBar({ usdValue }) {
  const hasValue = usdValue > 0;
  const pct = hasValue
    ? Math.min(100, Math.max(0.5, Math.log10(usdValue + 1) * 15))
    : 0;

  return (
    <div className="worthiness-bar-container">
      <h3 className="worthiness-title">Real-World Value Meter</h3>
      <div className="worthiness-track">
        <div className="worthiness-fill" style={{ width: `${pct}%` }} />
        {MARKERS.map(({ label, pct: mPct, mobileHide }) => (
          <div key={label} className={`marker${mobileHide ? ' marker-hide-mobile' : ''}`} style={{ left: `${mPct}%` }}>
            <div className="marker-tick" />
            <div className="marker-label">{label}</div>
          </div>
        ))}
      </div>
      <p className="worthiness-caption">
        {!hasValue
          ? 'Enter an amount above to see your true wealth.'
          : pct < 20
          ? 'Basically imaginary. Dwight would be proud.'
          : pct < 50
          ? 'Marginally useful. You could buy... paper.'
          : pct < 80
          ? 'Real money. Michael would spend it on a party immediately.'
          : 'Impressive. Ryan would want equity.'}
      </p>
    </div>
  );
}
