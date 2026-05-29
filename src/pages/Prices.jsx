import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ShareButton from '../components/ShareButton';
import ShopBanner from '../components/ShopBanner';

const SB_RATE = 0.001;

const ITEMS = [
  // Food & Drink
  { category: 'Food & Drink', emoji: '☕', name: 'Starbucks Latte', usd: 6.50, comment: "Dwight brews his own beet coffee. Costs 0 Schrute Bucks and tastes like ambition." },
  { category: 'Food & Drink', emoji: '🍔', name: 'Big Mac', usd: 5.99, comment: "Kevin has eaten three today. It is 10am. He has no regrets." },
  { category: 'Food & Drink', emoji: '🥨', name: 'Pretzel Day Pretzel', usd: 3.00, comment: "Stanley's reason for coming to work. This is not an exaggeration." },
  { category: 'Food & Drink', emoji: '🍕', name: 'Large Pizza', usd: 18.00, comment: "Kevin once ate an entire pie before the meeting started. He regrets nothing." },
  { category: 'Food & Drink', emoji: '🥬', name: 'Schrute Farms Beet', usd: 2.50, comment: "Sustainably grown. Organically certified. Backed by the full faith and credit of Schrute Farms." },
  { category: 'Food & Drink', emoji: '🌯', name: 'Chipotle Burrito', usd: 10.50, comment: "Michael once expensed 14 of these as 'client lunch.' Accounting flagged it immediately." },

  // Entertainment
  { category: 'Entertainment', emoji: '📺', name: 'Netflix (monthly)', usd: 15.99, comment: "Meredith's entire Friday night. Sometimes Thursday. Occasionally Wednesday." },
  { category: 'Entertainment', emoji: '🎬', name: 'Movie Ticket', usd: 15.00, comment: "Michael has seen Threat Level Midnight 47 times. He cries at the same part every time." },
  { category: 'Entertainment', emoji: '🎵', name: 'Spotify (monthly)', usd: 10.99, comment: "Andy would rather perform live. You did not ask for that." },
  { category: 'Entertainment', emoji: '🎤', name: 'Concert Ticket', usd: 350.00, comment: "Jim spent this to impress Pam at a show. It worked. He will never admit how much it cost." },
  { category: 'Entertainment', emoji: '🎮', name: 'PlayStation 5', usd: 499.00, comment: "Jim has completed every game on here. Dwight has never heard of it and does not care." },
  { category: 'Entertainment', emoji: '🎲', name: 'Dungeons & Dragons Set', usd: 45.00, comment: "Dwight runs a campaign every other Tuesday. Michael always insists on playing a wizard named Mike Scarn." },

  // Tech & Gadgets
  { category: 'Tech & Gadgets', emoji: '📱', name: 'iPhone 16', usd: 999.00, comment: "Ryan would use this to launch another startup. It would fail in 18 months. Again." },
  { category: 'Tech & Gadgets', emoji: '💻', name: 'MacBook Pro', usd: 2499.00, comment: "Ryan's startup burned through 12 of these. Investors are still upset." },
  { category: 'Tech & Gadgets', emoji: '🎧', name: 'AirPods Pro', usd: 249.00, comment: "Dwight communicates via hand signals and a beet-powered radio. More reliable." },
  { category: 'Tech & Gadgets', emoji: '📷', name: 'DSLR Camera', usd: 1299.00, comment: "The documentary crew had better equipment. They filmed for 9 years. Somehow nobody noticed." },

  // Cars
  { category: 'Cars', emoji: '🚗', name: 'Toyota Camry', usd: 28000, comment: "Reliable. Practical. Dwight calls it 'adequate.' This is his highest praise for non-beet items." },
  { category: 'Cars', emoji: '⚡', name: 'Tesla Model 3', usd: 42990, comment: "Ryan wanted one. He got a bus pass instead. The bus pass was eventually also repossessed." },
  { category: 'Cars', emoji: '🚙', name: "Dwight's Trans Am", usd: 15000, comment: "The finest vehicle ever manufactured. Dwight's words. Dwight's alone. Nobody agrees." },
  { category: 'Cars', emoji: '🏎', name: 'Ferrari 488', usd: 280000, comment: "Michael convinced himself he could afford one. He bought a Sebring. It had 80,000 miles." },

  // Real Estate
  { category: 'Real Estate', emoji: '🏠', name: 'Average US Home', usd: 420000, comment: "Michael bought a condo once with a mortgage he didn't fully understand. It was not fine." },
  { category: 'Real Estate', emoji: '🌾', name: 'Schrute Farms (est.)', usd: 750000, comment: "Appraised value disputed. Dwight believes it is worth significantly more. He is wrong." },
  { category: 'Real Estate', emoji: '🏙', name: 'NYC Studio Apartment', usd: 800000, comment: "Ryan moved here after his promotion. He was not ready. The city knew immediately." },
  { category: 'Real Estate', emoji: '🏢', name: 'Dunder Mifflin Scranton', usd: 2500000, comment: "Sabre acquired it for less than this. That should tell you something about paper's future." },

  // The Office
  { category: 'The Office', emoji: '☕', name: "World's Best Boss Mug", usd: 14.99, comment: "Michael bought this for himself. First day on the job. Has never once been questioned." },
  { category: 'The Office', emoji: '🏆', name: 'Dundie Award', usd: 12.00, comment: "Pam won Whitest Sneakers. She cried. It was a confusing night for everyone involved." },
  { category: 'The Office', emoji: '📄', name: 'Ream of Paper (DM)', usd: 45.00, comment: "The backbone of the Scranton economy. Dwight moves 1,000 units weekly. He is very proud." },
  { category: 'The Office', emoji: '🥄', name: "Kevin's Famous Chili", usd: 8.00, comment: "The secret is undercooking the onions. This has been disputed. Kevin is unavailable for comment." },
];

