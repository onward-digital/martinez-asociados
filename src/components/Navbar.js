'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, Globe, Scale } from 'lucide-react';

export default function Navbar() {
  const { lang, t, toggleLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Scroll → solid bg
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer → active section
  useEffect(() => {
    const sections = ['inicio', 'areas', 'equipo', 'testimonios', 'contacto'];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const links = [
    { href: '#inicio', label: t('nav_inicio'), id: 'inicio' },
    { href: '#areas', label: t('nav_areas'), id: 'areas' },
    { href: '#equipo', label: t('nav_equipo'), id: 'equipo' },
    { href: '#testimonios', label: t('nav_testimonios'), id: 'testimonios' },
    { href: '#contacto', label: t('nav_contacto'), id: 'contacto' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '0.6rem 1.5rem' : '1.1rem 1.5rem',
      background: scrolled ? 'rgba(12, 15, 20, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201, 169, 110, 0.1)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#inicio" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Scale size={28} style={{ color: 'var(--color-accent)' }} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--color-text)', lineHeight: 1.1 }}>
              Martínez <span style={{ color: 'var(--color-accent)' }}>&</span> Asociados
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--color-text-secondary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              {lang === 'es' ? 'Abogados' : 'Attorneys at Law'}
            </div>
          </div>
        </a>

        {/* Desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 500,
                  transition: 'color 0.3s', letterSpacing: '0.02em',
                  position: 'relative', paddingBottom: '2px',
                }}
                className="nav-link"
              >{link.label}</a>
            );
          })}
          <button onClick={toggleLang} style={{
            display: 'flex', alignItems: 'center', gap: '0.35rem',
            background: 'transparent', border: '1px solid var(--color-border)',
            borderRadius: '4px', padding: '0.35rem 0.7rem',
            color: 'var(--color-text-secondary)', cursor: 'pointer',
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem', transition: 'all 0.3s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
          >
            <Globe size={13} />{lang === 'es' ? 'EN' : 'ES'}
          </button>
          <a href="#contacto" className="btn-gold" style={{ padding: '0.55rem 1.5rem', fontSize: '0.8rem' }}>
            {t('nav_cta')}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer' }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(12, 15, 20, 0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--color-border)', padding: '1.5rem',
          display: 'flex', flexDirection: 'column', gap: '1rem',
        }} className="md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}
              style={{
                textDecoration: 'none',
                color: activeSection === link.id ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                fontFamily: 'var(--font-body)', fontSize: '1rem', padding: '0.5rem 0',
                transition: 'color 0.3s',
              }}>
              {link.label}
            </a>
          ))}
          <button onClick={() => { toggleLang(); setIsOpen(false); }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: 'none', color: 'var(--color-accent)', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', padding: '0.5rem 0' }}>
            <Globe size={16} />{lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          </button>
        </div>
      )}
    </nav>
  );
}
