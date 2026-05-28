import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        💱 Converter
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        📋 About
      </NavLink>
      <NavLink to="/faq" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        ❓ FAQ
      </NavLink>
    </nav>
  );
}
