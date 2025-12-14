import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO / NAME */}
        <Link
          to="/"
          className="text-xl font-display font-bold text-white hover:text-emerald-400 transition"
        >
          Bonny
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <NavItem to="/leadership" label="Leadership" />
          <NavItem to="/client" label="Client Project" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/geekweek" label="Geek Week" />
          <NavItem to="/wellness" label="Wellness" />
          <NavItem to="/career" label="Career Path" />
          <NavItem to="/contact" label="Contact" />
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
