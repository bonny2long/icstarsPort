import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { profile } from "../../data/profile";
import Button from "../ui/Button";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "Experience", to: "/experience" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const contactIsActive =
    location.pathname === "/about" && location.hash === "#contact";
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[1.75rem] border border-white/70 bg-white/80 px-4 py-3 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-6">
            <Link to="/" onClick={closeMenu} className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                {profile.name}
              </p>
              <p className="mt-1 truncate text-base font-semibold tracking-tight text-slate-950 sm:text-lg">
                {profile.headline}
              </p>
            </Link>

            <div className="hidden items-center gap-1 xl:flex">
              {navItems.map((item) => (
                <NavItem
                  key={item.to}
                  label={item.label}
                  suppressActive={item.to === "/about" && contactIsActive}
                  to={item.to}
                />
              ))}
              <ContactAction
                className="ml-2"
                isActive={contactIsActive}
              />
              <Button
                href={profile.resumeHref}
                download
                variant="secondary"
                className="ml-1 px-4 py-2"
              >
                Resume
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:border-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 xl:hidden"
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMenuOpen ? (
            <div
              id="mobile-navigation"
              className="mt-4 border-t border-slate-200 pt-4 xl:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <MobileNavItem
                    key={item.to}
                    label={item.label}
                    onClick={closeMenu}
                    suppressActive={item.to === "/about" && contactIsActive}
                    to={item.to}
                  />
                ))}
                <ContactAction
                  className="mt-2 w-full justify-center"
                  isActive={contactIsActive}
                  mobile
                  onClick={closeMenu}
                />
                <Button
                  className="w-full justify-center"
                  href={profile.resumeHref}
                  download
                  variant="secondary"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

function NavItem({ label, suppressActive = false, to }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) => {
        const showActive = isActive && !suppressActive;

        return [
          "rounded-full px-4 py-2 text-sm font-semibold transition",
          showActive
            ? "bg-slate-950 text-white"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
        ].join(" ");
      }}
    >
      {label}
    </NavLink>
  );
}

function ContactAction({
  className = "",
  isActive,
  mobile = false,
  onClick,
}) {
  const classes = [
    "inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-teal-950/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2",
    isActive
      ? "border-teal-800 bg-teal-800 ring-2 ring-teal-200"
      : "border-teal-700 bg-teal-700 hover:-translate-y-0.5 hover:bg-teal-800",
    mobile ? "min-h-11" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      to="/about#contact"
      aria-current={isActive ? "location" : undefined}
      className={classes}
      onClick={onClick}
    >
      Contact
    </Link>
  );
}

function MobileNavItem({
  label,
  onClick,
  suppressActive = false,
  to,
}) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={onClick}
      className={({ isActive }) => {
        const showActive = isActive && !suppressActive;

        return [
          "rounded-2xl px-4 py-3 text-sm font-semibold transition",
          showActive
            ? "bg-slate-950 text-white"
            : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-950",
        ].join(" ");
      }}
    >
      {label}
    </NavLink>
  );
}
