import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage.jsx";
import CourseCard from "../components/CourseCard.jsx";
import { COURSES } from "../data/courses.js";

export default function Courses() {
  const { t } = useLanguage();
  const { category } = useParams();
  const active = category || "all";

  const filters = [
    { id: "all", label: t.filterAll },
    { id: "craft", label: t.filterCraft },
    { id: "training", label: t.filterTraining },
    { id: "development", label: t.filterDevelopment },
    { id: "support", label: t.filterSupport },
  ];

  const list =
    active === "all"
      ? COURSES.filter((c) => c.category !== "support")
      : COURSES.filter((c) => c.category === active);

  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">{t.coursesKicker}</span>
          <h2>{t.coursesTitle}</h2>
          <p>{t.coursesLead}</p>
        </div>
        <div className="tab-row">
          {filters.map((f) => (
            <Link
              key={f.id}
              to={f.id === "all" ? "/courses" : `/courses/${f.id}`}
              className={`tab-btn${active === f.id ? " active" : ""}`}
            >
              {f.label}
            </Link>
          ))}
        </div>
        <div className="card-grid">
          {list.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}