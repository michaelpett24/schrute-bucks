import SEO from '../components/SEO';
import ShareButton from '../components/ShareButton';
import ShopBanner from '../components/ShopBanner';
import { Link } from 'react-router-dom';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Are Schrute Bucks? The Office Currency Explained',
  description:
    'Learn about Schrute Bucks and Stanley Nickels — the fictional currencies invented by Dwight Schrute on NBC\'s The Office. History, value, and the famous exchange with Stanley Hudson.',
  datePublished: '2026-05-28',
  dateModified: '2026-05-28',
  author: { '@type': 'Organization', name: 'Schrute Farms LLC' },
  publisher: { '@type': 'Organization', name: 'Schrute Bucks & Stanley Nickels Exchange', url: 'https://schrutebucks.lol' },
  about: [
    { '@type': 'Thing', name: 'Schrute Bucks' },
    { '@type': 'Thing', name: 'Stanley Nickels' },
    { '@type': 'TVSeries', name: 'The Office' },
  ],
};

export default function About() {
  return (
    <>
      <SEO
        title="What Are Schrute Bucks?"
        description="Schrute Bucks are the fictional reward currency invented by Dwight Schrute on NBC's The Office. Learn their history, value in USD, and the famous Stanley Nickels exchange."
        path="/about"
        type="article"
        jsonLd={jsonLd}
      />

      <article className="content-page">
        <h2 className="content-h2">What Are Schrute Bucks?</h2>
        <p>
          <strong>Schrute Bucks</strong> are a fictional employee-reward currency invented by
          Dwight K. Schrute, Assistant (to the) Regional Manager of Dunder Mifflin's Scranton
          branch, on NBC's <em>The Office</em>. Dwight created them as a motivational system to
          incentivize his co-workers — offering Schrute Bucks in exchange for good behavior,
          productivity, and compliance with his various directives.
        </p>
        <p>
          Despite Dwight's unwavering belief in their value, Schrute Bucks are worth approximately
          <strong> one-hundredth of one cent</strong> (USD $0.001). In practice, no Dunder Mifflin
          employee has ever voluntarily redeemed them for anything.
        </p>

        <div className="content-callout">
          <strong>Exchange Rate:</strong> 1 Schrute Buck = $0.001 USD
          <br />
          <strong>Accepted at:</strong> Schrute Farms (Bed &amp; Breakfast). Nowhere else.
        </div>

        <h2 className="content-h2">What Are Stanley Nickels?</h2>
        <p>
          <strong>Stanley Nickels</strong> are the equally fictional currency proposed by
          Stanley Hudson — Dunder Mifflin's senior sales representative — as a direct response
          to Dwight's Schrute Bucks. Unlike Schrute Bucks, Stanley Nickels were never seriously
          offered to anyone. They exist solely as a punchline.
        </p>
        <p>
          When Dwight asked about their value, Stanley delivered one of <em>The Office</em>'s
          most quoted exchanges — from <strong>Season 3, Episode 23: "The Job"</strong> (aired May 10, 2007):
        </p>

        <blockquote className="content-quote">
          <p><strong>Dwight:</strong> "You have earned one Schrute Buck."</p>
          <p><strong>Stanley:</strong> "I don't want it."</p>
          <p><strong>Dwight:</strong> "Then you have been deducted fifty Schrute Bucks."</p>
          <p><strong>Stanley:</strong> "Make it a hundred."</p>
          <p><strong>Dwight:</strong> "Don't you want to earn Schrute Bucks?"</p>
          <p><strong>Stanley:</strong> "No. In fact, I'll give you a billion Stanley Nickels if you never talk to me again."</p>
          <p><strong>Dwight:</strong> "What's the ratio of Stanley Nickels to Schrute Bucks?"</p>
          <p><strong>Stanley:</strong> "The same as the ratio of unicorns to leprechauns."</p>
        </blockquote>
        <p style={{ fontSize: '0.78rem', color: 'var(--ink-light)', fontStyle: 'italic' }}>
          (Dialogue approximate — watch "The Job" S3E23 for the full scene.)
        </p>

        <h2 className="content-h2">Episodes Featuring Schrute Bucks</h2>
        <p>
          Schrute Bucks appear across multiple seasons of <em>The Office</em> as a recurring
          joke about Dwight's management delusions. The currency became a fan-favorite symbol
          of the show's humor — the gap between Dwight's earnest belief in his own authority
          and everyone else's complete indifference to it.
        </p>
        <p>
          The Schrute Buck reward system was part of Dwight's broader attempt to establish
          a parallel power structure within the Scranton branch — alongside his "volunteer
          sheriff deputy" status and his Assistant Regional Manager title (which Michael Scott
          consistently called "Assistant <em>to</em> the Regional Manager").
        </p>

        <h2 className="content-h2">How Much Is a Schrute Buck Worth?</h2>
        <p>
          In real-money terms, Dwight pegged one Schrute Buck at one-hundredth of a cent —
          meaning <strong>1,000 Schrute Bucks = $1.00 USD</strong>. Use our{' '}
          <Link to="/">Schrute Bucks converter</Link> to see exactly how little your Schrute
          Bucks are worth in USD, EUR, GBP, JPY, and other real currencies.
        </p>

        <h2 className="content-h2">About Stanley Nickels Value</h2>
        <p>
          Stanley Nickels have no defined exchange rate — their value is metaphysically tied
          to the ratio of unicorns to leprechauns, which is to say: undefined, imaginary, and
          deeply unhelpful. The Irish Folklore Commission has documented <strong>236 leprechaun
          colonies</strong> in County Kerry alone, establishing a canonical ratio of
          1&nbsp;unicorn&nbsp;:&nbsp;236&nbsp;leprechauns. By that logic, 1 Schrute Buck = 236
          Stanley Nickels. Our <strong>Stanley Nickel Exchange Bureau</strong> lets you set your
          own unicorn-to-leprechaun ratio based on your own field research.
        </p>

        <ShopBanner />

        <ShareButton
          path="/about"
          text="Schrute Bucks explained: worth 1/100th of a cent, accepted nowhere. Stanley Nickels: even worse. The Office fan deep dive 🥬🪙"
        />
      </article>
    </>
  );
}
