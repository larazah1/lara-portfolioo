import { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { NavigationProvider } from '../../context/NavigationContext.jsx';
import HomeScreen from '../home/HomeScreen.jsx';
import MobilePage from './MobilePage.jsx';
import ChatTeaser from './ChatTeaser.jsx';

export default function MobileApp() {
  const [stack, setStack] = useState([]);
  const [teaserOpen, setTeaserOpen] = useState(true);

  const pushApp = useCallback((appId) => {
    setStack((s) => (s[s.length - 1] === appId ? s : [...s, appId]));
  }, []);

  const popPage = useCallback(() => {
    setStack((s) => s.slice(0, -1));
  }, []);

  const showTeaser = teaserOpen && stack.length === 0;

  function dismissTeaser() {
    if (showTeaser) setTeaserOpen(false);
  }

  function expandTeaser() {
    setTeaserOpen(false);
    pushApp('app-chatbot');
  }

  return (
    <NavigationProvider openApp={pushApp}>
      <div className="mobile-shell" onClick={dismissTeaser}>
        <div className="mobile-home">
          <HomeScreen variant="mobile" hideFloatingChat={showTeaser} />
        </div>

        <AnimatePresence>
          {showTeaser && <ChatTeaser key="chat-teaser" onExpand={expandTeaser} />}
        </AnimatePresence>

        <AnimatePresence>
          {stack.map((appId, i) => (
            <MobilePage
              key={appId}
              appId={appId}
              zIndex={1000 + i}
              onBack={popPage}
            />
          ))}
        </AnimatePresence>
      </div>
    </NavigationProvider>
  );
}
