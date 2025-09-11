// src/components/Services/AddonsSection.tsx
"use client";

import React, { useState, useCallback, memo } from "react";
import { motion, Variants } from "framer-motion";
import { addonServices, AddonService } from "@/data/addonServices";
import Icon from "../common/Icon";

// --------------------
// Motion Variants
// --------------------
const cardVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.03 },
  tap: { scale: 0.97 },
};

// --------------------
// AddonCard Component
// --------------------
interface AddonCardProps {
  addon: AddonService;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

const AddonCard: React.FC<AddonCardProps> = memo(({ addon, isSelected, onToggle }) => {
  const { id, title, description, price, priceRange, duration } = addon;

  return (
    <motion.div
      key={id}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`border rounded-xl p-6 cursor-pointer select-none shadow-sm focus:outline-none focus:ring-2 focus:ring-accent ${
        isSelected
          ? "border-accent bg-accent/10"
          : "border-gray-200 bg-white hover:bg-gray-50"
      }`}
      onClick={() => onToggle(id)}
      role="checkbox"
      aria-checked={isSelected}
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          onToggle(id);
        }
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <h4 id={`${id}-title`} className="text-xl font-semibold text-neutral-dark">
          {title}
        </h4>
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center border ${
            isSelected ? "bg-accent border-accent text-white" : "border-gray-300 text-transparent"
          }`}
          aria-hidden="true"
        >
          <Icon name="checkCircle" className="w-5 h-5" aria-hidden="true" />
        </div>
      </div>

      <p id={`${id}-desc`} className="text-sm text-neutral-600 mb-4">
        {description}
      </p>

      <p className="text-lg font-semibold text-primary">
        {typeof price === "number"
          ? price.toLocaleString("th-TH", { style: "currency", currency: "THB", maximumFractionDigits: 0 })
          : price}
        {priceRange && <span className="ml-1 text-sm font-normal text-neutral-500">({priceRange})</span>}
      </p>

      {duration && <p className="text-sm text-neutral-500 mt-1 italic">{duration}</p>}
    </motion.div>
  );
});

AddonCard.displayName = "AddonCard";

// --------------------
// AddonsSection Component
// --------------------
interface AddonsSectionProps {
  onSelect?: (id: string, selected: boolean) => void;
}

const AddonsSection: React.FC<AddonsSectionProps> = ({ onSelect }) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const toggleSelect = useCallback(
    (id: string) => {
      setSelectedIds((prev) => {
        const newSet = new Set(prev);
        const isSelected = newSet.has(id);

        if (isSelected) {
          newSet.delete(id);
          onSelect?.(id, false);
        } else {
          newSet.add(id);
          onSelect?.(id, true);
        }
        return newSet;
      });
    },
    [onSelect]
  );

  return (
    <section id="addons" aria-labelledby="addons-heading" className="py-24 bg-white dark:bg-neutral-dark">
      <div className="container mx-auto px-6 sm:px-10 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <h3
            id="addons-heading"
            className="text-4xl sm:text-5xl font-display font-bold text-neutral-dark dark:text-neutral-light mb-4 tracking-tight"
          >
            บริการเสริมเพิ่มเติม
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
            เลือกบริการเสริมเพื่อเพิ่มประสิทธิภาพและความครบถ้วนให้เว็บไซต์ของคุณ
          </p>
        </div>

        {/* Addon Cards */}
        <div role="group" aria-label="บริการเสริม" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {addonServices.map((addon) => (
            <AddonCard
              key={addon.id}
              addon={addon}
              isSelected={selectedIds.has(addon.id)}
              onToggle={toggleSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddonsSection;