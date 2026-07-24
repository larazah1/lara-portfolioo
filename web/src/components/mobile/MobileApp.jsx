import { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { NavigationProvider } from '../../context/NavigationContext.jsx';
import HomeScreen from '../home/HomeScreen.jsx';
import MobilePage from './MobilePage.jsx';

export default function MobileApp() {
  const [stack, setStack] = useState([]);

  const pushApp = useCallback((appId) => {
    setStack((s) => (s[s.length - 1] === appId ? s : [...s, appId]));
  }, []);

  const popPage = useCallback(() => {
    setStack((s) => s.slice(0, -1));
  }, []);

  return (
    <NavigationProvider openApp={pushApp}>
      <div className="mobile-shell">
        <div className="mobile-home">
          <HomeScreen variant="mobile" />
        </div>

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
