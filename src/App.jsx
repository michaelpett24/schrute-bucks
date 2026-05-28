import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import HeaderLogo from './components/HeaderLogo';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <HeaderLogo />
        <h1 className="site-title">Schrute Bucks &amp; Stanley Nickels Exchange</h1>
        <p className="site-subtitle">Official Currency of the Lackawanna County Regional Office</p>
        <Nav />
      </header>

      <div className="disclaimer">
        <strong>Dwight:</strong> "What's the ratio of Stanley Nickels to Schrute Bucks?"
        &nbsp;&nbsp;
        <strong>Stanley:</strong> "The same as the ratio of unicorns to leprechauns."
      </div>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>Schrute Farms LLC &bull; Dunder Mifflin Scranton Branch &bull; Est. 2005</p>
        <p>Schrute Bucks and Stanley Nickels are not legal tender. Not even in Scranton.</p>
        <p>This is a fan site. The Office is the property of NBC Universal / Universal Television.</p>
      </footer>
    </div>
  );
}
