import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LangContext.jsx';
import { useOpenApp } from '../../context/NavigationContext.jsx';
import { ChevronIcon } from '../icons/Glyphs.jsx';

const SPRING = { duration: 0.55, ease: [0.34, 1.56, 0.64, 1] };

function styleFor(mode, pos) {
  if (mode === 'left') {
    if (pos === 0) return { right: 0, width: 'calc(100% - 32px)', opacity: 1, zIndex: 12 };
    if (pos === 1) return { right: 0, width: 'calc(100% - 16px)', opacity: 1, zIndex: 11 };
    if (pos === 2) return { right: 0, width: '100%', opacity: 1, zIndex: 10 };
    return { right: 0, width: '100%', opacity: 0, zIndex: 1 };
  }
  // 'peek'
  if (pos === 0) return { y: 0, opacity: 1, zIndex: 12 };
  if (pos === 1) return { y: -32, opacity: 1, zIndex: 11 };
  if (pos === 2) return { y: -60, opacity: 1, zIndex: 10 };
  return { y: -60, opacity: 0, zIndex: 1 };
}

export default function CardStack({ cards, mode = 'left', compact = false }) {
  const { t } = useLang();
  const openApp = useOpenApp();
  const [order, setOrder] = useState(cards.map((_, i) => i));
  const touchX = useRef(null);
  const lastSwipe = useRef(0);

  function advance() {
    setOrder((o) => [...o.slice(1), o[0]]);
  }

  function handlePointerDown(e) {
    touchX.current = e.clientX ?? e.touches?.[0]?.clientX ?? null;
  }
  function handlePointerUp(e) {
    if (touchX.current == null) return;
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX ?? touchX.current;
    const dx = endX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 40) {
      advance();
      lastSwipe.current = Date.now();
    }
  }
  function handleClick() {
    if (Date.now() - lastSwipe.current > 300) advance();
  }

  return (
    <div
      className={`fact-stack${compact ? ' compact' : ''}`}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onClick={handleClick}
    >
      {cards.map((card, i) => {
        const pos = order.indexOf(i);
        const front = pos === 0;
        return (
          <motion.div
            key={i}
            className={`fact-card${mode === 'peek' ? ' mini' : ''}`}
            style={{ background: card.bg, pointerEvents: front ? 'auto' : 'none' }}
            animate={styleFor(mode, pos)}
            transition={SPRING}
          >
            <div className="fact-eyebrow">{t(card.eyebrow)}</div>
            <div className="fact-body">{t(card.body)}</div>
            {card.cta && (
              <div
                className="fact-cta"
                onClick={(e) => { e.stopPropagation(); openApp(card.ctaApp); }}
              >
                {t(card.cta)}
              </div>
            )}
            <div className="fact-arrow" onClick={(e) => { e.stopPropagation(); advance(); }}>
              <ChevronIcon />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
