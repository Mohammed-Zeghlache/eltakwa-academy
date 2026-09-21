import { useLanguage } from "../hooks/useLanguage.jsx";
import Button from "../components/Button.jsx";

export default function Registration() {
  const { t, waLink } = useLanguage();

  return (
    <section className="section-alt">
      <div className="container">
        <div className="section-head center">
          <span className="section-kicker">{t.regKicker}</span>
          <h2>{t.regTitle}</h2>
          <p>{t.regLead}</p>
        </div>
        <div className="reg-panel">
          <ul className="reg-list">
            {t.regDocs.map((d, i) => (
              <li key={i}><span>{d}</span></li>
            ))}
          </ul>
          <div className="reg-fee">{t.regFee}</div>
          <Button
            href={waLink(t.waMsgRegistration)}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
          >
            {t.regCta}
          </Button>
        </div>
      </div>
    </section>
  );
}