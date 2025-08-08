import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-4rem)] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;