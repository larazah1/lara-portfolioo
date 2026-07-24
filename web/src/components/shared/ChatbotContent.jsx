import { chatbotSeed } from '../../data/content.js';
import { ChevronIcon } from '../icons/Glyphs.jsx';

export default function ChatbotContent() {
  return (
    <div className="chat-shell">
      <div className="chat-messages">
        {chatbotSeed.messages.map((m, i) => (
          <div className={`msg ${m.from}`} key={i}>{m.text}</div>
        ))}
      </div>
      <div className="chat-input-bar">
        <input className="chat-input" placeholder={chatbotSeed.placeholder} />
        <div className="send-btn">
          <ChevronIcon stroke="#fff" width={14} height={14} />
        </div>
      </div>
    </div>
  );
}
