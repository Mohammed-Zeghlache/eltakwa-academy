import { useLanguage } from "../hooks/useLanguage.jsx";
import QuranCard from "../components/QuranCard.jsx";
import { QURAN_ITEMS } from "../data/quran.js";
import { ANNOUNCEMENTS } from "../data/announcements.js";
import Button from "../components/Button.jsx";

export default function Quran() {
  const { t, lang, waLink } = useLanguage();
  const announcement = ANNOUNCEMENTS[0];

  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">{t.quranKicker}</span>
          <h2>{t.quranTitle}</h2>
          <p>{t.quranLead}</p>
          <a
            href="https://t.me/+n2u0E0qXTsg3OWVk"
            target="_blank"
            rel="noopener noreferrer"
            className="section-link"
          >
            {t.quranTelegramLink}
          </a>
        </div>
        <div className="card-grid">
          {QURAN_ITEMS.map((item) => (
            <QuranCard key={item.slug} item={item} />
          ))}
        </div>

        {/* Full announcement panel */}
        <div className="detail-wrap" style={{ marginTop: "3rem" }}>
          <div className="announce-panel">
            <span className="section-kicker light">{t.annStage1Title}</span>
            <h3>{announcement.stage1.label[lang]}</h3>
            <div className="price-tag">{announcement.stage1.price[lang]}</div>
            <ul className="feature-list">
              {announcement.stage1.points[lang].map((p, i) => (
                <li key={i}><span>{p}</span></li>
              ))}
            </ul>
          </div>
          <div className="announce-block">
            <span className="cat">{t.annStage2Title}</span>
            <h3>{announcement.stage2.label[lang]}</h3>
            <p className="desc">{announcement.stage2.desc[lang]}</p>
            <div className="announce-meta-row">
              <span>{announcement.stage2.schedule[lang]}</span>
              <b>{announcement.stage2.price[lang]}</b>
            </div>
          </div>
          <div className="announce-block alt">
            <span className="cat">{t.annGiftTitle}</span>
            <p className="desc" style={{ marginBottom: 0 }}>
              {announcement.gift.desc[lang]}
            </p>
          </div>
          <div className="announce-block">
            <span className="cat">{t.annCeremonyTitle}</span>
            <h3>{announcement.ceremony.label[lang]}</h3>
            <p className="desc">{announcement.ceremony.desc[lang]}</p>
            <ul className="points" style={{ marginBottom: 0 }}>
              {announcement.ceremony.points[lang].map((p, i) => (
                <li key={i}><span>{p}</span></li>
              ))}
            </ul>
          </div>
          <div className="announce-goal">{announcement.goal[lang]}</div>
          <div className="detail-cta">
            <Button
              href={waLink(t.waMsgAnnouncement)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
            >
              {t.annContactBtn}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}