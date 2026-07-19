"use client";

import { createContext, type ReactNode, useContext, useMemo, useState } from "react";

interface HomepageEntryContextValue {
  hasEntered: boolean;
  enter: () => void;
}

const HomepageEntryContext = createContext<HomepageEntryContextValue | null>(null);

export function HomepageEntryProvider({ children }: { children: ReactNode }) {
  const [hasEntered, setHasEntered] = useState(false);
  const value = useMemo(() => ({ hasEntered, enter: () => setHasEntered(true) }), [hasEntered]);

  return <HomepageEntryContext.Provider value={value}>{children}</HomepageEntryContext.Provider>;
}

export function useHomepageEntry() {
  const context = useContext(HomepageEntryContext);
  if (!context) throw new Error("useHomepageEntry must be used within HomepageEntryProvider");
  return context;
}
