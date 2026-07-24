import { awards } from '../../data/content.js';

export default function AwardsContent() {
  return (
    <>
      <div className="editorial-card">
        <span className="editorial-eyebrow">{awards.eyebrow}</span>
        <h1>{awards.heading}</h1>
      </div>
      {awards.rows.map((row) => (
        <div className="info-row" key={row.year}>
          <div className="i-label">{row.year}</div>
          <div className="i-value">{row.value}</div>
        </div>
      ))}
    </>
  );
}
