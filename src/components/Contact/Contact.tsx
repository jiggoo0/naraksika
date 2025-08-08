import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

const Contact: React.FC = () => (
  <section
    id="contact"
    className="py-20 bg-gray-50 text-gray-900 px-6 sm:px-12 md:px-20 lg:px-32"
    aria-labelledby="contact-heading"
  >
    <div className="max-w-3xl mx-auto text-center">
      <h3 id="contact-heading" className="text-3xl font-bold mb-6">
        ติดต่อเรา
      </h3>
      <p className="mb-8 text-lg">
        หากสนใจบริการ สามารถติดต่อผ่านช่องทางด้านล่างนี้ได้เลยครับ
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-8">
        <a
          href="tel:+66912345678"
          className="flex items-center gap-3 px-6 py-4 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          aria-label="โทรหาเรา 091-234-5678"
        >
          <PhoneIcon className="w-6 h-6" aria-hidden="true" />
          โทรหาเรา: 091-234-5678
        </a>

        <a
          href="mailto:devbaanbaan@example.com"
          className="flex items-center gap-3 px-6 py-4 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          aria-label="ส่งอีเมลถึง devbaanbaan@example.com"
        >
          <EnvelopeIcon className="w-6 h-6" aria-hidden="true" />
          ส่งอีเมล: devbaanbaan@example.com
        </a>

        <a
          href="https://line.me/R/ti/p/~yourlineid"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          aria-label="แชท LINE ที่ @yourlineid"
        >
          <ChatBubbleLeftEllipsisIcon
            className="w-6 h-6"
            aria-hidden="true"
          />
          แชท LINE: @yourlineid
        </a>
      </div>
    </div>
  </section>
);

export default Contact;