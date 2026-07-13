import React from 'react';
import { InquiryProvider } from './context/InquiryContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Collections } from './components/Collections';
import { TrustStats } from './components/TrustStats';
import { Certifications } from './components/Certifications';
import { VideoBanner } from './components/VideoBanner';
import { About } from './components/About';
import { GlobalPresence } from './components/GlobalPresence';
import { B2BPortal } from './components/B2BPortal';
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

          {/* Trust and Capability Badges */}
          <TrustStats />

          {/* Certifications (Exact mockup location) */}
          <Certifications />

          {/* High Fidelity Video / Story Banner */}
          <VideoBanner />

          {/* Core Handloom & Weaver Narrative (The Heart Behind Every Piece) */}
          <About />

          {/* Centered Editorial Headline */}
          <div className="pt-24 pb-8 bg-[#FAF8F5] flex flex-col items-center justify-center text-center px-6">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2C2623] font-bold tracking-tight max-w-4xl leading-tight">
              Defined by detail. Driven by excellence.
            </h3>
            <div className="mt-6 h-0.5 w-16 bg-[#8F533C]/40" />
          </div>

          {/* Interactive World Map Trade Logistics Pins */}
          <GlobalPresence />

          {/* B2B RFQ Form and Meeting Dispatch Panel */}
          <B2BPortal />
        </motion.main>

        {/* Editorial Footnotes and Contacts */}
        <Footer />

      </div>
    </InquiryProvider>
  );
}
