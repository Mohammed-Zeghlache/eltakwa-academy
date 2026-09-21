import { useLanguage } from "../hooks/useLanguage.jsx";
import NewsCard from "../components/NewsCard.jsx";
import { NEWS } from "../data/news.js";

export default function News() {
  const { t } = useLanguage();
  return (
    <section className="section-alt">
      <div className="container">
        <div className="section-head center">
          <span className="section-kicker">{t.newsKicker}</span>
          <h2>{t.newsTitle}</h2>
          <p>{t.newsLead}</p>
        </div>
        <div className="news-list">
          {NEWS.map((n) => (
            <NewsCard key={n.slug} item={n} />
          ))}
        </div>
      </div>
    </section>
  );
}