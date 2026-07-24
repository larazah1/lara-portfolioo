import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../../context/LangContext.jsx';
import { useWindowManager } from '../../context/WindowManagerContext.jsx';
import { APPS, gradientCss } from '../../data/apps.js';

export default function Dock() {
  const { t } = useLang();
  const wm = useWindowManager();
  const minimized = wm.windows.filter((w) => w.minimized);

  return (
    <div className="dock">
      <AnimatePresence>
        {minimized.map((w) => {
          const app = APPS[w.appId];
          const { Glyph } = app;
          return (
            <motion.div
              key={w.appId}
              className="dock-item"
              style={{ background: gradientCss(app) }}
              onClick={() => wm.restoreWindow(w.appId)}
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 10 }}
              transition={{ type: 'spring', stiffness: 340, damping: 26 }}
            >
              <Glyph />
              <span className="dock-label">{t(app.title)}</span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
