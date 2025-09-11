import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  // Parallax effect
  const y = useMotionValue(0);
  const yParallax = useTransform(y, [0, 200], [0, -40]);
  const springY = useSpring(yParallax, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handleScroll = () => y.set(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [y]);

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      role="banner"
      aria-label="Dev Baan Baan Hero Section"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <motion.div
        style={{ y: springY }}
        className="absolute inset-0 z-0 will-change-transform"
        aria-hidden="true"
      >
        <picture>
          <source
            srcSet="/images/hero-bg@2x.webp 2x, /images/hero-bg.webp 1x"
            type="image/webp"
            media="(min-width: 768px)"
          />
          <img
            src="/images/hero-bg.webp"
            alt=""
            className="w-full h-full object-cover object-center brightness-[0.45]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary-dark/95 to-black/90" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-4xl px-6 sm:px-10 text-center drop-shadow-md"
      >
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-accent to-primary-dark bg-clip-text text-transparent">
            ยินดีต้อนรับสู่ Dev Baan Baan
          </span>
        </h1>

        <p className="mt-5 text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light whitespace-pre-line">
          ฟรีแลนซ์เดฟบ้าน ๆ ฝีมือไม่ธรรมดา ราคาจับต้องได้ เข้าถึงง่าย
          ใช้งานจริงได้แน่นอน
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToServices}
          className="mt-10 px-8 py-4 bg-accent hover:bg-accent/95 text-white text-lg font-semibold rounded-xl shadow-lg focus-visible:outline focus-visible:outline-white focus-visible:outline-offset-2 transition-all"
          aria-label="ไปยังบริการของเรา"
        >
          ดูบริการของเรา
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
