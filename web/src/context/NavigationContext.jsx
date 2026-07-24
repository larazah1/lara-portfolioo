import { createContext, useContext } from 'react';

// Lets shared content components trigger "open this app" without knowing
// whether they're running inside a desktop Window or a mobile page-stack.
// Workspace provides wm.openApp; MobileApp provides its page-push function.
const NavigationContext = createContext(null);

export function NavigationProvider({ openApp, children }) {
  return <NavigationContext.Provider value={openApp}>{children}</NavigationContext.Provider>;
}

export function useOpenApp() {
  const openApp = useContext(NavigationContext);
  if (!openApp) throw new Error('useOpenApp must be used within NavigationProvider');
  return openApp;
}
