import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage.jsx";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">أكاديمية التقوى</div>
            <p>{t.footTagline}</p>
            <div className="social-row">
              <a href="https://www.instagram.com/academie_el_takwa_blida/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h4>{t.footAboutT}</h4>
            <ul>
              <li><Link to="/about">{t.footAbout1}</Link></li>
              <li><Link to="/news">{t.navNews}</Link></li>
              <li><Link to="/quran">{t.footAbout4}</Link></li>
              <li><Link to="/sessions">{t.footAbout3}</Link></li>
              <li><Link to="/registration">{t.navRegistration}</Link></li>
              <li><Link to="/feedback">{t.footAbout2}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t.footContactT}</h4>
            <ul>
              <li>0795 77 71 26</li>
              <li>
                <a href="https://www.instagram.com/academie_el_takwa_blida/" target="_blank" rel="noopener noreferrer">
                  @academie_el_takwa_blida
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © <span>{year}</span> أكاديمية التقوى — {t.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}