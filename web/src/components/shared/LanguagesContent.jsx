import { languages } from '../../data/content.js';

export default function LanguagesContent() {
  return (
    <>
      <div className="nav-row">
        {languages.nav.map((item) => (
          <div className={`nav-item${item.active ? ' active' : ''}`} key={item.label}>
            <div className="nav-circle">{item.icon}</div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="lang-quote">&ldquo;{languages.quote}&rdquo;</div>
      {languages.fluency.map((f) => (
        <div className="fluency-row" key={f.lang}>
          <div className="fluency-top">
            <span>{f.lang}</span>
            <span className="level">{f.level}</span>
          </div>
          <div className="fluency-track">
            <div className="fluency-fill" style={{ width: `${f.pct}%` }} />
          </div>
        </div>
      ))}
    </>
  );
}
