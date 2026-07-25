import { useLang } from '../../context/LangContext.jsx';
import { useOpenApp } from '../../context/NavigationContext.jsx';
import { APPS, EXPLORE_ORDER, gradientCss } from '../../data/apps.js';
import * as home from '../../data/home.js';
import CardStack from './CardStack.jsx';
import { ChatGlyph, ChevronIcon } from '../icons/Glyphs.jsx';

export default function HomeScreen({ variant = 'desktop', hideFloatingChat = false }) {
  const { t, lang, toggle } = useLang();
  const openApp = useOpenApp();

  return (
    <>
      <div className="topbar">
        <div className="greeting">
          <div className="eyebrow">{t(home.greeting.eyebrow)}</div>
          <h1>{t(home.greeting.name)}</h1>
        </div>
        <div className="lang-toggle" onClick={toggle}>
          <span className={lang === 'en' ? 'active' : ''}>EN</span>
          <span className={lang === 'ar' ? 'active' : ''}>ع</span>
        </div>
      </div>

      <div className="chat-widget" onClick={() => openApp('app-chatbot')}>
        <div className="row-top">
          <span className="chat-tag">{t(home.chatWidget.tag)}</span>
          <div className="chat-bubble-icon">
            <ChatGlyph width={16} height={16} />
          </div>
        </div>
        <h2>{t(home.chatWidget.heading)}</h2>
        <div className="chat-preview">
          <span className="dot" />
          <span>{t(home.chatWidget.preview)}</span>
        </div>
        <div className="chat-cta">
          <span>{t(home.chatWidget.cta)}</span>
          <ChevronIcon />
        </div>
      </div>

      <div className="section-label" style={{ marginTop: 2 }}>{t(home.funFactsLabel)}</div>
      <CardStack cards={home.funFacts} mode="left" />

      <div className="meeting-cta-btn" onClick={() => openApp('app-meet')}>
        {t(home.meetingCtaBtn)}
      </div>

      <div className="section-label" style={{ marginTop: 22 }}>{t(home.exploreLabel)}</div>
      <div className={variant === 'desktop' ? 'explore-grid' : 'explore-row'}>
        {EXPLORE_ORDER.map((id) => {
          const app = APPS[id];
          const { Glyph } = app;
          return (
            <div
              className="explore-card"
              key={id}
              style={{ background: gradientCss(app) }}
              onClick={() => openApp(id)}
            >
              <Glyph />
              <span>{t(app.title)}</span>
            </div>
          );
        })}
      </div>

      <div className="section-label" style={{ marginTop: 22 }}>{t(home.meetPreview.label)}</div>
      <div className="meet-preview-card">
        <div className="mp-text">{t(home.meetPreview.text)}</div>
        <div className="date-row" style={{ padding: '0 0 14px 0' }}>
          {home.meetPreview.dates.map((d) => (
            <div className={`date-chip${d.active ? ' active' : ''}`} key={d.num}>
              <div className="d-num">{d.num}</div>
              <div className="d-day">{d.day}</div>
            </div>
          ))}
        </div>
        <div className="time-grid" style={{ padding: '0 0 16px 0' }}>
          {home.meetPreview.times.map((tm) => (
            <div className={`time-pill${tm.active ? ' active' : ''}`} key={tm.label}>{tm.label}</div>
          ))}
        </div>
        <div className="meet-cta" style={{ margin: 0 }} onClick={() => openApp('app-meet')}>
          {t(home.meetPreview.cta)}
        </div>
      </div>

      {!hideFloatingChat && (
        <div
          className={`floating-chat${variant === 'mobile' ? ' mobile-floating-chat' : ''}`}
          onClick={() => openApp('app-chatbot')}
        >
          <ChatGlyph fill="#fff" width={22} height={22} />
        </div>
      )}
    </>
  );
}
