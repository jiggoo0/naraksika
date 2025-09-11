// src/components/Services/Services.tsx
"use client";

import React, { useCallback } from "react";
import ServiceCard from "./ServiceCard";
import { servicePackages, freebies, ServicePackage } from "@/data/services";
import Icon from "../common/Icon";

// --------------------
// Freebies Section
// --------------------
const FreebiesSection: React.FC = () => {
  return (
    <section
      className="mt-20"
      aria-labelledby="freebies-heading"
      aria-describedby="freebies-desc"
    >
      <h4
        id="freebies-heading"
        className="text-2xl font-semibold text-center text-primary-dark mb-4"
      >
        🎁 สิ่งที่คุณจะได้รับเพิ่ม ฟรี! ทุกแพ็คเกจ
      </h4>
      <p
        id="freebies-desc"
        className="text-center text-neutral-600 mb-6 text-sm"
      >
        มอบความคุ้มค่าเพิ่ม โดยไม่มีค่าใช้จ่ายเพิ่มเติม
      </p>
      <ul className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-neutral-700">
        {freebies.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <Icon
              name="checkCircle"
              className="w-4 h-4 text-accent mt-[2px]"
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

// --------------------
// Services Section
// --------------------
const Services: React.FC = () => {
  const handleInterest = useCallback((id: string) => {
    // TODO: Replace alert with modal / contact form trigger
    alert(`สนใจแพ็คเกจ: ${id}`);
  }, []);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 bg-neutral-light"
    >
      <div className="container mx-auto px-6 sm:px-10 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <h3
            id="services-heading"
            className="text-4xl sm:text-5xl font-display font-bold text-neutral-dark mb-4 tracking-tight"
          >
            บริการของเรา
          </h3>
          <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto">
            ทุกแพ็คเกจออกแบบมาให้คุ้มค่า พร้อมใช้งานจริง
            ครอบคลุมความต้องการของธุรกิจขนาดเล็กถึงกลาง
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicePackages.map((service: ServicePackage) => (
            <ServiceCard
              key={service.id}
              service={service}
              onInterest={handleInterest}
            />
          ))}
        </div>

        {/* Freebies */}
        <FreebiesSection />
      </div>
    </section>
  );
};

export default Services;