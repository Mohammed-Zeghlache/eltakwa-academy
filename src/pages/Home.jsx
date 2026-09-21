import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage.jsx";
import NewsCard from "../components/NewsCard.jsx";
import CourseCard from "../components/CourseCard.jsx";
import QuranCard from "../components/QuranCard.jsx";
import SessionCard from "../components/SessionCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";

import { NEWS } from "../data/news.js";
import { QURAN_ITEMS } from "../data/quran.js";
import { COURSES } from "../data/courses.js";
import { SESSIONS } from "../data/sessions.js";
import { TESTIMONIALS } from "../data/testimonials.js";

export default function Home() {
  const { t, lang } = useLanguage();

  const heroTitleHtml =
    lang === "ar"
      ? "تعلّمي.. تطوّري.. <span>ابدئي</span> مشروعك من اليوم"
      : "Learn.. Grow.. <span>Start</span> your project today";

  const courseCount =
    COURSES.length + QURAN_ITEMS.filter((q) => !q.infoOnly).length;

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>{t.heroBadge}</span>
            </div>
            <h1 dangerouslySetInnerHTML={{ __html: heroTitleHtml }} />
            <p className="lead">{t.heroLead}</p>
            <div
              className="hero-info"
              dangerouslySetInnerHTML={{ __html: t.heroInfo }}
            />
            <div className="hero-ctas">
              <Link to="/courses" className="btn btn-primary">
                {t.heroCtaCourses}
              </Link>
              <Link to="/quran" className="btn btn-ghost">
                {t.heroCtaQuran}
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <b>{t.heroStat1}</b>
                <span>{t.heroStat1L}</span>
              </div>
              <div className="hero-stat">
                <b>{courseCount}+</b>
                <span>{t.heroStat2L}</span>
              </div>
              <div className="hero-stat">
                <b>{t.heroStat3}</b>
                <span>{t.heroStat3L}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container about-grid">
          <div className="about-credentials">
            <h3>{t.credTitle}</h3>
            <ul className="credential-list">
              <li><span>{t.cred1}</span></li>
              <li><span>{t.cred2}</span></li>
              <li><span>{t.cred3}</span></li>
              <li><span>{t.cred4}</span></li>
              <li><span>{t.cred5}</span></li>
            </ul>
          </div>
          <div className="about-copy">
            <span className="section-kicker">{t.aboutKicker}</span>
            <h2>{t.aboutTitle}</h2>
            <blockquote>{t.aboutQuote}</blockquote>
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <div className="about-badges">
              <div className="about-badge">
                <b>{t.aboutBadge1}</b>
                <span>{t.aboutBadge1L}</span>
              </div>
              <div className="about-badge">
                <b>{courseCount}+</b>
                <span>{t.aboutBadge2L}</span>
              </div>
              <div className="about-badge">
                <b>{t.aboutBadge3}</b>
                <span>{t.aboutBadge3L}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="section-alt">
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

      {/* QURAN */}
      <section id="quran">
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
        </div>
      </section>

      {/* COURSES */}
      <section id="courses">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">{t.coursesKicker}</span>
            <h2>{t.coursesTitle}</h2>
            <p>{t.coursesLead}</p>
          </div>
          <div className="tab-row">
            {[
              { id: "all", label: t.filterAll },
              { id: "craft", label: t.filterCraft },
              { id: "training", label: t.filterTraining },
              { id: "development", label: t.filterDevelopment },
              { id: "support", label: t.filterSupport },
            ].map((f) => (
              <Link
                key={f.id}
                to={f.id === "all" ? "/courses" : `/courses/${f.id}`}
                className={`tab-btn${f.id === "all" ? " active" : ""}`}
              >
                {f.label}
              </Link>
            ))}
          </div>
          <div className="card-grid">
            {COURSES.filter((c) => c.category !== "support").map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </section>

      {/* SESSIONS */}
      <section id="sessions" className="section-alt">
        <div className="container">
          <div className="feature-panel">
            <div className="feature-content">
              <span className="section-kicker light">{t.sessionsKicker}</span>
              <h3>{t.sessionsTitle}</h3>
              <p>{t.sessionsLead}</p>
              <ul className="feature-list">
                {SESSIONS.map((s) => (
                  <li key={s.slug}>
                    <span>{s.title[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="feature-side">
              <div className="price-cards">
                <div className="price-card">
                  <b className="label">{t.sessionsHintL}</b>
                  <span className="amount">{t.sessionsHintV}</span>
                </div>
              </div>
              <div className="feature-actions">
                <Link className="btn btn-ghost" to="/sessions-list">
                  {t.sessionsSeeAll}
                </Link>
              </div>
            </div>
          </div>
          <div className="card-grid" style={{ marginTop: "1.75rem" }}>
            {SESSIONS.map((s) => (
              <SessionCard key={s.slug} session={s} />
            ))}
          </div>
        </div>
      </section>

      {/* FEEDBACK */}
      <section id="feedback">
        <div className="container">
          <div className="section-head center">
            <span className="section-kicker">{t.feedKicker}</span>
            <h2>{t.feedTitle}</h2>
            <p>{t.feedLead}</p>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS[lang].map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}