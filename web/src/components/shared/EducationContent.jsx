import { education } from '../../data/content.js';

export default function EducationContent() {
  return (
    <>
      <div className="edu-greeting" style={{ padding: 0, marginBottom: 6 }}>
        <div className="small">{education.eyebrow}</div>
        <h1>{education.heading}</h1>
      </div>
      <div className="diploma-card">
        <div className="diploma-top">
          <div>
            <h2>{education.diploma.school}</h2>
            <div className="sub">{education.diploma.period}</div>
          </div>
          <span className="badge">{education.diploma.badge}</span>
        </div>
        <div className="sub">{education.diploma.sub}</div>
      </div>
      <div className="stat-block">
        <div className="label-row">
          <span>{education.credits.label}</span>
          <span>{education.credits.value}</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${education.credits.pct}%` }} />
        </div>
      </div>
      <div className="row-pair">
        {education.statsRow1.map((s) => (
          <div className="mini-stat" key={s.l}>
            <div className="n">{s.n}</div>
            <div className="l">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="row-pair">
        {education.statsRow2.map((s) => (
          <div className="mini-stat" key={s.l}>
            <div className="n">{s.n}</div>
            <div className="l">{s.l}</div>
          </div>
        ))}
      </div>
    </>
  );
}
