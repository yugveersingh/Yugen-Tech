"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Region = "IN" | "GLOBAL";

interface CurrencyContextValue {
  region: Region;
  setRegion: (r: Region) => void;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

/**
 * Detects whether a visitor is in India and exposes the chosen pricing region.
 *
 * Detection strategy (all client-side, privacy-friendly — no IP lookups):
 *  1. A previously saved manual choice (localStorage) always wins.
 *  2. Otherwise we infer from the browser timezone (Asia/Kolkata) and locale.
 *
 * Visitors can override the auto-detected region with the pricing toggle.
 */
export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegionState] = useState<Region>("GLOBAL");

  useEffect(() => {
    const saved = localStorage.getItem("yugen-region") as Region | null;
    if (saved === "IN" || saved === "GLOBAL") {
      setRegionState(saved);
      return;
    }

    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
      const locale = navigator.language ?? "";
      const isIndia =
        tz === "Asia/Kolkata" ||
        tz === "Asia/Calcutta" ||
        locale.toLowerCase().includes("-in");
      setRegionState(isIndia ? "IN" : "GLOBAL");
    } catch {
      setRegionState("GLOBAL");
    }
  }, []);

  const setRegion = (r: Region) => {
    setRegionState(r);
    try {
      localStorage.setItem("yugen-region", r);
    } catch {
      /* ignore storage errors (e.g. private mode) */
    }
  };

  const value = useMemo(() => ({ region, setRegion }), [region]);

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return ctx;
}
