// src/providers/GlobalProviders.tsx
import React from "react";
import { ThemeProvider } from "@/context/ThemeProvider";

interface GlobalProvidersProps {
  children: React.ReactNode;
}

const GlobalProviders: React.FC<GlobalProvidersProps> = ({ children }) => {
  React.useEffect(() => {
    // Placeholder for analytics init
    console.log("App mounted: Analytics init here");
  }, []);

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default GlobalProviders;
