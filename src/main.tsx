import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import GlobalProviders from "./providers/GlobalProviders";
import ErrorBoundary from "./components/ErrorBoundary";

// --------------------
// Root Render
// --------------------
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("❌ Root element not found. Ensure <div id='root'></div> exists in index.html");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <GlobalProviders>
        <App />
      </GlobalProviders>
    </ErrorBoundary>
  </React.StrictMode>
);