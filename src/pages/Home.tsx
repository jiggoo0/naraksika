import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import AddonsSection from "../components/Services/AddonsSection";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import FAQ from "../components/Contact/FAQ";
import Layout from "../components/Layout/Layout";

const Home: React.FC = () => {
  const [selectedAddons, setSelectedAddons] = React.useState<Set<string>>(new Set());

  const handleAddonSelect = (id: string, selected: boolean) => {
    setSelectedAddons((prev) => {
      const newSet = new Set(prev);
      if (selected) newSet.add(id);
      else newSet.delete(id);
      return newSet;
    });
  };

  return (
    <Layout>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="addons">
        <AddonsSection onSelect={handleAddonSelect} />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
};

export default Home;