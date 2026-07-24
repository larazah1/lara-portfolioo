import { motion } from 'framer-motion';
import { useLang } from '../../context/LangContext.jsx';
import { APPS } from '../../data/apps.js';
import { CONTENT_COMPONENTS } from '../shared/index.js';
import { BackIcon } from '../icons/Glyphs.jsx';

export default function MobilePage({ appId, zIndex, onBack }) {
  const { t } = useLang();
  const app = APPS[appId];
  const Content = CONTENT_COMPONENTS[appId];
  if (!app || !Content) return null;

  return (
    <motion.div
      className={`mobile-page${app.bodyClass ? ` ${app.bodyClass}` : ''}`}
      style={{ zIndex }}
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 34 }}
    >
      <div className="mobile-page-inner">
        <div className="app-header">
          <div className="back-btn on-light" onClick={onBack}>
            <BackIcon />
          </div>
          <span className="app-title">{t(app.title)}</span>
          <div style={{ width: 32 }} />
        </div>
        <Content />
      </div>
    </motion.div>
  );
}
