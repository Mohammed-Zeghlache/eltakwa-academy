import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage.jsx";
import { ANNOUNCEMENTS } from "../data/announcements.js";
import Button from "../components/Button.jsx";

export default function Announcement() {
  const { slug } = useParams();
  const { lang, t, waLink } = useLanguage();
  const a = ANNOUNCEMENTS.find((x) => x.slug === slug);

  if (!a) {
    return (
      <section>
        <div className="container detail-wrap">
          <Link to="/quran" className="back">← {t.backBtn}</Link>
          <h1>404</h1>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container detail-wrap" style={{ maxWidth: "760px" }}>
        <Link to="/quran" className="back">← {t.backBtn}</Link>
        <span className="cat">{t.quranKicker}</span>
        <h1>{a.title[lang]}</h1>
        <div className="announce-motto">{a.motto[lang]}</div>
        <p className="body">{a.intro[lang]}</p>

        <div className="announce-panel">
          <span className="section-kicker light">{t.annStage1Title}</span>
          <h3>{a.stage1.label[lang]}</h3>
          <div className="price-tag">{a.stage1.price[lang]}</div>
          <ul className="feature-list">
            {a.stage1.points[lang].map((p, i) => (
              <li key={i}><span>{p}</span></li>
            ))}
          </ul>
        </div>

        <div className="announce-block">
          <span className="cat">{t.annStage2Title}</span>
          <h3>{a.stage2.label[lang]}</h3>
          <p className="desc">{a.stage2.desc[lang]}</p>
          <div className="announce-meta-row">
            <span>{a.stage2.schedule[lang]}</span>
            <b>{a.stage2.price[lang]}</b>
          </div>
        </div>

        <div className="announce-block alt">
          <span className="cat">{t.annGiftTitle}</span>
          <p className="desc" style={{ marginBottom: 0 }}>
            {a.gift.desc[lang]}
          </p>
        </div>

        <div className="announce-block">
          <span className="cat">{t.annCeremonyTitle}</span>
          <h3>{a.ceremony.label[lang]}</h3>
          <p className="desc">{a.ceremony.desc[lang]}</p>
          <ul className="points" style={{ marginBottom: 0 }}>
            {a.ceremony.points[lang].map((p, i) => (
              <li key={i}><span>{p}</span></li>
            ))}
          </ul>
        </div>

        <div className="announce-goal">{a.goal[lang]}</div>

        <div className="detail-cta">
          <Button
            href={waLink(t.waMsgAnnouncement)}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
          >
            {t.annContactBtn}
          </Button>
          <Link to="/quran" className="btn btn-ghost">
            {t.backBtn}
          </Link>
        </div>
      </div>
    </section>
  );
}
