import { useLanguage } from "../hooks/useLanguage.jsx";
import Button from "./Button.jsx";

export default function NewsCard({ item }) {
  const { lang, t, waLink } = useLanguage();

  return (
    <article className="news-card">
      <div className="news-date">{item.date[lang]}</div>
      <h3>{item.title[lang]}</h3>
      <div className="news-meta">{item.subtitle[lang]}</div>
      <div
        className="news-body"
        dangerouslySetInnerHTML={{ __html: item.bodyHtml[lang] }}
      />
      <div className="news-actions">
        <Button
          href={waLink(item.waMsg[lang])}
          target="_blank"
          rel="noopener noreferrer"
          variant="whatsapp"
          size="sm"
        >
          {t.newsRegister}
        </Button>
      </div>
    </article>
  );
}