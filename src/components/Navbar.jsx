
import { useState } from "react";
import { FaHome, FaBook, FaBars, FaTimes } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import { MdPermContactCalendar } from "react-icons/md";

const Navbar = () => {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    const links = [
        { to: "/", label: "Home", icon: <FaHome /> },
        { to: "/create", label: "Add Book", icon: <FaBook /> },
        { to: "/buy", label: "Buy Books", icon: <ImBooks /> },
        { to: "/contact", label: "Contact", icon: <MdPermContactCalendar /> },
    ];

    const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

    return (
        <nav className="bg-white text-gray-800 shadow-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <img
                                src="https://www.krishangtechnolab.com/wp-content/uploads/2023/03/mern-stack-technologies-1.png"
                                alt="Logo"
                                className="h-8 w-auto "
                            />
                        </Link>
                        <style>
                            {`
              @keyframes floatAnim {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
              }
              .float-animation {
                animation: floatAnim 3s ease-in-out infinite;
              }
              `}
                        </style>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden sm:flex sm:space-x-10">
                        {links.map((link) => {
                            const isActive = location.pathname === link.to;
                            return (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`flex gap-2 items-center px-3 py-2 rounded-md text-sm font-medium ${isActive
                                            ? "bg-gray-800 text-white"
                                            : "text-gray-800 hover:bg-gray-800 hover:text-white"
                                        }`}
                                >
                                    {link.label} {link.icon}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Profile & Mobile Toggle */}
                    <div className="flex items-center">
                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="sm:hidden p-2 rounded-md text-gray-800 hover:bg-gray-200 focus:outline-none"
                        >
                            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>

                        {/* Profile Avatar */}
                        <a
                            href="https://github.com/binayakbhandari"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4"
                        >
                            <img
                                src="https://avatars.githubusercontent.com/u/173297872?s=400&v=4"
                                alt="Profile"
                                className="h-8 w-8 rounded-full bg-gray-200 outline outline-1 outline-gray-300"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="sm:hidden px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
                    {links.map((link) => {
                        const isActive = location.pathname === link.to;
                        return (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setMobileOpen(false)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium ${isActive
                                        ? "bg-gray-800 text-white"
                                        : "text-gray-800 hover:bg-gray-800 hover:text-white"
                                    }`}
                            >
                                {link.label} {link.icon}
                            </Link>
                        );
                    })}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
