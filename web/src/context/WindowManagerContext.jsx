import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

const WindowManagerContext = createContext(null);

const DEFAULT_W = 440;
const DEFAULT_H = 640;
const CASCADE_STEP = 28;
const CASCADE_SLOTS = 6;

function centeredRect(openCount) {
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1280;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
  // First window opens dead-center; each additional simultaneously-opened
  // window cascades outward a bit so they don't stack exactly on top.
  const cascade = (openCount % CASCADE_SLOTS) * CASCADE_STEP;
  const x = Math.max(16, (vw - DEFAULT_W) / 2 + cascade);
  const y = Math.max(16, (vh - DEFAULT_H) / 2 + cascade);
  return { x, y, w: DEFAULT_W, h: DEFAULT_H };
}

// A small, out-of-the-way corner rect — used for the chat window's default
// auto-opened state so it doesn't block the rest of the workspace.
export function cornerRect(w = 360, h = 480) {
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1280;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
  const x = Math.max(16, vw - w - 24);
  const y = Math.max(16, vh - h - 112);
  return { x, y, w, h };
}

export function WindowManagerProvider({ children }) {
  const [windows, setWindows] = useState([]);
  const zRef = useRef(10);
  const openCountRef = useRef(0);

  const nextZ = useCallback(() => {
    zRef.current += 1;
    return zRef.current;
  }, []);

  const focusWindow = useCallback((appId) => {
    setWindows((prev) => {
      const target = prev.find((w) => w.appId === appId);
      if (!target) return prev;
      const z = nextZ();
      return prev.map((w) => (w.appId === appId ? { ...w, z } : w));
    });
  }, [nextZ]);

  const openApp = useCallback((appId, initialRect) => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.appId === appId);
      const z = nextZ();
      if (existing) {
        return prev.map((w) => (w.appId === appId ? { ...w, z, minimized: false } : w));
      }
      const rect = initialRect || centeredRect(openCountRef.current);
      openCountRef.current += 1;
      return [...prev, {
        appId,
        x: rect.x, y: rect.y, w: rect.w, h: rect.h,
        z, minimized: false, maximized: false, prevRect: null,
      }];
    });
  }, [nextZ]);

  const closeWindow = useCallback((appId) => {
    setWindows((prev) => prev.filter((w) => w.appId !== appId));
  }, []);

  const minimizeWindow = useCallback((appId) => {
    setWindows((prev) => prev.map((w) => (w.appId === appId ? { ...w, minimized: true } : w)));
  }, []);

  const restoreWindow = useCallback((appId) => {
    const z = nextZ();
    setWindows((prev) => prev.map((w) => (w.appId === appId ? { ...w, minimized: false, z } : w)));
  }, [nextZ]);

  const toggleMaximize = useCallback((appId) => {
    const z = nextZ();
    setWindows((prev) => prev.map((w) => {
      if (w.appId !== appId) return w;
      if (w.maximized) {
        const restored = w.prevRect || centeredRect(0);
        return { ...w, ...restored, maximized: false, prevRect: null, z };
      }
      return {
        ...w,
        maximized: true,
        prevRect: { x: w.x, y: w.y, w: w.w, h: w.h },
        z,
      };
    }));
  }, [nextZ]);

  const moveWindow = useCallback((appId, x, y) => {
    setWindows((prev) => prev.map((w) => (w.appId === appId ? { ...w, x, y } : w)));
  }, []);

  const value = useMemo(() => ({
    windows,
    openApp,
    closeWindow,
    minimizeWindow,
    restoreWindow,
    toggleMaximize,
    moveWindow,
    focusWindow,
  }), [windows, openApp, closeWindow, minimizeWindow, restoreWindow, toggleMaximize, moveWindow, focusWindow]);

  return <WindowManagerContext.Provider value={value}>{children}</WindowManagerContext.Provider>;
}

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) throw new Error('useWindowManager must be used within WindowManagerProvider');
  return ctx;
}
