import { contact } from '../../data/content.js';
import { useOpenApp } from '../../context/NavigationContext.jsx';

export default function ContactContent() {
  const openApp = useOpenApp();

  return (
    <>
      <div className="editorial-card">
        <span className="editorial-eyebrow">{contact.eyebrow}</span>
        <h1>{contact.heading}</h1>
      </div>
      {contact.rows.map((row) => (
        <div className="info-row" key={row.label}>
          <div className="i-label">{row.label}</div>
          <div className="i-value">{row.value}</div>
        </div>
      ))}
      <div className="meeting-cta-btn" style={{ marginTop: 20 }} onClick={() => openApp('app-meet')}>
        📅 Book a Meeting with Lara!
      </div>
    </>
  );
}
