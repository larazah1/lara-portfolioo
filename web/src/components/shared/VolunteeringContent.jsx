import { useState } from 'react';
import { volunteering } from '../../data/content.js';

export default function VolunteeringContent() {
  const [active, setActive] = useState(volunteering.segments[0]);

  return (
    <>
      <div className="exp-header" style={{ padding: 0 }}>
        <span className="exp-title">{volunteering.title}</span>
        <span
          className="exp-cta"
          style={{ background: `linear-gradient(135deg, ${volunteering.ctaGradient[0]}, ${volunteering.ctaGradient[1]})` }}
        >
          {volunteering.cta}
        </span>
      </div>
      <div className="segmented">
        {volunteering.segments.map((s) => (
          <span key={s} className={s === active ? 'active' : ''} onClick={() => setActive(s)}>{s}</span>
        ))}
      </div>
      <div className="serif-quote">&ldquo;{volunteering.quote}&rdquo;</div>
      {volunteering.roles.map((role) => (
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
