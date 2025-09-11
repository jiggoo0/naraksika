// src/components/About/About.tsx
"use client";

import React, { memo } from "react";
import Icon from "../common/Icon";

const About: React.FC = () => (
  <section
    id="about"
    className="relative py-24 bg-white dark:bg-neutral-dark text-neutral-800 dark:text-neutral-light px-6 sm:px-12 md:px-20 lg:px-32"
  >
    <div className="relative max-w-3xl mx-auto text-center">
      {/* Headline */}
      <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-primary">
        <Icon name="user" className="w-5 h-5 text-primary" />
        แนะนำตัว Dev Baan Baan
      </div>

      <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 leading-tight tracking-tight text-neutral-900 dark:text-neutral-light">
        <span className="bg-gradient-to-r from-accent to-primary-dark bg-clip-text text-transparent">
          ฟรีแลนซ์ธรรมดา ที่ทำผลงานไม่ธรรมดา
        </span>
      </h2>

      {/* Body text */}
      <p className="text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 whitespace-pre-line">
        {`สวัสดีครับ ผมชื่อเอ็ม – เดฟบ้าน ๆ  
ยินดีรับทำเว็บไซต์สำหรับทุกระดับธุรกิจ ไม่ว่าจะร้านค้าเล็ก ๆ หรือกิจการที่เพิ่งเริ่มต้น  
หลายคนอาจลังเลว่าเว็บจำเป็นไหมสำหรับธุรกิจเล็ก?  

คำตอบคือ — ใช่แน่นอนครับ เพราะ "ภาพลักษณ์" คือกุญแจสำคัญ  
เว็บไซต์ที่ดูดี น่าเชื่อถือ จะทำให้ลูกค้าเลือกคุณเป็นอันดับแรก  

ผมพร้อมให้คำปรึกษาและดูแลให้ธุรกิจของคุณมีเว็บไซต์ที่ตอบโจทย์อย่างแท้จริง`}
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
        <a
          href="#contact"
          className="inline-flex justify-center items-center gap-2 px-8 py-3 min-w-[160px] 
                     text-white bg-accent hover:bg-accent/90 font-semibold text-base 
                     rounded-xl shadow-md transition 
                     focus-visible:outline-none focus-visible:ring-2 
                     focus-visible:ring-accent/50 focus-visible:ring-offset-2"
          aria-label="ติดต่อเรา"
        >
          <Icon name="arrowRight" className="w-5 h-5" />
          ติดต่อเรา
        </a>
        <a
          href="#services"
          className="inline-flex justify-center items-center gap-2 px-8 py-3 min-w-[160px] 
                     text-accent border border-accent/30 bg-white dark:bg-neutral-dark hover:bg-accent/10 font-semibold text-base 
                     rounded-xl transition 
                     focus-visible:outline-none focus-visible:ring-2 
                     focus-visible:ring-accent/30 focus-visible:ring-offset-2"
          aria-label="บริการของเรา"
        >
          บริการของเรา
        </a>
      </div>
    </div>
  </section>
);

export default memo(About);