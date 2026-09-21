import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage.jsx";
import { SESSIONS } from "../data/sessions.js";
import Button from "../components/Button.jsx";

export default function SessionDetails() {
  const { slug } = useParams();
  const { lang, t, waLink } = useLanguage();
  const session = SESSIONS.find((s) => s.slug === slug);

  if (!session) {
    return (
      <section>
        <div className="container detail-wrap">
          <Link to="/sessions" className="back">← {t.backBtn}</Link>
          <h1>404</h1>
        </div>
      </section>
    );
  }

  const priceHtml = session.priceOptions
    ? session.priceOptions
        .map((p) => `${p.label[lang]}: ${p.amount}`)
        .join(" · ")
    : session.price || "";

  return (
    <section>
      <div className="container detail-wrap">
        <Link to="/sessions" className="back">← {t.backBtn}</Link>
        <span className="cat">{t.sessionsKicker}</span>
        <h1>{session.title[lang]}</h1>
        {priceHtml ? <div className="price-line">{priceHtml}</div> : null}
        <div className="duration-line">{session.duration[lang]}</div>
        <p className="body">{session.desc[lang]}</p>
        <ul className="points">
          {session.points[lang].map((p, i) => (
            <li key={i}><span>{p}</span></li>
          ))}
        </ul>
        <div className="detail-cta">
          <Button
            href={waLink(t.waMsgSession(session.title[lang]))}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
          >
            {t.bookSessionBtn}
          </Button>
          <Link to="/sessions" className="btn btn-ghost">
            {t.backBtn}
          </Link>
        </div>
      </div>
    </section>
  );
}