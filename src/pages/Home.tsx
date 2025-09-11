// src/pages/Home.tsx
"use client";

import React, { memo } from "react";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import FAQ from "@/components/FAQ/FAQ";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/Contact/Contact";

const Home: React.FC = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* FAQ Section */}
      <FAQ />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Contact / CTA Section */}
      <Contact />
    </main>
  );
};

// ใช้ memo เพื่อป้องกัน re-render ของ Home ถ้า props ไม่เปลี่ยน
export default memo(Home);