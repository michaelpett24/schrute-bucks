import SEO from '../components/SEO';
import ShareButton from '../components/ShareButton';
import ShopBanner from '../components/ShopBanner';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What are Schrute Bucks?',
    a: 'Schrute Bucks are a fictional reward currency invented by Dwight K. Schrute, Assistant (to the) Regional Manager at Dunder Mifflin\'s Scranton branch, on NBC\'s The Office. Dwight created them as a motivational tool to incentivize his coworkers, though no employee ever took them seriously.',
  },
  {
    q: 'How much is one Schrute Buck worth in real money?',
    a: 'One Schrute Buck is worth $0.001 USD — one-hundredth of one cent. That means you need 1,000 Schrute Bucks to equal $1.00. In Dwight\'s words, they are a robust monetary system backed by the full faith and credit of Schrute Farms.',
  },
  {
    q: 'What is a Stanley Nickel?',
    a: 'A Stanley Nickel is a fictional currency invented on the spot by Stanley Hudson as a sarcastic response to Dwight\'s Schrute Bucks. Stanley offered Dwight "a billion Stanley Nickels" to never speak to him again. When Dwight asked the exchange rate, Stanley replied: "The same as the ratio of unicorns to leprechauns." They have no real-world value.',
  },
  {
    q: 'What is the exchange rate between Schrute Bucks and Stanley Nickels?',
    a: 'According to Stanley Hudson: "The same as the ratio of unicorns to leprechauns." This site features an interactive Stanley Nickel Exchange Bureau where you set your own unicorn-to-leprechaun ratio. The Irish Folklore Commission documented 236 leprechaun colonies in County Kerry, establishing a canonical ratio of 1 unicorn : 236 leprechauns — meaning 1 Schrute Buck = 236 Stanley Nickels by default.',
  },
  {
    q: 'What episode of The Office features Schrute Bucks?',
    a: 'The most famous Schrute Bucks scene — including the Stanley Nickels exchange — is from Season 3, Episode 23: "The Job" (aired May 10, 2007). Schrute Bucks also appear as a recurring joke across multiple other seasons as part of Dwight\'s ongoing attempts to establish authority at the Scranton branch.',
  },
  {
    q: 'Who invented Schrute Bucks?',
    a: 'Dwight K. Schrute, played by Rainn Wilson on NBC\'s The Office (2005–2013). Dwight created them as part of his self-appointed management initiatives at the Dunder Mifflin Scranton branch.',
  },
  {
    q: 'Can I convert Schrute Bucks to USD, EUR, or other currencies?',
    a: 'Yes — that\'s exactly what this calculator does. Enter any number of Schrute Bucks or Stanley Nickels and instantly see the equivalent in USD, EUR, GBP, JPY, CAD, AUD, MXN, INR, and more, using live exchange rates.',
  },
  {
    q: 'Are Schrute Bucks legal tender?',
    a: 'No. Schrute Bucks are not recognized as legal tender by the United States government, the Federal Reserve, the Lackawanna County government, or any jurisdiction except, arguably, Schrute Farms Bed & Breakfast.',
  },
  {
    q: 'How many Schrute Bucks equal a dollar?',
    a: '1,000 Schrute Bucks equal $1.00 USD. Or put another way, 100,000 Schrute Bucks equals $100 — roughly the cost of three reams of Dunder Mifflin premium paper.',
  },
  {
    q: 'What TV show are Schrute Bucks from?',
    a: 'Schrute Bucks are from The Office (US), the NBC mockumentary sitcom that aired from 2005 to 2013. The show follows the employees of Dunder Mifflin\'s Scranton, Pennsylvania paper company. Dwight Schrute (Rainn Wilson) is the Assistant to the Regional Manager who invented Schrute Bucks.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <SEO
        title="Schrute Bucks FAQ"
        description="Frequently asked questions about Schrute Bucks and Stanley Nickels from The Office. How much are Schrute Bucks worth? What episode? Who invented them? All answered here."
        path="/faq"
        jsonLd={jsonLd}
      />

      <article className="content-page">
        <h2 className="content-h2">Schrute Bucks &amp; Stanley Nickels — FAQ</h2>
        <p className="faq-intro">
          Everything you need to know about the fictional currencies of Dunder Mifflin's
          Scranton branch. Use our <Link to="/">converter</Link> to check live values.
        </p>

        <div className="faq-list">
          {FAQS.map(({ q, a }, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{q}</span>
                <span className="faq-chevron">{open === i ? '▲' : '▼'}</span>
              </button>
              {open === i && (
                <div className="faq-answer">
                  <p>{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <ShopBanner />

        <ShareButton
          path="/faq"
          text="Schrute Bucks FAQ: how much are they worth? What are Stanley Nickels? Everything from The Office explained 🥬"
        />
      </article>
    </>
  );
}
