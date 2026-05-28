import { useState } from 'react';

const IFC_RATIO = 236; // Irish Folklore Commission standard
const MIN_RATIO = 1;
const MAX_RATIO = 1000;

function getCommentary(ratio) {
  if (ratio === 1)
    return "Equal footing. You believe leprechauns are as rare as unicorns. This is statistically improbable but philosophically bold. Dwight salutes you.";
  if (ratio <= 10)
    return "You believe leprechauns are nearly as rare as unicorns. Your Stanley Nickels retain some dignity. Not much, but some.";
  if (ratio <= 50)
    return "An optimistic view of leprechaun scarcity. Your Stanley Nickels are worth approximately one small beet. Progress.";
  if (ratio <= 150)
    return "A reasonable position. You've clearly done fieldwork. Stanley Nickels remain largely worthless, but you've thought about it.";
  if (ratio <= 235)
    return "Close to the Irish Folklore Commission standard. You are 1 leprechaun colony short of scientific consensus.";
  if (ratio === IFC_RATIO)
    return "The scientifically accepted ratio per the Irish Folklore Commission (County Kerry, 2003). The gold standard of fictional exchange rates.";
  if (ratio <= 350)
    return "Slightly above consensus. You believe County Kerry may have missed a few leprechaun colonies. Reasonable.";
  if (ratio <= 600)
    return "You believe in a significant leprechaun surplus. Stanley Nickels are suffering at this ratio.";
  if (ratio <= 850)
    return "Leprechaun density approaching critical levels in your worldview. Stanley Nickels are essentially confetti.";
  if (ratio < 1000)
    return "Nearly maximum leprechaun saturation. Stanley Nickels are worth less than the handshake Stanley gives Michael on Pretzel Day.";
  return "One thousand leprechauns per unicorn. Stanley Nickels are legally worthless in 47 states and all Canadian provinces.";
}

function fmt(n, decimals = 2) {
  if (!n && n !== 0) return '0';
  if (n >= 1) return n.toLocaleString(undefined, { maximumFractionDigits: decimals });
  if (n < 0.00001) return n.toExponential(3);
  return n.toFixed(8).replace(/\.?0+$/, '');
}

export default function StanleyNickelBureau({ schruteBucks }) {
  const [ratio, setRatio] = useState(IFC_RATIO);

  const stanleyNickels = schruteBucks * ratio;
  const snUsdValue     = 0.001 / ratio; // 1 SN in USD

  function handleSlider(e) {
    setRatio(Number(e.target.value));
  }

  function resetToIFC() {
    setRatio(IFC_RATIO);
  }

  const isIFC = ratio === IFC_RATIO;

  // Percentage position of IFC marker on the slider track
  const ifcPct = ((IFC_RATIO - MIN_RATIO) / (MAX_RATIO - MIN_RATIO)) * 100;

  return (
    <div className="bureau-card">

      {/* Header */}
      <div className="bureau-header">
        <div className="bureau-stamp">BUREAU</div>
        <div className="bureau-title-block">
          <h2 className="bureau-title">🍀 Stanley Nickel Exchange Bureau</h2>
          <p className="bureau-subtitle">
            Lackawanna County Department of Fictional Monetary Policy
          </p>
        </div>
      </div>

      {/* Methodology */}
      <div className="bureau-methodology">
        <div className="methodology-label">METHODOLOGY</div>
        <blockquote className="bureau-quote">
          "The ratio of Stanley Nickels to Schrute Bucks is the same as the ratio of unicorns to leprechauns."
          <cite>— Stanley Hudson, Dunder Mifflin Senior Sales Representative</cite>
        </blockquote>
        <p className="methodology-body">
          The unicorn is Scotland's official national animal, of which there is <strong>one</strong> (national, singular).
          The Irish Folklore Commission has documented <strong>236</strong> leprechaun colonies in County Kerry alone,
          establishing the canonical ratio of <strong>1&nbsp;unicorn&nbsp;:&nbsp;236&nbsp;leprechauns</strong>.
          As Schrute Bucks are backed by the full faith and credit of Schrute Farms, and Stanley Nickels
          are backed by nothing, we apply this ratio directly: <strong>1 Schrute Buck = {ratio.toLocaleString()} Stanley Nickels</strong>.
          Adjust the ratio below based on your own leprechaun field research.
        </p>
      </div>

      {/* Ratio slider */}
      <div className="bureau-slider-section">
        <div className="slider-heading">
          Set the unicorn&nbsp;:&nbsp;leprechaun ratio
        </div>

        <div className="slider-labels">
          <span>🦄 × 1</span>
          <span>🍀 × {ratio.toLocaleString()}</span>
        </div>

        <div className="slider-track-wrap">
          <input
            type="range"
            min={MIN_RATIO}
            max={MAX_RATIO}
            step={1}
            value={ratio}
            onChange={handleSlider}
            className="bureau-slider"
          />
          {/* IFC marker */}
          <div className="ifc-marker" style={{ left: `${ifcPct}%` }}>
            <div className="ifc-marker-line" />
            <div className="ifc-marker-label">IFC<br/>236</div>
          </div>
        </div>

        <div className="slider-endpoints">
          <span>1 — equal footing</span>
          <span>1,000 — leprechaun surplus</span>
        </div>

        <div className="bureau-commentary">
          {getCommentary(ratio)}
        </div>

        {!isIFC && (
          <button className="ifc-reset-btn" onClick={resetToIFC}>
            ↺ Reset to Irish Folklore Commission standard (236)
          </button>
        )}
        {isIFC && (
          <div className="ifc-badge">✓ Irish Folklore Commission Standard</div>
        )}
      </div>

      {/* Result */}
      {schruteBucks > 0 ? (
        <div className="bureau-result">
          <div className="bureau-result-equation">
            <div className="bureau-result-side">
              <div className="bureau-result-amount beet-text">
                {Math.round(schruteBucks).toLocaleString()}
              </div>
              <div className="bureau-result-label">Schrute Bucks</div>
            </div>
            <div className="bureau-result-equals">=</div>
            <div className="bureau-result-side">
              <div className="bureau-result-amount nickel-text">
                {Math.round(stanleyNickels).toLocaleString()}
              </div>
              <div className="bureau-result-label">Stanley Nickels</div>
            </div>
          </div>
          <div className="bureau-result-meta">
            1 Stanley Nickel = ${fmt(snUsdValue, 8)} USD
            &nbsp;·&nbsp;
            {ratio}× more worthless than a Schrute Buck
          </div>
        </div>
      ) : (
        <div className="bureau-result bureau-result-empty">
          Enter Schrute Bucks above to see your Stanley Nickel equivalent.
        </div>
      )}

      <div className="bureau-footer">
        Rate determined by user-submitted leprechaun census data.
        Not reviewed by any actual government body. Not even the Irish one.
      </div>
    </div>
  );
}
