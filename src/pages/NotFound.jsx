import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-7xl font-bold mb-8">Oops!</h1>
          <p className="text-4xl mb-8">404-Page Not Found</p>
          <Link to="/" className="btn btn-accent">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
