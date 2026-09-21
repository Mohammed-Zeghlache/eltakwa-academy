export default function TestimonialCard({ item }) {
  return (
    <div className="testi-card">
      <div className="testi-stars">★★★★★</div>
      <p className="quote">{item.quote}</p>
      <div className="testi-author-row">
        <div className="testi-avatar">{item.author.charAt(0)}</div>
        <div className="testi-meta">
          <div className="author">{item.author}</div>
          <div className="role">{item.role}</div>
        </div>
      </div>
    </div>
  );
}