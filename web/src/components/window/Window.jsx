import { motion, useDragControls } from 'framer-motion';
import { useLang } from '../../context/LangContext.jsx';
import { useWindowManager } from '../../context/WindowManagerContext.jsx';
import { APPS } from '../../data/apps.js';
import { CONTENT_COMPONENTS } from '../shared/index.js';
import { CloseIcon, ExpandIcon, MinimizeIcon } from '../icons/Glyphs.jsx';

const SPRING = { type: 'spring', stiffness: 320, damping: 32, mass: 0.9 };

export default function Window({ win, constraintsRef }) {
  const { t } = useLang();
  const wm = useWindowManager();
  const dragControls = useDragControls();

  const app = APPS[win.appId];
  const Content = CONTENT_COMPONENTS[win.appId];
  if (!app || !Content) return null;

  const vw = typeof window !== 'undefined' ? window.innerWidth : 1280;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800;

  let target;
  if (win.maximized) {
    target = { x: vw * 0.04, y: vh * 0.04, width: vw * 0.92, height: vh * 0.92, opacity: 1, scale: 1 };
  } else if (win.minimized) {
    target = {
      x: vw / 2 - win.w / 2, y: vh - 60, width: win.w, height: win.h,
      opacity: 0, scale: 0.08,
    };
  } else {
    target = { x: win.x, y: win.y, width: win.w, height: win.h, opacity: 1, scale: 1 };
  }

  return (
    <motion.div
      className="window"
      style={{
        position: 'absolute', top: 0, left: 0, zIndex: win.z,
        pointerEvents: win.minimized ? 'none' : 'auto',
      }}
      drag={!win.maximized && !win.minimized}
      dragListener={false}
      dragControls={dragControls}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={constraintsRef}
      onDragEnd={(e, info) => wm.moveWindow(win.appId, win.x + info.offset.x, win.y + info.offset.y)}
      onPointerDownCapture={() => wm.focusWindow(win.appId)}
      initial={{ x: win.x, y: win.y, width: win.w, height: win.h, opacity: 0, scale: 0.92 }}
      animate={target}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.18 } }}
      transition={SPRING}
    >
      <div
        className="window-titlebar"
        onPointerDown={(e) => { if (!win.maximized) dragControls.start(e); }}
      >
        <div className="window-controls">
          <button className="window-dot close" onClick={() => wm.closeWindow(win.appId)} aria-label="Close">
            <CloseIcon />
          </button>
          <button className="window-dot minimize" onClick={() => wm.minimizeWindow(win.appId)} aria-label="Minimize">
            <MinimizeIcon />
          </button>
          <button className="window-dot expand" onClick={() => wm.toggleMaximize(win.appId)} aria-label="Expand">
            <ExpandIcon />
          </button>
        </div>
        <div className="window-title">{t(app.title)}</div>
        <div className="window-spacer" />
      </div>
      <div className={`window-body${app.bodyClass ? ` ${app.bodyClass}` : ''}`}>
        <div className="window-body-inner">
          <Content />
        </div>
      </div>
    </motion.div>
  );
}
