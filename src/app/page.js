'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Areas from '@/components/Areas';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';

// Elegant gold-line section divider
function GoldDivider() {
  return (
    <div style={{
      width: '100%', height: '1px',
      background: 'linear-gradient(90deg, transparent 5%, var(--color-accent) 30%, var(--color-accent) 70%, transparent 95%)',
      opacity: 0.18,
    }} />
  );
}

// Diamond divider — for Team → Testimonials and Testimonials → Contact
function DiamondDivider() {
  return (
    <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
      <span style={{
        display: 'inline-block', width: '8px', height: '8px',
        background: 'var(--color-accent)',
        transform: 'rotate(45deg)', opacity: 0.35,
      }} />
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <main className="grain" style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.4s ease' }}>
        <Navbar />
        <Hero />
        <GoldDivider />
        <Areas />
        <GoldDivider />
        <Team />
        <DiamondDivider />
        <Testimonials />
        <DiamondDivider />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
