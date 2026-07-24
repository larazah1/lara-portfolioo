import { leadership } from '../../data/content.js';

export default function LeadershipContent() {
  return (
    <>
      <div className="serif-quote" style={{ paddingTop: 6 }}>&ldquo;{leadership.quote}&rdquo;</div>
      {leadership.roles.map((role) => (
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
