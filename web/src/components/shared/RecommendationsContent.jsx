import { recommendations } from '../../data/content.js';

export default function RecommendationsContent() {
  return (
    <>
      <div style={{ marginBottom: 6 }}>
        <div className="small">{recommendations.small}</div>
        <h1 style={{ fontSize: 24, fontWeight: 700, marginTop: 2 }}>{recommendations.heading}</h1>
      </div>
      {recommendations.list.map((rec) => (
        <div className="rec-card" key={rec.name}>
          <div className="rec-top">
            <div className="rec-avatar" style={{ background: `linear-gradient(135deg, ${rec.avatarGradient[0]}, ${rec.avatarGradient[1]})` }}>
              {rec.initials}
            </div>
            <div>
              <div className="rec-name">{rec.name}</div>
              <div className="rec-role">{rec.role}</div>
            </div>
          </div>
          <div className="rec-quote">{rec.quote}</div>
          <div className="rec-contact">
            {rec.contacts.map((c) => <span className="contact-pill" key={c}>{c}</span>)}
          </div>
        </div>
      ))}
    </>
  );
}
