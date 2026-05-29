import SEO from '../components/SEO';

export default function Disclaimer() {
  return (
    <>
      <SEO
        title="Affiliate Disclosure & Disclaimer"
        description="Affiliate disclosure and fan site disclaimer for schrutebucks.lol."
        path="/disclaimer"
      />

      <article className="content-page">
        <h2 className="content-h2">Affiliate Disclosure</h2>
        <p>
          schrutebucks.lol is a participant in the <strong>Amazon Services LLC Associates
          Program</strong>, an affiliate advertising program designed to provide a means for
          sites to earn advertising fees by advertising and linking to Amazon.com.
        </p>
        <p>
          This means that when you click certain links on this site and make a purchase on
          Amazon, we may earn a small commission — at <strong>no additional cost to you</strong>.
          The price you pay is exactly the same whether you use our link or go directly to Amazon.
        </p>
        <p>
          We only link to products we think Office fans would genuinely enjoy. The commission
          helps keep the site running and Schrute Farms operational.
        </p>

        <div className="content-callout">
          <strong>FTC Disclosure:</strong> In accordance with FTC guidelines, please assume
          that any links to Amazon on this site are affiliate links that may earn us a commission
          if you make a purchase.
        </div>

        <h2 className="content-h2">Fan Site Disclaimer</h2>
        <p>
          schrutebucks.lol is an <strong>unofficial fan site</strong>. It is not affiliated
          with, endorsed by, or connected to NBC, NBCUniversal, Universal Television, Deedle-Dee
          Productions, or any other entity involved in the production of <em>The Office</em>.
        </p>
        <p>
          <em>The Office</em>, Schrute Bucks, Stanley Nickels, Dunder Mifflin, and all related
          characters and elements are the property of their respective owners. This site exists
          purely for entertainment and fan appreciation purposes.
        </p>
        <p>
          Schrute Bucks and Stanley Nickels are fictional currencies with no real-world monetary
          value. Please do not attempt to use them to purchase beets, paper, or anything else.
          Dwight would be disappointed. Stanley would not care.
        </p>

        <h2 className="content-h2">Accuracy Disclaimer</h2>
        <p>
          Exchange rates displayed on this site are sourced from open.er-api.com and updated
          daily. While we strive for accuracy, these rates are for entertainment purposes and
          should not be used for actual financial decisions.
        </p>
        <p>
          The value of Schrute Bucks ($0.0001 USD) is based on lore from the show and is not
          guaranteed by any government, central bank, or the full faith and credit of Schrute
          Farms, regardless of what Dwight says.
        </p>
      </article>
    </>
  );
}
