import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Schrute Bucks & Stanley Nickels Exchange';
const SITE_URL = 'https://schrutebucks.lol'; // update once deployed
const OG_IMAGE = 'https://schrutebucks.lol/og-image.png';
const DEFAULT_DESC =
  'Convert Schrute Bucks and Stanley Nickels to real-world currencies like USD, EUR, GBP, and more. The official fan calculator for The Office currency exchange.';

export default function SEO({ title, description, path = '', type = 'website', jsonLd }) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — The Office Currency Converter`;
  const desc = description || DEFAULT_DESC;
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      <meta name="keywords" content="Schrute Bucks, Stanley Nickels, The Office, Dunder Mifflin, currency converter, Dwight Schrute, Stanley Hudson, office fan site, schrute bucks worth, stanley nickels exchange rate" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Schrute Bucks Exchange — 10,000 Schrute Bucks = $1.00 USD" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content="Schrute Bucks Exchange — 10,000 Schrute Bucks = $1.00 USD" />

      {/* JSON-LD structured data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
