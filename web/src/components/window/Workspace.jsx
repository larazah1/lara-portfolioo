import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { WindowManagerProvider, useWindowManager } from '../../context/WindowManagerContext.jsx';
import { NavigationProvider } from '../../context/NavigationContext.jsx';
import HomeScreen from '../home/HomeScreen.jsx';
import Window from './Window.jsx';
import Dock from './Dock.jsx';

function WorkspaceInner() {
  const wm = useWindowManager();
  const canvasRef = useRef(null);

  return (
    <NavigationProvider openApp={wm.openApp}>
      <div className="workspace" ref={canvasRef}>
        <div className="workspace-backdrop">
          <div className="workspace-backdrop-inner">
            <HomeScreen variant="desktop" />
          </div>
        </div>

        <AnimatePresence>
          {wm.windows.map((win) => (
            <Window key={win.appId} win={win} constraintsRef={canvasRef} />
          ))}
        </AnimatePresence>

        <Dock />
      </div>
    </NavigationProvider>
  );
}

export default function Workspace() {
  return (
    <WindowManagerProvider>
      <WorkspaceInner />
    </WindowManagerProvider>
  );
}
