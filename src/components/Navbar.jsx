import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage.jsx";
import Logo from '../images/Logo.png'

const LINKS = [
  { to: "/", key: "navHome" },
  { to: "/about", key: "navAbout" },
  { to: "/news", key: "navNews" },
  { to: "/quran", key: "navQuran" },
  { to: "/courses", key: "navCourses" },
  { to: "/sessions", key: "navSessions" },
  { to: "/registration", key: "navRegistration" },
  { to: "/feedback", key: "navFeedback" },
  { to: "/contact", key: "navContact" },
];

export default function Navbar() {
  const { t, lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src= {Logo} alt="أكاديمية التقوى" className="brand-logo" width="140" height="44" />
          <span className="brand-name">
            <b>أكاديمية التقوى</b>
            <span>لتكوين وتطوير المرأة</span>
          </span>
        </Link>
        <nav className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {t[l.key]}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="lang-switch" type="button" onClick={toggle}>
            {lang === "ar" ? "English" : "العربية"}
          </button>
          <button
            className="burger"
            type="button"
            aria-label="menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}