// src/App.tsx
"use client";

import React, { memo } from "react";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";

// --------------------
// App Component
// --------------------
const App: React.FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default memo(App);