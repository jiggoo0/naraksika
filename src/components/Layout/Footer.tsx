// src/components/Layout/Footer.tsx
import React from "react";
import Icon, { IconName } from "../common/Icon";

const socialIcons: IconName[] = [
  "facebook",
  "instagram",
  "line",
  "twitter",
  "linkedin",
  "youtube",
  "email",
  "phone",
  "website",
  "user",
  "arrowRight",
  "checkCircle",
];

const colorMap: Record<IconName, string> = {
  facebook: "text-blue-600 hover:text-blue-800",
  instagram: "text-pink-500 hover:text-pink-700",
  line: "text-green-600 hover:text-green-800",
  twitter: "text-sky-400 hover:text-sky-600",
  linkedin: "text-blue-700 hover:text-blue-900",
  youtube: "text-red-600 hover:text-red-800",
  email: "text-neutral-700 hover:text-neutral-900",
  phone: "text-green-700 hover:text-green-900",
  website: "text-purple-600 hover:text-purple-800",
  user: "text-gray-600 hover:text-gray-800",
  arrowRight: "text-accent hover:text-accent-dark",
  checkCircle: "text-green-500 hover:text-green-700",
};

const Footer: React.FC = () => (
  <footer
    aria-label="footer"
    className="w-full py-6 bg-neutral-100 dark:bg-neutral-900 text-center text-neutral-600 dark:text-neutral-300 text-sm select-none"
  >
    <p>
      © 2025 <span className="font-semibold text-primary">Dev Baan Baan</span> — ฟรีแลนซ์เดฟบ้าน ๆ ฝีมือไม่ธรรมดา
    </p>

    <div className="mt-3 flex justify-center space-x-6">
      {socialIcons.map((name) => (
        <Icon
          key={name}
          name={name}
          href={`https://${name}.com/yourprofile`}
          className={`w-6 h-6 cursor-pointer transition-colors ${colorMap[name] || ""}`}
          aria-label={name.charAt(0).toUpperCase() + name.slice(1)}
        />
      ))}
    </div>

    <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
      Licensed under{" "}
      <a
        href="/LICENSE"
        className="underline hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        MIT License
      </a>
    </p>
  </footer>
);

export default Footer;