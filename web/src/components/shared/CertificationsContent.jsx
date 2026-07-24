import { certifications } from '../../data/content.js';

export default function CertificationsContent() {
  return (
    <>
      <div className="editorial-card">
        <span className="editorial-eyebrow">{certifications.eyebrow}</span>
        <h1>{certifications.heading}</h1>
      </div>
      {certifications.rows.map((row) => (
        <div className="info-row" key={row.year}>
          <div className="i-label">{row.year}</div>
          <div className="i-value">{row.value}</div>
        </div>
      ))}
    </>
  );
}
