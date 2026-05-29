import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import Converter from '../components/Converter';
import QuoteCarousel from '../components/QuoteCarousel';
import WorthinessBar from '../components/WorthinessBar';
import ShareButton from '../components/ShareButton';
import ShareGenerator from '../components/ShareGenerator';
import StanleyNickelBureau from '../components/StanleyNickelBureau';
import ShopBanner from '../components/ShopBanner';

const RATE_API = 'https://open.er-api.com/v6/latest/USD';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Schrute Bucks & Stanley Nickels Exchange',
  description:
    "Convert Schrute Bucks and Stanley Nickels — the fictional currencies from NBC's The Office — to real-world money including USD, EUR, GBP, JPY, CAD, AUD, MXN, and INR.",
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  creator: { '@type': 'Organization', name: 'Schrute Farms LLC' },
};

export default function Home() {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [ratesDate, setRatesDate] = useState(null);
  const [currentValues, setCurrentValues] = useState({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch(RATE_API)
      .then((r) => r.json())
      .then((data) => {
        if (data?.rates) {
          setRates(data.rates);
          setRatesDate(data.time_last_update_utc ?? null);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const schruteBucks = currentValues?.SB ?? 0;

  return (
    <>
      <SEO
        description="Free Schrute Bucks to USD converter. Set your own unicorn-to-leprechaun ratio to calculate Stanley Nickels. Live USD, EUR, GBP, JPY rates. From NBC's The Office."
        path="/"
        jsonLd={jsonLd}
      />

      <div className="page-intro">
        <p>
          The internet's only <strong>Schrute Bucks converter</strong> — with live real-world exchange rates
          and a scientifically adjustable Stanley Nickel calculator below.
          Powered by Dwight Schrute's unwavering confidence in beet-based monetary policy.
        </p>
        <p className="page-intro-sub">Not actually official. Dunder Mifflin does not endorse this site.</p>
      </div>

      <div className="card">
        <Converter
          rates={rates}
          loading={loading}
          onValuesChange={setCurrentValues}
        />
        <ShareGenerator values={currentValues} searchParams={searchParams.toString()} />
      </div>

      {ratesDate && (
        <p className="rates-note">Live rates as of {new Date(ratesDate).toLocaleDateString()}</p>
      )}

      <div className="card">
        <WorthinessBar usdValue={currentValues?.USD ?? 0} />
      </div>

      <StanleyNickelBureau schruteBucks={schruteBucks} />

      <ShareButton
        path="/"
        text="How many Schrute Bucks do you have? Convert them to real money — plus set your own unicorn:leprechaun ratio for Stanley Nickels 🥬🍀"
      />

      <ShopBanner />

      <QuoteCarousel />
    </>
  );
}
