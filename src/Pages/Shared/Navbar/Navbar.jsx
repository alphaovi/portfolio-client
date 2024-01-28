import { Link } from "react-router-dom";
import { PiGithubLogoThin } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";

const Navbar = () => {
    const navItems = <>
        <Link className="mr-5 text-3xl text-white" to={"https://www.linkedin.com/in/foysalahamedovi/"}><PiLinkedinLogo /></Link>
        <Link className="mr-5 text-3xl text-white " to={"https://github.com/alphaovi"}><PiGithubLogoThin /></Link>
        <Link className="mr-5 text-3xl text-white" to={"https://twitter.com/FoysalAhamedOvi"}><CiTwitter /></Link>
        <Link className="mr-5 text-3xl text-white" to="/contact">Contact</Link>

    </>
    return (
        <div className="navbar bg-black sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
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
                <Link to={"https://drive.google.com/file/d/12qQo0JFae9uyWkrJAaslq2zekKpmay8M/view?usp=sharing"} className=" btn btn-outline btn-success">My Resume</Link>
            </div>
        </div>
    );
};

export default Navbar;