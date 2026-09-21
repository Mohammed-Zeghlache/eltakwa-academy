import { useLanguage } from "../hooks/useLanguage.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import { TESTIMONIALS } from "../data/testimonials.js";

export default function Feedback() {
  const { t, lang } = useLanguage();
  return (
    <section>
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
  );
}