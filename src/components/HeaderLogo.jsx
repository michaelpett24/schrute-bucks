export default function HeaderLogo() {
  return (
    <div className="header-logo-wrap" aria-hidden="true">

      {/* ── Beet (Schrute Bucks) ── */}
      <svg
        viewBox="0 0 60 100"
        width="72"
        height="72"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Beet representing Schrute Bucks"
      >
        {/* Leaves */}
        <path d="M29 40 Q12 26 17 5 Q23 20 29 40Z" fill="#3a7a22"/>
        <path d="M30 36 Q30 10 30 2 Q33 18 30 36Z" fill="#4a9a2a"/>
        <path d="M31 40 Q48 26 43 5 Q37 20 31 40Z" fill="#3a7a22"/>
        {/* Leaf midribs */}
        <path d="M29 40 Q20 26 17 7" stroke="#1e5010" strokeWidth="1" fill="none" strokeLinecap="round"/>
        <path d="M30 36 Q30 20 30 4" stroke="#1e5010" strokeWidth="1" fill="none" strokeLinecap="round"/>
        <path d="M31 40 Q40 26 43 7" stroke="#1e5010" strokeWidth="1" fill="none" strokeLinecap="round"/>
        {/* Beet root body */}
        <path d="M30 44 Q8 46 7 65 Q7 86 30 88 Q53 86 53 65 Q53 46 30 44Z" fill="#8b1a2e"/>
        {/* Highlight / shading */}
        <ellipse cx="22" cy="60" rx="9" ry="12" fill="#b02845" opacity="0.4"/>
        {/* Surface lines for texture */}
        <path d="M15 68 Q30 72 45 68" stroke="#6a1020" strokeWidth="0.8" fill="none" opacity="0.5"/>
        <path d="M12 60 Q30 64 48 60" stroke="#6a1020" strokeWidth="0.8" fill="none" opacity="0.3"/>
        {/* Root tail */}
        <path d="M30 88 Q31 93 29 98" stroke="#5a0e1e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </svg>

      {/* ── Coin (Stanley Nickels) ── */}
      <svg
        viewBox="0 0 80 80"
        width="72"
        height="72"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Coin representing Stanley Nickels"
      >
        {/* Drop shadow layer */}
        <circle cx="41" cy="41" r="33" fill="#4a4a5a" opacity="0.35"/>
        {/* Rim */}
        <circle cx="39" cy="39" r="33" fill="#6a6a7a"/>
        {/* Face */}
        <circle cx="39" cy="39" r="30" fill="#c2c2d2"/>
        {/* Inner face */}
        <circle cx="39" cy="39" r="27" fill="#cecedd"/>
        {/* Reeded edge marks */}
        {[...Array(24)].map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const x1 = 39 + 28.5 * Math.cos(angle);
          const y1 = 39 + 28.5 * Math.sin(angle);
          const x2 = 39 + 30.5 * Math.cos(angle);
          const y2 = 39 + 30.5 * Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#5a5a6a" strokeWidth="1.2"/>;
        })}
        {/* Shine highlight */}
        <ellipse cx="31" cy="30" rx="10" ry="7" fill="white" opacity="0.2" transform="rotate(-30 31 30)"/>
        {/* Stars */}
        <text x="39" y="24" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#7a7a8a" letterSpacing="3">★★★</text>
        {/* SN currency mark */}
        <text x="39" y="46" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="20" fontWeight="bold" fill="#3a3a4e" letterSpacing="2">SN</text>
        {/* Bottom detail */}
        <text x="39" y="57" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="5.5" fill="#7a7a8a" letterSpacing="1">SCRANTON · PA</text>
      </svg>

    </div>
  );
}
