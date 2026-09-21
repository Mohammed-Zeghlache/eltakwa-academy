import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage.jsx";
import { COURSES } from "../data/courses.js";
import { QURAN_ITEMS } from "../data/quran.js";
import Button from "../components/Button.jsx";

function categoryLabel(t, cat) {
  return (
    {
      craft: t.filterCraft,
      training: t.filterTraining,
      development: t.filterDevelopment,
      support: t.filterSupport,
    }[cat] || cat
  );
}

export default function CourseDetails() {
  const { slug } = useParams();
  const { lang, t, waLink } = useLanguage();

  const item =
    COURSES.find((c) => c.slug === slug) ||
    QURAN_ITEMS.find((q) => q.slug === slug);

  if (!item) {
    return (
      <section>
        <div className="container detail-wrap">
          <Link to="/" className="back">← {t.backBtn}</Link>
          <h1>404</h1>
        </div>
      </section>
    );
  }

  const label =
    item.type === "quran"
      ? t.quranKicker
      : categoryLabel(t, item.category);

  return (
    <section>
      <div className="container detail-wrap">
        <Link to="/courses" className="back">← {t.backBtn}</Link>
        <span className="cat">{label}</span>
        <h1>{item.title[lang]}</h1>
        {item.price ? <div className="price-line">{item.price}</div> : null}
        <div className="duration-line">{item.duration[lang]}</div>
        <p className="body">{item.desc[lang]}</p>
        <ul className="points">
          {item.points[lang].map((p, i) => (
            <li key={i}><span>{p}</span></li>
          ))}
        </ul>
        <div className="detail-cta">
          {!item.infoOnly && (
            <Button
              href={waLink(t.waMsgCourse(item.title[lang]))}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
            >
              {t.bookBtn}
            </Button>
          )}
          <Link to="/" className="btn btn-ghost">
            {t.backBtn}
          </Link>
        </div>
      </div>
    </section>
  );
}