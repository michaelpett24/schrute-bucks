import { useState } from 'react';

const SITE_URL = 'https://schrutebucks.app'; // update once deployed

export default function ShareButton({ path = '', text }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE_URL}${path}`;
  const shareText = text || 'Convert Schrute Bucks and Stanley Nickels to real money! The Office fan calculator 🥬🪙';

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Schrute Bucks Exchange', text: shareText, url });
      } catch (_) { /* user dismissed */ }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_) {}
  }

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;
  const redditUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent('Schrute Bucks & Stanley Nickels Currency Converter — The Office Fan Site')}`;

  return (
    <div className="share-bar">
      <button className="share-btn primary" onClick={handleShare}>
        {copied ? '✅ Link Copied!' : '🔗 Share'}
      </button>
      <a
        className="share-btn twitter"
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X (Twitter)"
      >
        𝕏 Post
      </a>
      <a
        className="share-btn reddit"
        href={redditUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Reddit"
      >
        Reddit
      </a>
    </div>
  );
}
