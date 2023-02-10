import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4 text-dark">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search profiles and to see the detail of profiles.
      </p>
      <Link to="/" className="btn btn-accent text-white">
        Search Profiles
      </Link>
    </div>
  );
}

export default About;
