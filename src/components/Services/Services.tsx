// src/components/Services/Services.tsx
import React from "react";
import ServiceCard from "./ServiceCard";
import { servicePackages, freebies } from "@/data/services";
import Icon from "../common/Icon";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  const handleInterest = (id: string) => {
    alert(`สนใจแพ็คเกจ: ${id}`);
  };

  return (
    <section
      className="py-24 bg-neutral-light"
      id="services"
      aria-labelledby="services-heading"
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
            ทุกแพ็คเกจออกแบบมาให้คุ้มค่า พร้อมใช้งานจริง ครอบคลุมความต้องการของธุรกิจขนาดเล็กถึงกลาง
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicePackages.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onInterest={handleInterest}
            />
          ))}
        </div>

        {/* Freebies */}
        <section className="mt-20">
          <h4 className="text-2xl font-semibold text-center text-primary-dark mb-6">
            🎁 สิ่งที่คุณจะได้รับเพิ่ม ฟรี! ทุกแพ็คเกจ
          </h4>
          <ul className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-neutral-700">
            {freebies.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <Icon name="checkCircle" className="w-4 h-4 text-accent mt-[2px]" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Services;