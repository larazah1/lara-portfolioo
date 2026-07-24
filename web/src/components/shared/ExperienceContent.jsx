import { useState } from 'react';
import { experience } from '../../data/content.js';

export default function ExperienceContent() {
  const [active, setActive] = useState(experience.segments[0]);

  return (
    <>
      <div className="exp-header" style={{ padding: 0 }}>
        <span className="exp-title">{experience.title}</span>
        <span className="exp-cta">{experience.cta}</span>
      </div>
      <div className="segmented">
        {experience.segments.map((s) => (
          <span key={s} className={s === active ? 'active' : ''} onClick={() => setActive(s)}>{s}</span>
        ))}
      </div>
      <div className="serif-quote">&ldquo;{experience.quote}&rdquo;</div>
      {experience.roles.map((role) => (
        <div className="role-card" key={role.name}>
          <div className="role-dot" style={{ background: `linear-gradient(135deg, ${role.gradient[0]}, ${role.gradient[1]})` }} />
          <div className="role-info">
            <div className="role-name">{role.name}</div>
            <div className="role-meta">{role.meta}</div>
          </div>
        </div>
      ))}
    </>
  );
}
