// src/components/Contact/Contact.tsx
"use client";

import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const contactMethods = [
  {
    title: "โทรหาเรา",
    href: "tel:+66912345678",
    icon: PhoneIcon,
    bgColor: "bg-indigo-600",
    hoverColor: "hover:bg-indigo-700",
    text: "091-234-5678",
  },
  {
    title: "ส่งอีเมล",
    href: "mailto:devbaanbaan@example.com",
    icon: EnvelopeIcon,
    bgColor: "bg-green-600",
    hoverColor: "hover:bg-green-700",
    text: "devbaanbaan@example.com",
  },
  {
    title: "แชท LINE",
    href: "https://line.me/R/ti/p/~yourlineid",
    icon: ChatBubbleLeftEllipsisIcon,
    bgColor: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    text: "@yourlineid",
    external: true,
  },
];

const Contact: React.FC = () => (
  <section
    id="contact"
    className="py-20 bg-neutral-light dark:bg-neutral-dark text-neutral-dark dark:text-neutral-light px-6 sm:px-12 md:px-20 lg:px-32"
    aria-labelledby="contact-heading"
  >
    <div className="max-w-4xl mx-auto text-center">
      {/* Heading */}
      <h3
        id="contact-heading"
        className="text-4xl font-display font-bold mb-4 text-primary dark:text-primary"
      >
        ติดต่อเรา
      </h3>
      <p className="mb-12 text-lg text-neutral-700 dark:text-neutral-300">
        หากสนใจบริการ สามารถติดต่อผ่านช่องทางด้านล่างนี้ได้เลยครับ
      </p>

      {/* Contact Cards */}
      <div className="grid gap-6 sm:grid-cols-3">
        {contactMethods.map(
          ({ title, href, icon: Icon, bgColor, hoverColor, text, external }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target={external ? "_blank" : "_self"}
              rel={external ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center justify-center gap-3 p-6 rounded-xl shadow-lg transition-all ${bgColor} ${hoverColor} text-white`}
              aria-label={`${title}: ${text}`}
            >
              <div className="p-3 rounded-full bg-white/20">
                <Icon className="w-8 h-8" aria-hidden="true" />
              </div>
              <h4 className="font-semibold text-lg">{title}</h4>
              <p className="text-sm">{text}</p>
            </motion.a>
          )
        )}
      </div>
    </div>
  </section>
);

export default Contact;