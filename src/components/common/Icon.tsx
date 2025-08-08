// src/components/common/Icon.tsx
import React from "react";
import {
  UserIcon as UserSolid,
  ArrowRightIcon as ArrowRightSolid,
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

export type IconName =
  | "user"
  | "arrowRight"
  | "email"
  | "phone"
  | "website"
  | "facebook"
  | "twitter"
  | "instagram"
  | "line"
  | "youtube"
  | "linkedin"
  | "checkCircle";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  href?: string;
  label?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = "", href, label, ...props }) => {
  const iconMap: Record<IconName, JSX.Element> = {
    user: <UserSolid className={className} {...props} />,
    arrowRight: <ArrowRightSolid className={className} {...props} />,
    email: <EnvelopeIcon className={className} {...props} />,
    phone: <PhoneIcon className={className} {...props} />,
    website: <GlobeAltIcon className={className} {...props} />,
    facebook: (
      <svg
        className={className}
        {...props}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
      </svg>
    ),
    twitter: (
      <svg
        className={className}
        {...props}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M23.954 4.569a10 10 0 01-2.825.775 4.932 4.932 0 002.163-2.724 9.864 9.864 0 01-3.127 1.195 4.917 4.917 0 00-8.38 4.482 13.94 13.94 0 01-10.11-5.13 4.822 4.822 0 001.523 6.573 4.897 4.897 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.867 9.867 0 010 21.54a13.94 13.94 0 007.548 2.209c9.058 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.015-.636A10.012 10.012 0 0024 4.59z" />
      </svg>
    ),
    instagram: (
      <svg
        className={className}
        {...props}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2.5a1 1 0 110 2 1 1 0 010-2zm-4.25 1.5a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z" />
      </svg>
    ),
    line: (
      <svg
        className={className}
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17 3H7a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4z" />
        <path d="M8 12h8M8 16h5M8 8h8" />
      </svg>
    ),
    youtube: (
      <svg
        className={className}
        {...props}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M23.498 6.186a2.953 2.953 0 00-2.08-2.083C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.418.603a2.954 2.954 0 00-2.08 2.083 30.127 30.127 0 000 5.628 2.953 2.953 0 002.08 2.083C4.47 14.5 12 14.5 12 14.5s7.53 0 9.418-.603a2.953 2.953 0 002.08-2.083 30.127 30.127 0 000-5.628zM10 14.5v-5l4.5 2.5-4.5 2.5z" />
      </svg>
    ),
    linkedin: (
      <svg
        className={className}
        {...props}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4.98 3.5C3.33 3.5 2 4.84 2 6.49c0 1.63 1.27 2.97 2.95 2.97h.03c1.7 0 3-1.33 3-2.97-.03-1.65-1.3-2.98-3-2.98zM2.4 8.92H7.6v12.58H2.4V8.92zM9.95 8.92h4.53v1.7h.06c.63-1.2 2.18-2.46 4.5-2.46 4.8 0 5.7 3.15 5.7 7.24v8.1h-5.2v-7.18c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.76 1.87-2.76 3.8v7.32H9.95V8.92z" />
      </svg>
    ),
    checkCircle: (
      <svg
        className={className}
        {...props}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9 16.172l-3.95-3.95-1.414 1.414L9 19 20.364 7.636l-1.414-1.414z" />
      </svg>
    ),
  };

  const icon = iconMap[name];

  if (!icon) return null;

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label || name}
      className="inline-block"
    >
      {icon}
    </a>
  ) : (
    icon
  );
};

export default Icon;