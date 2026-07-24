import { useState } from 'react';
import { meetLara } from '../../data/content.js';

export default function MeetContent() {
  const [activeDate, setActiveDate] = useState(
    meetLara.dates.findIndex((d) => d.active),
  );
  const [activeTime, setActiveTime] = useState(
    meetLara.times.findIndex((t) => t.active),
  );

  return (
    <>
      <div className="meet-profile" style={{ paddingTop: 0 }}>
        <div className="meet-avatar">{meetLara.avatar}</div>
        <div>
          <div className="meet-name">{meetLara.name}</div>
          <div className="meet-sub">{meetLara.sub}</div>
        </div>
      </div>
      <div className="meet-headline">{meetLara.headline}</div>
      <div className="meet-section-label">Select a date</div>
      <div className="date-row">
        {meetLara.dates.map((d, i) => (
          <div
            className={`date-chip${i === activeDate ? ' active' : ''}`}
            key={d.num}
            onClick={() => setActiveDate(i)}
          >
            <div className="d-num">{d.num}</div>
            <div className="d-day">{d.day}</div>
          </div>
        ))}
      </div>
      <div className="meet-section-label">Available times</div>
      <div className="time-grid">
        {meetLara.times.map((t, i) => (
          <div
            className={`time-pill${i === activeTime ? ' active' : ''}`}
            key={t.label}
            onClick={() => setActiveTime(i)}
          >
            {t.label}
          </div>
        ))}
      </div>
      <div className="meet-cta">{meetLara.cta}</div>
    </>
  );
}
