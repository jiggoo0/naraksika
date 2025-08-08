// src/components/Services/ServiceCard.tsx
import React from "react";
import type { ServicePackage } from "@/data/services";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: ServicePackage;
  onInterest: (id: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onInterest }) => {
  const { id, title, price, features, revisions, support } = service;

  return (
    <article
      role="region"
      aria-labelledby={`${id}-title`}
      className="bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      <h4
        id={`${id}-title`}
        className="text-2xl font-semibold mb-4 text-primary"
      >
        {title}
      </h4>

      <p className="text-xl font-extrabold text-primary-dark mb-4">
        {price.toLocaleString("th-TH", {
          style: "currency",
          currency: "THB",
          minimumFractionDigits: 0,
        })}
      </p>

      <ul className="flex-1 mb-4 list-disc list-inside space-y-1 text-neutral-dark text-sm">
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
        <li>ปรับแก้ไขผลงาน {revisions} ครั้ง</li>
        <li>{support}</li>
      </ul>

      <motion.button
        type="button"
        onClick={() => onInterest(id)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        aria-label={`สนใจแพ็คเกจ ${title}`}
        className="mt-auto px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark focus-visible:ring-offset-2 transition-all shadow-sm hover:shadow-md"
      >
        สนใจบริการ
      </motion.button>
    </article>
  );
};

export default ServiceCard;