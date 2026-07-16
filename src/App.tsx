import React from 'react';
import { InquiryProvider } from './context/InquiryContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Collections } from './components/Collections';
import { VideoBanner } from './components/VideoBanner';
import { About } from './components/About';
import { GlobalPresence } from './components/GlobalPresence';
import { Footer } from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <InquiryProvider>
      <div id="app-root" className="min-h-screen bg-[#FAF8F5] text-[#2C2623] font-sans overflow-x-hidden selection:bg-[#8F533C] selection:text-white">
        
        {/* Navigation bar with floating RFQ badge */}
        <Navbar />

        {/* Master visual sections */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Editorial Loom Banner Section */}
          <Hero />

          {/* Why Global Buyers Choose TanshU */}
          <WhyChooseUs />

          {/* Interactive Catalog and Bespoke Thread Visualizer */}
          <Collections />

          {/* High Fidelity Video / Story Banner */}
          <VideoBanner />

          {/* Core Handloom & Weaver Narrative (The Heart Behind Every Piece) */}
          <About />

          {/* Interactive World Map Trade Logistics Pins */}
          <GlobalPresence />
        </motion.main>

        {/* Editorial Footnotes and Contacts */}
        <Footer />

      </div>
    </InquiryProvider>
  );
}
