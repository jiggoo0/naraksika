// src/components/Services/ServiceCard.tsx
"use client";

import React, { memo } from "react";
import type { ServicePackage } from "@/data/services";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: ServicePackage & { promo?: string }; // ✅ optional promotion
  onInterest: (id: string) => void;
}

const buttonMotion = {
  hover: { scale: 1.05 },
  tap: { scale: 0.97 },
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onInterest }) => {
  const { id, title, price, features, revisions, support, promo } = service;

  return (
    <article
      role="region"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-features`}
      className="bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300 flex flex-col relative"
    >
      {/* Promo Badge */}
      {promo && (
        <span className="absolute top-4 right-4 text-xs font-semibold bg-accent text-white px-2 py-1 rounded-md shadow-sm">
          {promo}
        </span>
      )}

      {/* Title */}
      <h4
        id={`${id}-title`}
        className="text-2xl font-semibold mb-4 text-primary"
      >
        {title}
      </h4>

      {/* Price */}
      <p className="text-xl font-extrabold text-primary-dark mb-4">
        {price.toLocaleString("th-TH", {
          style: "currency",
          currency: "THB",
          minimumFractionDigits: 0,
        })}
        <span className="sr-only"> บาท</span>
      </p>

      {/* Features */}
      <ul
        id={`${id}-features`}
        className="flex-1 mb-4 list-disc list-inside space-y-1 text-neutral-dark text-sm"
      >
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
        <li>ปรับแก้ไขผลงาน {revisions} ครั้ง</li>
        <li>{support}</li>
      </ul>

      {/* CTA Button */}
      <motion.button
        type="button"
        onClick={() => onInterest(id)}
        variants={buttonMotion}
        whileHover="hover"
        whileTap="tap"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        aria-label={`สนใจแพ็คเกจ ${title}`}
        className="mt-auto px-4 py-2 bg-primary text-white rounded-lg font-medium 
          hover:bg-primary-dark focus-visible:outline-none 
          focus-visible:ring-2 focus-visible:ring-primary-dark 
          focus-visible:ring-offset-2 transition-all shadow-sm hover:shadow-md"
      >
        สนใจบริการ
      </motion.button>
    </article>
  );
};

export default memo(ServiceCard);