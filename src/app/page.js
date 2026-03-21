'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Areas from '@/components/Areas';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="grain">
      <Navbar />
      <Hero />
      <Areas />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
