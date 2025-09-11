// src/config/site.ts
export const siteConfig = {
  title: "Dev Baan Baan - รับทำเว็บไซต์ธุรกิจ",
  description:
    "ฟรีแลนซ์รับออกแบบเว็บไซต์ รองรับมือถือ SEO ครบ พร้อมดูแลหลังส่งมอบ",
  url: "https://yourdomain.com", // TODO: ใส่ domain จริง
  ogImage: "/og-cover.jpg",
  author: "Dev Baan Baan",
  contact: {
    phone: "091-234-5678",
    email: "devbaanbaan@example.com",
    line: "@yourlineid",
    lineUrl: "https://lin.ee/VwXOQQO",
  },
};

// --------------------
// Service Packages Config
// --------------------
export type ServicePackage = {
  id: string;
  name: string;
  target: string;
  features: string[];
  price: string;
};

export const servicesConfig: ServicePackage[] = [
  {
    id: "basic",
    name: "1 หน้า",
    target: "Landing Page / โปรโมชัน",
    features: [
      "รองรับมือถือ (Responsive)",
      "SEO เบื้องต้น",
      "ปรับแก้ไข 2 ครั้ง",
      "สอนการใช้งานหลังบ้าน",
    ],
    price: "฿2,990",
  },
  {
    id: "starter",
    name: "10 หน้า",
    target: "ร้านค้าออนไลน์ขนาดเล็ก",
    features: [
      "Responsive + SEO",
      "บทความ 2 เรื่อง",
      "ปรับแก้ไข 3 ครั้ง",
    ],
    price: "฿8,990",
  },
  {
    id: "business",
    name: "20 หน้า",
    target: "ธุรกิจสินค้าหรือบริการหลายประเภท",
    features: [
      "Responsive + SEO",
      "แบนเนอร์ 1 ชิ้น",
      "Email 1 บัญชี",
      "ฟรี Hosting + Domain 1 ปี",
    ],
    price: "฿14,900",
  },
  {
    id: "enterprise",
    name: "60 หน้า",
    target: "องค์กร / เว็บครบวงจร",
    features: [
      "Responsive + SEO",
      "แบนเนอร์ 5 ชิ้น",
      "Email 3 บัญชี",
      "ฟรี Hosting + Domain 1 ปี",
    ],
    price: "฿35,900",
  },
];

// --------------------
// Bonus Features (Free for all packages)
// --------------------
export const bonusFeatures: string[] = [
  "ออกแบบหน้าเว็บใหม่ทั้งหมด",
  "รูปภาพลิขสิทธิ์",
  "ระบบเปลี่ยนภาษา (ไทย-อังกฤษ)",
  "Motion & Interaction",
  "Google Map",
  "แบบฟอร์มติดต่อ + Pop-up โปรโมชัน",
  "SSL HTTPS",
  "คู่มือปรับแก้เว็บไซต์",
  "ระบบนับจำนวนผู้เข้าชม",
  "ระบบ Cookie",
];