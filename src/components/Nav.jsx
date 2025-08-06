import { NavLink } from "react-router";
import ActionButton from "./ActionButton";

const Nav = () => {
    const links = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>Statistics</NavLink></li>
        <li><NavLink>Applied Jobs</NavLink></li>
        <li><NavLink>Blog</NavLink></li>
    </>
    return (
        <div className=" bg-purple-200 shadow-sm p-6">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Job Market</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                    {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <ActionButton tittle={'Start Applying'} />
                </div>
                </div>
        </div>
    );
};

export default Nav;