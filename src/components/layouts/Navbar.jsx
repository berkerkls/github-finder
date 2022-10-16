import { FaGithub } from "react-icons/fa"
import {NavLink} from "react-router-dom"

function Navbar({title}) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
           <div className="flex-none px-2 mx-2">
            <FaGithub color="white" size={40} className="inline pr-2 text-3xl" />
            <NavLink to="/" className="text-lg font-bold align-middle text-white">
                {title}
            </NavLink>
           </div>
           <div className="flex-1 px-2 mx-2">
            <div className="flex justify-end">
                <NavLink to="/" className="btn btn-ghost btn-sm rounded-btn text-white">
                    Home
                </NavLink>
                <NavLink to="/about" className="btn btn-ghost btn-sm rounded-btn text-white">
                    About
                </NavLink>
            </div>
           </div>
        </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title: "Github Finder"
}

export default Navbar