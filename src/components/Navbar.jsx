import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ title }) {
  return (
    <nav
      className="navbar mb-12 shadow-lg text-neutral-content"
      style={{ backgroundColor: "#7EB6C7" }}
    >
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-3 text-3xl text-white" />
          <Link to="/" className="text-lg font-bold align-middle text-white">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link
              to="/"
              className="btn-ghost btn-sm rounded-btn text-2xl text-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="btn-ghost btn-sm rounded-btn text-2xl text-white"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

export default Navbar;
