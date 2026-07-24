import { projects } from '../../data/content.js';

function ProjectIcon({ icon }) {
  switch (icon) {
    case 'layers':
      return (
        <svg viewBox="0 0 100 100">
          <rect fill="#fff" opacity=".55" x="26" y="44" width="42" height="28" rx="5" />
          <rect fill="#fff" opacity=".78" x="21" y="35" width="42" height="28" rx="5" />
          <rect fill="#fff" x="16" y="26" width="42" height="28" rx="5" />
        </svg>
      );
    case 'card':
      return (
        <svg viewBox="0 0 100 100">
          <rect x="26" y="18" width="48" height="64" rx="11" fill="none" stroke="#fff" strokeWidth="7.5" />
          <rect x="40" y="35" width="20" height="16" rx="4" fill="#fff" />
        </svg>
      );
    case 'book':
      return (
        <svg viewBox="0 0 100 100">
          <path fill="#fff" d="M50 32c-9-7-22-9-32-6v46c10-3 23-1 32 6 9-7 22-9 32-6V26c-10-3-23-1-32 6Z" />
        </svg>
      );
    case 'circles':
      return (
        <svg viewBox="0 0 100 100">
          <circle cx="38" cy="50" r="19" fill="none" stroke="#fff" strokeWidth="9" />
          <circle cx="64" cy="50" r="19" fill="none" stroke="#fff" strokeWidth="9" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ProjectsContent() {
  return (
    <>
      <div className="proj-header" style={{ padding: 0 }}>
        <h1>{projects.heading}</h1>
        <div className="sub">{projects.sub}</div>
      </div>
      <div className="proj-list">
        {projects.list.map((p) => (
          <div className="proj-row" key={p.name}>
            <div className="p-icon" style={{ background: p.accent }}>
              <ProjectIcon icon={p.icon} />
            </div>
            <div>
              <div className="p-name">{p.name}</div>
              <div className="p-tag">{p.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
