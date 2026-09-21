import { useLanguage } from "../hooks/useLanguage.jsx";
import Button from "./Button.jsx";

export default function QuranCard({ item }) {
  const { lang, t, waLink } = useLanguage();

  return (
    <article className="card">
      <span className="cat">{t.quranKicker}</span>
      <h3>{item.title[lang]}</h3>
      <p className="desc">{item.desc[lang]}</p>
      <div className="meta">
        <span className="duration">{item.duration[lang]}</span>
        {item.price ? <span className="card-price">{item.price}</span> : null}
      </div>
      <Button to={`/course/${item.slug}`} variant="ghost">
        {t.detailsBtn}
      </Button>
      {!item.infoOnly && (
        <Button
          href={waLink(t.waMsgCourse(item.title[lang]))}
          target="_blank"
          rel="noopener noreferrer"
          variant="whatsapp"
          size="sm"
        >
          {t.bookBtn}
        </Button>
      )}
    </article>
  );
}