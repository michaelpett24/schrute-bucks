import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="This page does not exist. Dwight is investigating."
        path="/404"
      />

      <div className="not-found-card">
        <div className="not-found-stamp">INCIDENT REPORT #404</div>
        <div className="not-found-emoji">🥬</div>
        <h2 className="not-found-title">This page does not exist.</h2>
        <p className="not-found-body">
          Dwight K. Schrute has been notified and is conducting a full investigation.
          A full perimeter sweep of the Scranton branch is underway. This is not a drill.
        </p>
        <p className="not-found-body">
          Michael has been told there is a "small situation." He is currently at Chili's.
        </p>
        <div className="not-found-meta">Error 404 · Page not found · Filed with the Lackawanna County Sheriff's Department</div>
        <Link to="/" className="not-found-btn">↩ Return to the Converter</Link>
      </div>
    </>
  );
}
