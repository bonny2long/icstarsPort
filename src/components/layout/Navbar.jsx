import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full bg-slate-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO / NAME */}
        <Link
          to="/"
          className="text-xl font-display font-bold text-white hover:text-emerald-400 transition"
          onClick={closeMenu}
        >
          Bonny*
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <NavItem to="/leadership" label="Leadership" />
          <NavItem to="/client" label="Client Project" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/geekweek" label="Geek Week" />
          <NavItem to="/wellness" label="Wellness" />
          <NavItem to="/career" label="Career Path" />
          <NavItem to="/contact" label="Contact" />
        </div>

        {/* HAMBURGER BUTTON - visible only on mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out my-1 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 bg-slate-800 border-t border-slate-700 flex flex-col gap-4">
          <MobileNavItem to="/leadership" label="Leadership" onClick={closeMenu} />
          <MobileNavItem to="/client" label="Client Project" onClick={closeMenu} />
          <MobileNavItem to="/projects" label="Projects" onClick={closeMenu} />
          <MobileNavItem to="/geekweek" label="Geek Week" onClick={closeMenu} />
          <MobileNavItem to="/wellness" label="Wellness" onClick={closeMenu} />
          <MobileNavItem to="/career" label="Career Path" onClick={closeMenu} />
          <MobileNavItem to="/contact" label="Contact" onClick={closeMenu} />
        </div>
      </div>
    </nav>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `transition ${
          isActive
            ? "text-emerald-400 font-semibold"
            : "text-slate-300 hover:text-emerald-400"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

function MobileNavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block py-2 px-3 rounded-lg text-base font-medium transition-all ${
          isActive
            ? "text-emerald-400 bg-slate-700/50 font-semibold"
            : "text-slate-300 hover:text-emerald-400 hover:bg-slate-700/30"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
