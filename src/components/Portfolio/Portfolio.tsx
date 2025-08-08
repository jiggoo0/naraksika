import React from "react";

const portfolioItems = [
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

const Portfolio: React.FC = () => (
  <section className="py-20 bg-white" id="portfolio">
    <div className="container mx-auto px-4 max-w-6xl">
      <h3 className="text-4xl font-bold mb-10 text-primary">Portfolio</h3>
      <p className="mb-12 text-neutral-dark text-center max-w-3xl mx-auto">
        นี่คือตัวอย่างงานล่าสุดของเรา พร้อมรายละเอียดและรูปภาพประกอบ
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map(({ id, title, description, imageUrl }) => (
          <article
            key={id}
            className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={imageUrl}
              alt={`ตัวอย่างงาน: ${title}`}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6 bg-white">
              <h4 className="text-xl font-semibold mb-2 text-primary">{title}</h4>
              <p className="text-neutral-dark text-sm">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;