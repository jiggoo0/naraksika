import { useEffect, useState } from "react";

export const useScrollPosition = (): number => {
  const [scrollY, setScrollY] = useState(() =>
    typeof window !== "undefined" ? window.scrollY : 0
  );

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    handleScroll(); // init

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};
