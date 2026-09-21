import { useLanguage } from "../hooks/useLanguage.jsx";
import Button from "./Button.jsx";

function priceLabel(item, lang) {
  if (item.priceOptions) {
    return item.priceOptions
      .map((p) => `${p.label[lang]}: ${p.amount}`)
      .join(" · ");
  }
  return item.price || "";
}

export default function SessionCard({ session }) {
  const { lang, t, waLink } = useLanguage();

  return (
    <article className="card">
      <span className="cat">{t.sessionsKicker}</span>
      <h3>{session.title[lang]}</h3>
      <p className="desc">{session.desc[lang]}</p>
      <div className="meta">
        <span className="duration">{session.duration[lang]}</span>
        <span className="card-price">{priceLabel(session, lang)}</span>
      </div>
      <Button to={`/session/${session.slug}`} variant="ghost">
        {t.detailsBtn}
      </Button>
      <Button
        href={waLink(t.waMsgSession(session.title[lang]))}
        target="_blank"
        rel="noopener noreferrer"
        variant="whatsapp"
        size="sm"
      >
        {t.bookSessionBtn}
      </Button>
    </article>
  );
}