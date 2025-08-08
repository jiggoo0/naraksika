import React, { useState, useCallback } from "react";
import { addonServices } from "@/data/addonServices";
import { motion } from "framer-motion";
import Icon from "../common/Icon";

interface AddonsSectionProps {
  onSelect?: (id: string, selected: boolean) => void;
}

const AddonsSection: React.FC<AddonsSectionProps> = ({ onSelect }) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const toggleSelect = useCallback(
    (id: string) => {
      setSelectedIds((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(id)) {
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
    <section
      id="addons"
      aria-labelledby="addons-heading"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-6 sm:px-10 max-w-7xl">
        <div className="text-center mb-14">
          <h3
            id="addons-heading"
            className="text-4xl sm:text-5xl font-display font-bold text-neutral-dark mb-4 tracking-tight"
          >
            บริการเสริมเพิ่มเติม
          </h3>
          <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto">
            เลือกบริการเสริมเพื่อเพิ่มประสิทธิภาพและความครบถ้วนให้เว็บไซต์ของคุณ
          </p>
        </div>

        <div
          role="group"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        >
          {addonServices.map(({ id, title, description, price, priceRange, duration }) => {
            const isSelected = selectedIds.has(id);
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`border rounded-xl p-6 cursor-pointer select-none shadow-sm ${
                  isSelected
                    ? "border-accent bg-accent/10"
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => toggleSelect(id)}
                role="checkbox"
                aria-checked={isSelected}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") {
                    e.preventDefault();
                    toggleSelect(id);
                  }
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-semibold text-neutral-dark">{title}</h4>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                      isSelected
                        ? "bg-accent border-accent text-white"
                        : "border-gray-300 text-transparent"
                    }`}
                    aria-hidden="true"
                  >
                    <Icon name="checkCircle" className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-sm text-neutral-600 mb-4">{description}</p>
                <p className="text-lg font-semibold text-primary">
                  {typeof price === "number"
                    ? price.toLocaleString("th-TH", {
                        style: "currency",
                        currency: "THB",
                        maximumFractionDigits: 0,
                      })
                    : price}
                  {priceRange && <span className="ml-1 text-sm font-normal text-neutral-500">({priceRange})</span>}
                </p>
                {duration && (
                  <p className="text-sm text-neutral-500 mt-1 italic">{duration}</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AddonsSection;