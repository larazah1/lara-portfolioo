import { motion } from 'framer-motion';
import { useLang } from '../../context/LangContext.jsx';
import { chatWidget } from '../../data/home.js';
import { ChatGlyph } from '../icons/Glyphs.jsx';

// Small default-open chat preview for mobile — tapping it expands to the
// full chatbot page; tapping anywhere else on the screen dismisses it
// (handled by the parent's shell click handler via stopPropagation here).
export default function ChatTeaser({ onExpand }) {
  const { t } = useLang();

  return (
    <motion.div
      className="chat-teaser"
      onClick={(e) => { e.stopPropagation(); onExpand(); }}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 340, damping: 30 }}
    >
      <div className="chat-teaser-icon">
        <ChatGlyph fill="#fff" width={16} height={16} />
      </div>
      <div className="chat-teaser-text">
        <div className="chat-teaser-title">{t(chatWidget.tag)}</div>
        <div className="chat-teaser-sub">{t(chatWidget.heading)}</div>
      </div>
    </motion.div>
  );
}
