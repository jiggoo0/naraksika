export interface AddonService {
  id: string;
  title: string;
  description: string;
  price: number | "เริ่มต้น";
  priceRange?: string; // เช่น "3,000 - 5,000 บาท"
  duration?: string; // เช่น "รายเดือน", "3 เดือน"
  kpis?: string[]; // ตัวชี้วัดผลลัพธ์ที่ลูกค้าจะได้รับ
  support?: string; // รายละเอียดบริการหลังการขาย
}

export const addonServices: AddonService[] = [
  {
    id: "seo-boost",
    title: "เพิ่มประสิทธิภาพ SEO เชิงลึก",
    description:
      "วิเคราะห์ Keyword, ปรับโครงสร้าง HTML, Meta, Sitemap, และ Submit Index ให้ Google",
    price: 3500,
    duration: "3 เดือน",
    kpis: ["เพิ่มอันดับคำค้นหา", "เพิ่ม Organic Traffic", "รายงานผลทุกเดือน"],
    support: "ปรับปรุง SEO ต่อเนื่องและให้คำแนะนำรายเดือน",
  },
  {
    id: "google-ads",
    title: "ยิงแอด Google Ads",
    description:
      "ตั้งค่าแคมเปญพร้อมทำแบนเนอร์, วิเคราะห์กลุ่มเป้าหมาย และบริหารงบยิงโฆษณา",
    price: "เริ่มต้น",
    priceRange: "5,000 - 20,000 บาท/เดือน",
    duration: "รายเดือน",
    kpis: [
      "CTR สูงขึ้น",
      "Conversion เพิ่มขึ้น",
      "บริหารงบประมาณอย่างมีประสิทธิภาพ",
    ],
    support: "ติดตามและปรับแคมเปญรายสัปดาห์",
  },
  {
    id: "content-writing",
    title: "เขียนบทความ SEO",
    description:
      "เขียนบทความคุณภาพตามกลุ่มเป้าหมายและคำค้นหา Google (ขั้นต่ำ 500 คำ/บท)",
    price: 900,
    kpis: ["บทความคุณภาพ", "รองรับคำค้นหาเฉพาะกลุ่ม"],
    support: "แก้ไขบทความ 1 ครั้งหลังส่งมอบ",
  },
  {
    id: "speed-optimize",
    title: "ปรับความเร็วเว็บไซต์",
    description: "ลดการโหลดช้า, Optimize รูป, Script และวัดคะแนน PageSpeed",
    price: 2500,
    kpis: ["คะแนน PageSpeed เพิ่มขึ้น", "โหลดเร็วขึ้นบนมือถือและเดสก์ท็อป"],
    support: "ตรวจสอบและแก้ไขบัคความเร็ว 1 เดือนหลังส่งมอบ",
  },
  {
    id: "multi-language",
    title: "รองรับหลายภาษา",
    description: "ติดตั้งระบบแปลภาษา เช่น ไทย – อังกฤษ และลงเนื้อหาทั้ง 2 ภาษา",
    price: 3000,
    support: "การตั้งค่าระบบภาษาและการซัพพอร์ตหลังติดตั้ง 1 เดือน",
  },
  {
    id: "branding-kit",
    title: "ออกแบบ Branding",
    description:
      "โลโก้ + โทนสี + ฟอนต์ + แบนเนอร์ Social ครบชุดสำหรับธุรกิจใหม่",
    price: 4900,
    support: "แก้ไขงานออกแบบ 2 ครั้งหลังส่งมอบ",
  },
  {
    id: "maintenance",
    title: "บริการดูแลเว็บไซต์รายเดือน",
    description:
      "อัปเดตเนื้อหา, ตรวจสอบความปลอดภัย และสำรองข้อมูล (รายเดือน/รายปี)",
    price: 800,
    duration: "รายเดือน / รายปี",
    support: "ดูแลและรายงานปัญหาเว็บไซต์อย่างสม่ำเสมอ",
  },
];
