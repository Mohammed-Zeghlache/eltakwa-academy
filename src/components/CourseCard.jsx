import { useLanguage } from "../hooks/useLanguage.jsx";
import Button from "./Button.jsx";

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

export default function CourseCard({ course }) {
  const { lang, t, waLink } = useLanguage();

  return (
    <article className="card">
      <span className="cat">{categoryLabel(t, course.category)}</span>
      <h3>{course.title[lang]}</h3>
      <p className="desc">{course.desc[lang]}</p>
      <div className="meta">
        <span className="duration">{course.duration[lang]}</span>
        {course.price ? <span className="card-price">{course.price}</span> : null}
      </div>
      <Button to={`/course/${course.slug}`} variant="ghost">
        {t.detailsBtn}
      </Button>
      <Button
        href={waLink(t.waMsgCourse(course.title[lang]))}
        target="_blank"
        rel="noopener noreferrer"
        variant="whatsapp"
        size="sm"
      >
        {t.bookBtn}
      </Button>
    </article>
  );
}