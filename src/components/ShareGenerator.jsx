import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import ShareCard from './ShareCard';

const SITE_URL = 'https://relaxed-heliotrope-6334d8.netlify.app';

export default function ShareGenerator({ values, searchParams }) {
  const [open, setOpen] = useState(false);
  const [capturing, setCapturing] = useState(false);
  const [copied, setCopied] = useState(false);
  const cardRef = useRef(null);

  const hasValues = values && (values.SB > 0 || values.USD > 0);
  if (!hasValues) return null;

  const shareUrl = `${SITE_URL}/?${searchParams}`;

  async function downloadImage() {
    if (!cardRef.current) return;
    setCapturing(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: '#fdfaf3',
        logging: false,
        useCORS: true,
      });
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.download = 'schrute-bucks-exchange.png';
      a.href = dataUrl;
      a.click();
    } finally {
      setCapturing(false);
    }
  }

  async function shareImage() {
    if (!cardRef.current) return;
    setCapturing(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: '#fdfaf3',
        logging: false,
        useCORS: true,
      });
      canvas.toBlob(async (blob) => {
        const file = new File([blob], 'schrute-bucks.png', { type: 'image/png' });
        if (navigator.canShare?.({ files: [file] })) {
          await navigator.share({ files: [file], title: 'Schrute Bucks Exchange', url: shareUrl });
        } else {
          // Fallback: download
          const a = document.createElement('a');
          a.download = 'schrute-bucks.png';
          a.href = URL.createObjectURL(blob);
          a.click();
        }
        setCapturing(false);
      }, 'image/png');
    } catch {
      setCapturing(false);
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      prompt('Copy this link:', shareUrl);
    }
  }

  return (
    <>
      <button className="share-card-trigger" onClick={() => setOpen(true)}>
        🖼 Generate Share Image
      </button>

      {open && (
        <div className="share-modal-backdrop" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div className="share-modal">
            <button className="share-modal-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
            <h3 className="share-modal-title">Your Conversion Card</h3>
            <p className="share-modal-sub">Download the image or copy the link — both keep your current values.</p>

            {/* The card to capture */}
            <div className="share-card-preview">
              <ShareCard ref={cardRef} values={values} />
            </div>

            <div className="share-modal-actions">
              <button className="share-btn primary" onClick={downloadImage} disabled={capturing}>
                {capturing ? 'Generating…' : '⬇ Download PNG'}
              </button>
              <button className="share-btn twitter" onClick={shareImage} disabled={capturing}>
                📤 Share Image
              </button>
              <button className="share-btn reddit" onClick={copyLink}>
                {copied ? '✅ Copied!' : '🔗 Copy Link'}
              </button>
            </div>

            <p className="share-modal-note">
              Link includes your current values — anyone who opens it sees the same conversion.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
