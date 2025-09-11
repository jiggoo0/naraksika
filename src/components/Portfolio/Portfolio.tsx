// src/components/Portfolio/Portfolio.tsx
"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "เว็บไซต์ร้านค้าออนไลน์",
    description: "ออกแบบและพัฒนาเว็บร้านค้าออนไลน์ รองรับมือถือ SEO ครบ",
    imageUrl: "/portfolio/shop-example.jpg",
  },
  {
    id: 2,
    title: "เว็บไซต์องค์กร",
    description: "เว็บสำหรับองค์กร พร้อมระบบข่าวสารและติดต่อ",
    imageUrl: "/portfolio/org-example.jpg",
  },
  {
    id: 3,
    title: "Landing Page โปรโมชัน",
    description: "Landing Page สำหรับโปรโมชันสินค้าหรือบริการ",
    imageUrl: "/portfolio/landing-example.jpg",
  },
];

const PortfolioCard: React.FC<{ item: PortfolioItem }> = memo(({ item }) => (
  <motion.article
    key={item.id}
    className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-neutral-dark"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    aria-labelledby={`portfolio-title-${item.id}`}
    aria-describedby={`portfolio-desc-${item.id}`}
  >
    <img
      src={item.imageUrl}
      alt={`ตัวอย่างงาน: ${item.title}`}
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="p-6">
      <h4
        id={`portfolio-title-${item.id}`}
        className="text-xl font-semibold mb-2 text-primary dark:text-primary"
      >
        {item.title}
      </h4>
      <p
        id={`portfolio-desc-${item.id}`}
        className="text-sm text-neutral-700 dark:text-neutral-light"
      >
        {item.description}
      </p>
    </div>
  </motion.article>
));

PortfolioCard.displayName = "PortfolioCard";

const Portfolio: React.FC = () => (
  <section
    id="portfolio"
    className="py-20 bg-white dark:bg-neutral-dark text-neutral-dark dark:text-neutral-light"
  >
    <div className="container mx-auto px-4 max-w-6xl">
      {/* Intro Text */}
      <p className="mb-12 text-center max-w-3xl mx-auto text-neutral-700 dark:text-neutral-300">
        นี่คือตัวอย่างงานล่าสุดของเรา พร้อมรายละเอียดและรูปภาพประกอบ
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  </section>
);

export default memo(Portfolio);