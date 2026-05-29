import { useMemo } from 'react';

const SHOPS = [
  { label: 'The Office Complete Series', emoji: '📺', search: 'The+Office+Complete+Series+DVD' },
  { label: 'Dwight Schrute Merchandise', emoji: '🥬', search: 'Dwight+Schrute+merchandise' },
  { label: 'Dunder Mifflin Apparel', emoji: '👕', search: 'Dunder+Mifflin+shirt' },
  { label: 'World\'s Best Boss Mug', emoji: '☕', search: 'Worlds+Best+Boss+mug+The+Office' },
  { label: 'The Office Board Games', emoji: '🎲', search: 'The+Office+board+game' },
  { label: 'The Office Gifts & Collectibles', emoji: '🏆', search: 'The+Office+gifts+collectibles' },
  { label: 'Schrute Farms Merchandise', emoji: '🌾', search: 'Schrute+Farms+merchandise' },
  { label: 'The Office Books', emoji: '📖', search: 'The+Office+book+NBC' },
];

const TAG = 'collectorinsi-20';

export default function ShopBanner() {
  const shop = useMemo(() => SHOPS[Math.floor(Math.random() * SHOPS.length)], []);
  const url = `https://www.amazon.com/s?k=${shop.search}&tag=${TAG}`;

  return (
    <div className="shop-banner">
      <div className="shop-banner-label">Dunder Mifflin Company Store</div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="shop-banner-link"
      >
        <span className="shop-banner-emoji">{shop.emoji}</span>
        <span className="shop-banner-text">Shop: {shop.label} →</span>
      </a>
      <div className="shop-banner-sub">As an Amazon Associate this site earns from qualifying purchases.</div>
    </div>
  );
}
