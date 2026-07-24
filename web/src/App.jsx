import { LangProvider } from './context/LangContext.jsx';
import useViewportMode from './hooks/useViewportMode.js';
import Workspace from './components/window/Workspace.jsx';
import MobileApp from './components/mobile/MobileApp.jsx';

export default function App() {
  const mode = useViewportMode();

  return (
    <LangProvider>
      {mode === 'desktop' ? <Workspace /> : <MobileApp />}
    </LangProvider>
  );
}
