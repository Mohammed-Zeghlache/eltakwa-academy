import { useLanguage } from "../hooks/useLanguage.jsx";
import { COURSES } from "../data/courses.js";
import { QURAN_ITEMS } from "../data/quran.js";

export default function About() {
  const { t } = useLanguage();
  const courseCount =
    COURSES.length + QURAN_ITEMS.filter((q) => !q.infoOnly).length;

  return (
    <section>
      <div className="container about-grid" style={{ paddingTop: "2rem" }}>
        <div className="about-credentials">
          <h3>{t.credTitle}</h3>
          <ul className="credential-list">
            <li><span>{t.cred1}</span></li>
            <li><span>{t.cred2}</span></li>
            <li><span>{t.cred3}</span></li>
            <li><span>{t.cred4}</span></li>
            <li><span>{t.cred5}</span></li>
          </ul>
        </div>
        <div className="about-copy">
          <span className="section-kicker">{t.aboutKicker}</span>
          <h2>{t.aboutTitle}</h2>
          <blockquote>{t.aboutQuote}</blockquote>
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
          <div className="about-badges">
            <div className="about-badge">
              <b>{t.aboutBadge1}</b>
              <span>{t.aboutBadge1L}</span>
            </div>
            <div className="about-badge">
              <b>{courseCount}+</b>
              <span>{t.aboutBadge2L}</span>
            </div>
            <div className="about-badge">
              <b>{t.aboutBadge3}</b>
              <span>{t.aboutBadge3L}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}