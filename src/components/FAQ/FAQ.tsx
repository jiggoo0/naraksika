// src/components/FAQ/FAQ.tsx
import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface PaymentItem {
  title: string;
  description: string;
}

const faqs: FAQItem[] = [
  {
    question: "ใช้ระยะเวลาในการออกแบบเว็บไซต์นานแค่ไหน ?",
    answer:
      "ใช้เวลาประมาณ 15 วันทำการ ขึ้นอยู่กับความซับซ้อนของเว็บไซต์ และความพร้อมของข้อมูลจากลูกค้า",
  },
  {
    question: "มีสอนการใช้งานระบบหลังบ้านหรือไม่ ?",
    answer:
      "เรามีสอนการใช้งานระบบหลังบ้านอย่างละเอียด พร้อมแนะนำการดูแลเบื้องต้น เพื่อให้คุณสามารถจัดการเว็บไซต์ได้ด้วยตนเอง",
  },
  {
    question: "ลูกค้าสามารถขอปรับแก้ไขงาน ได้กี่ครั้ง ?",
    answer:
      "ปรับแก้ไขตามความเหมาะสมภายในขอบเขตที่ตกลงกันไว้ (ไม่นับจุดเล็กน้อย) เพื่อให้ได้ผลงานที่ตรงใจที่สุด",
  },
  {
    question: "ให้การดูแล Support หลังส่งมอบนานเท่าไหร่ ?",
    answer:
      "เรามีบริการดูแลหลังการส่งมอบตลอดการใช้งาน โดยคุณสามารถติดต่อสอบถาม หรือแก้ไขปัญหาที่เกิดจากระบบได้โดยไม่มีค่าใช้จ่ายเพิ่มเติม",
  },
  {
    question: "เว็บไซต์รองรับการแสดงผลบนมือถือหรือไม่ ?",
    answer:
      "เว็บไซต์ที่เราเป็นแบบ Responsive Design รองรับการแสดงผลทั้งบนมือถือ แท็บเล็ต และคอมพิวเตอร์",
  },
];

const payment: PaymentItem[] = [
  {
    title: "ค่าบริการแบ่งชำระได้",
    description:
      "การชำระเงินของเราแบ่งเป็น 2 งวด งวดละ 50% ไม่ต้องชำระเต็มก่อนเริ่มงาน",
  },
  {
    title: "ไม่มีค่าดำเนินการรายปี",
    description: "แพ็คเกจการทำเว็บไซต์ของเราไม่มีเก็บรายปี จ่ายครั้งเดียวจบ",
  },
];

const FAQ: React.FC = () => {
  return (
    <section
      id="faq"
      className="py-20 bg-neutral-50 px-6 sm:px-12 md:px-20 lg:px-32"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h3
          id="faq-heading"
          className="text-3xl sm:text-4xl font-display font-semibold mb-12 text-primary text-center"
        >
          คำถามเกี่ยวกับบริการของเรา
        </h3>

        {/* FAQ Items */}
        <div className="space-y-6" role="list">
          {faqs.map((faq, idx) => (
            <article
              key={idx}
              className="border rounded-lg p-6 bg-white shadow hover:shadow-md transition"
              role="listitem"
              tabIndex={0}
              aria-label={`คำถาม: ${faq.question}`}
            >
              <h4 className="font-semibold text-lg text-neutral-900 mb-2">
                {faq.question}
              </h4>
              <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>

        {/* Payment Info */}
        <div className="mt-14 space-y-6" role="list" aria-label="รายละเอียดการชำระเงิน">
          {payment.map((item, idx) => (
            <section
              key={idx}
              className="border-l-4 border-primary bg-white p-6 shadow-sm rounded-md hover:shadow-md transition"
              role="listitem"
              tabIndex={0}
              aria-label={item.title}
            >
              <h4 className="font-semibold text-primary text-lg mb-2">{item.title}</h4>
              <p className="text-neutral-700">{item.description}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;