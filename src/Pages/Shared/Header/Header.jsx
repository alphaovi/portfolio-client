import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
    const navItems = <>
    <Link className="mr-5 text-white" to={"/"}>Home</Link>
    <Link className="mr-5 text-white" to={"/about"}>About</Link>
    <Link className="mr-5 text-white" to={"/projects"}>Projects</Link>
    <Link className="mr-5 text-white" to={"/contact"}>Contact</Link>
    </>
    return (
        <div className="navbar bg-black mt-5 sticky">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl font-bold text-white">Foysal Ahamed Ovi</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={"/login"} className="btn">Login</Link>
            </div>
        </div>
    );
};

export default Header;