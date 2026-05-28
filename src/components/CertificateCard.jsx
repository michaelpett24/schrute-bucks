import { forwardRef } from 'react';

function fmtSB(val) {
  if (!val) return '0';
  const n = Number(String(val).replace(/,/g, ''));
  if (isNaN(n)) return String(val);
  return Math.round(n).toLocaleString();
}

const CertificateCard = forwardRef(function CertificateCard({ name, reason, amount, date }, ref) {
  return (
    <div ref={ref} style={{
      width: 680,
      background: '#fdfaf3',
      fontFamily: "'Courier New', Courier, monospace",
      color: '#2c2c2c',
      border: '3px solid #8b1a2e',
      boxSizing: 'border-box',
      position: 'relative',
    }}>
      {/* Gold inner border */}
      <div style={{ position: 'absolute', top: 8, left: 8, right: 8, bottom: 8, border: '1px solid #c8a84b', pointerEvents: 'none' }} />

      {/* Corner marks */}
      <div style={{ position: 'absolute', top: 14, left: 14, width: 14, height: 14, borderTop: '2px solid #c8a84b', borderLeft: '2px solid #c8a84b' }} />
      <div style={{ position: 'absolute', top: 14, right: 14, width: 14, height: 14, borderTop: '2px solid #c8a84b', borderRight: '2px solid #c8a84b' }} />
      <div style={{ position: 'absolute', bottom: 14, left: 14, width: 14, height: 14, borderBottom: '2px solid #c8a84b', borderLeft: '2px solid #c8a84b' }} />
      <div style={{ position: 'absolute', bottom: 14, right: 14, width: 14, height: 14, borderBottom: '2px solid #c8a84b', borderRight: '2px solid #c8a84b' }} />

      {/* Header */}
      <div style={{ background: '#8b1a2e', padding: '22px 48px 18px', textAlign: 'center', color: '#fdfaf3' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.8, marginBottom: 6 }}>
          Dunder Mifflin, Inc. · Schrute Farms Monetary Authority
        </div>
        <div style={{ fontSize: 22, fontWeight: 'bold', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Certificate of Schrute Buck Award
        </div>
        <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.7, marginTop: 6 }}>
          Lackawanna County, Pennsylvania · Est. 2005
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '36px 64px 28px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#7a7a8a', marginBottom: 10 }}>
          This is to certify that
        </div>

        <div style={{ fontSize: 30, fontWeight: 'bold', color: '#8b1a2e', borderBottom: '2px solid #c8a84b', paddingBottom: 8, marginBottom: 18, minHeight: 40 }}>
          {name || 'Recipient Name'}
        </div>

        <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#7a7a8a', marginBottom: 6 }}>
          has been awarded
        </div>

        <div style={{ fontSize: 52, fontWeight: 'bold', color: '#2c2c2c', lineHeight: 1, marginBottom: 2 }}>
          {fmtSB(amount) || '0'}
        </div>
        <div style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#7a7a8a', marginBottom: 22 }}>
          Schrute Bucks
        </div>

        <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#7a7a8a', marginBottom: 10 }}>
          for the following outstanding contribution:
        </div>

        <div style={{ fontSize: 15, fontStyle: 'italic', color: '#2c2c2c', border: '1px dashed #d4c9b0', padding: '12px 24px', marginBottom: 28, minHeight: 46, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          "{reason || 'Being an acceptable employee'}"
        </div>

        <div style={{ fontSize: 11, color: '#9a9a9a', marginBottom: 28, letterSpacing: '0.06em' }}>
          Awarded on {date}
        </div>

        {/* Signatures */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 48 }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ borderTop: '1px solid #2c2c2c', paddingTop: 8 }}>
              <div style={{ fontSize: 13, fontStyle: 'italic', marginBottom: 3 }}>Dwight K. Schrute</div>
              <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7a7a8a' }}>
                Assistant to the Regional Manager
              </div>
            </div>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ borderTop: '1px solid #2c2c2c', paddingTop: 8 }}>
              <div style={{ fontSize: 13, fontStyle: 'italic', color: '#aaaaaa', marginBottom: 3 }}>Michael G. Scott</div>
              <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7a7a8a' }}>
                Regional Manager (currently at Chili's)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', padding: '10px 24px 18px', fontSize: 9, color: '#9a9a9a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        schrutebucks.lol · Not Legal Tender · Not Redeemable for Actual Currency · Void Where Prohibited (Everywhere)
      </div>
    </div>
  );
});

export default CertificateCard;
