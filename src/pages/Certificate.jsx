import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import SEO from '../components/SEO';
import CertificateCard from '../components/CertificateCard';
import ShopBanner from '../components/ShopBanner';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Schrute Buck Certificate Generator',
  description: 'Generate a printable Dunder Mifflin Schrute Buck award certificate. Enter a name, amount, and reason — download as a PNG and share.',
  applicationCategory: 'UtilitiesApplication',
};

export default function Certificate() {
  const [name, setName]     = useState('');
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [capturing, setCapturing] = useState(false);
  const cardRef = useRef(null);

  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  async function download() {
    if (!cardRef.current) return;
    setCapturing(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: '#fdfaf3',
        logging: false,
        useCORS: true,
      });
      const a = document.createElement('a');
      a.download = `schrute-buck-certificate-${(name || 'award').toLowerCase().replace(/\s+/g, '-')}.png`;
      a.href = canvas.toDataURL('image/png');
      a.click();
    } finally {
      setCapturing(false);
    }
  }

  return (
    <>
      <SEO
        title="Schrute Buck Certificate Generator"
        description="Generate an official Dunder Mifflin Schrute Buck award certificate. Enter a name, amount, and reason — download as PNG and share with your coworkers."
        path="/certificate"
        jsonLd={jsonLd}
      />

      <div className="page-intro">
        <p>
          Award Schrute Bucks to anyone who deserves recognition — or to yourself, which
          Dwight says is "statistically the most common use case." Fill in the details,
          preview your certificate, and download it as a PNG.
        </p>
      </div>

      {/* Form */}
      <div className="card cert-form-card">
        <div className="cert-form-row">
          <div className="cert-field">
            <label className="cert-label">Recipient name</label>
            <input
              className="cert-input"
              type="text"
              placeholder="e.g. Jim Halpert"
              value={name}
              onChange={e => setName(e.target.value)}
              maxLength={40}
            />
          </div>
          <div className="cert-field cert-field-amount">
            <label className="cert-label">Schrute Bucks awarded</label>
            <input
              className="cert-input"
              type="text"
              inputMode="numeric"
              placeholder="e.g. 1,000"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              maxLength={20}
            />
          </div>
          <div className="cert-field cert-field-reason">
            <label className="cert-label">Reason for award</label>
            <input
              className="cert-input"
              type="text"
              placeholder="e.g. Arriving on time (twice)"
              value={reason}
              onChange={e => setReason(e.target.value)}
              maxLength={80}
            />
          </div>
        </div>

        <div className="cert-actions">
          <button className="cert-download-btn" onClick={download} disabled={capturing}>
            {capturing ? 'Generating…' : '⬇ Download Certificate'}
          </button>
          <p className="cert-note">Print it. Frame it. Give it to someone who will not appreciate it.</p>
        </div>
      </div>

      <ShopBanner />

      {/* Certificate preview */}
      <div className="cert-preview-section">
        <p className="cert-preview-label">Preview — updates as you type</p>
        <div className="cert-preview-scroll">
          <CertificateCard ref={cardRef} name={name} amount={amount} reason={reason} date={today} />
        </div>
      </div>
    </>
  );
}
