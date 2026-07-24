import { skills } from '../../data/content.js';

export default function SkillsContent() {
  return (
    <>
      <div className="nav-row">
        {skills.nav.map((item) => (
          <div className={`nav-item${item.active ? ' active' : ''}`} key={item.label}>
            <div className="nav-circle">{item.icon}</div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="editorial-card">
        <span className="editorial-eyebrow">{skills.eyebrow}</span>
        <h1>{skills.heading}</h1>
      </div>
      <div className="tag-cloud">
        {skills.tags.map((tag) => (
          <span className={`tag${tag.big ? ' big' : ''}`} key={tag.label}>{tag.label}</span>
        ))}
      </div>
    </>
  );
}
