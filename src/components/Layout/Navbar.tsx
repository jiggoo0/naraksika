import React, { useState, useCallback } from "react";

const navItems = [
  { id: "hero", label: "หน้าแรก" },
  { id: "about", label: "เกี่ยวกับ" },
  { id: "services", label: "บริการ" },
  { id: "portfolio", label: "ผลงาน" },
  { id: "contact", label: "ติดต่อ" },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }, []);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <h1
            className="text-2xl font-extrabold text-primary cursor-pointer select-none"
            onClick={() => handleNavClick("hero")}
            tabIndex={0}
            role="link"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleNavClick("hero");
            }}
            aria-label="กลับสู่หน้าแรก"
          >
            Dev Baan Baan
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-neutral-800 font-medium">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className="hover:text-primary transition-colors rounded focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="เปิดเมนูมือถือ"
            aria-expanded={mobileOpen}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow animate-fadeIn">
          <ul className="flex flex-col px-4 py-3 space-y-2 text-neutral-800 font-medium">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className="w-full text-left px-3 py-2 rounded hover:bg-primary hover:text-white transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