const CATEGORIES = ['All', ...Array.from(new Set(ITEMS.map(i => i.category)))];

function fmtSB(n) {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000)     return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000)         return `${(n / 1_000).toFixed(0)}K`;
  return n.toLocaleString();
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Real-World Prices in Schrute Bucks',
  description: 'How much does everyday stuff cost in Schrute Bucks? From a Starbucks latte to a house — everything priced in the official currency of Dunder Mifflin.',
};

export default function Prices() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? ITEMS : ITEMS.filter(i => i.category === active);

  return (
    <>
      <SEO
        title="Real-World Prices in Schrute Bucks"
        description="How much does a Starbucks latte cost in Schrute Bucks? What about a house, a Tesla, or a Big Mac? See everyday prices converted to Dunder Mifflin's official currency."
        path="/prices"
        jsonLd={jsonLd}
      />

      <div className="page-intro">
        <p>
          One Schrute Buck = $0.001 USD. So how far do they actually go? Browse below to see
          what everyday things cost in Schrute Bucks — or use the <Link to="/">converter</Link> for
          any custom amount.
        </p>
      </div>

      <div className="prices-filter">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`filter-btn${active === cat ? ' active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="prices-grid">
        {filtered.map(({ emoji, name, usd, comment }) => {
          const sb = usd / SB_RATE;
          return (
            <div key={name} className="price-card">
              <div className="price-card-emoji">{emoji}</div>
              <div className="price-card-name">{name}</div>
              <div className="price-card-sb">{fmtSB(sb)} <span className="price-card-sb-label">SB</span></div>
              <div className="price-card-usd">${usd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD</div>
              <div className="price-card-comment">{comment}</div>
            </div>
          );
        })}
      </div>

      <ShopBanner />

      <ShareButton
        path="/prices"
        text="How many Schrute Bucks does everyday stuff cost? A Starbucks latte = 6,500 SB. A house = 420M SB. The Office fan price guide 🥬"
      />
    </>
  );
}
