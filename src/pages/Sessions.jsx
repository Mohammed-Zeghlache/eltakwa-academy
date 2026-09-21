import { useLanguage } from "../hooks/useLanguage.jsx";
import SessionCard from "../components/SessionCard.jsx";
import { SESSIONS } from "../data/sessions.js";

export default function Sessions() {
  const { t, lang } = useLanguage();
  return (
    <section className="section-alt">
      <div className="container">
        <div className="feature-panel">
          <div className="feature-content">
            <span className="section-kicker light">{t.sessionsKicker}</span>
            <h3>{t.sessionsTitle}</h3>
            <p>{t.sessionsLead}</p>
            <ul className="feature-list">
              {SESSIONS.map((s) => (
                <li key={s.slug}><span>{s.title[lang]}</span></li>
              ))}
            </ul>
          </div>
          <div className="feature-side">
            <div className="price-cards">
              <div className="price-card">
                <b className="label">{t.sessionsHintL}</b>
                <span className="amount">{t.sessionsHintV}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-grid" style={{ marginTop: "1.75rem" }}>
          {SESSIONS.map((s) => (
            <SessionCard key={s.slug} session={s} />
          ))}
        </div>
      </div>
    </section>
  );
}