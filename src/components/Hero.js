'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  const stats = [
    { num: t('hero_stat_1_num'), label: t('hero_stat_1_label') },
    { num: t('hero_stat_2_num'), label: t('hero_stat_2_label') },
    { num: t('hero_stat_3_num'), label: t('hero_stat_3_label') },
    { num: t('hero_stat_4_num'), label: t('hero_stat_4_label') },
  ];

  return (
    <section id="inicio" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '8rem 1.5rem 4rem',
    }}>
      {/* Background elements */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(201, 169, 110, 0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '10%', right: '5%', width: '400px', height: '400px',
        border: '1px solid rgba(201, 169, 110, 0.06)', borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '15%', right: '8%', width: '300px', height: '300px',
        border: '1px solid rgba(201, 169, 110, 0.04)', borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        {/* Tag */}
        <div className="animate-fade-in-up" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          marginBottom: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
          color: 'var(--color-accent)', letterSpacing: '0.2em',
        }}>
          <div className="gold-line" />
          {t('hero_tag')}
        </div>

        {/* Title */}
        <h1 className="animate-fade-in-up delay-100" style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(2.5rem, 6.5vw, 4.5rem)', lineHeight: 1.1,
          marginBottom: '1.75rem', opacity: 0,
        }}>
          {t('hero_title_1')}<br />
          <span className="gradient-gold" style={{ fontStyle: 'italic' }}>{t('hero_title_2')}</span><br />
          {t('hero_title_3')}
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-200" style={{
          fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
          color: 'var(--color-text-secondary)', maxWidth: '550px',
          lineHeight: 1.8, marginBottom: '2.5rem', opacity: 0, fontWeight: 300,
        }}>
          {t('hero_subtitle')}
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-300" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '5rem', opacity: 0 }}>
          <a href="#contacto" className="btn-gold">
            {t('hero_cta')} <ArrowRight size={18} />
          </a>
          <a href="#equipo" className="btn-outline">
            {t('hero_cta2')}
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up delay-400" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '2rem', padding: '2rem 0', borderTop: '1px solid var(--color-border)', opacity: 0,
        }}>
          {stats.map((stat, i) => (
            <div key={i}>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--color-accent)',
              }}>{stat.num}</div>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                color: 'var(--color-text-secondary)', marginTop: '0.25rem', fontWeight: 400,
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <div className="animate-fade-in delay-700" style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        color: 'var(--color-text-secondary)', opacity: 0,
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em' }}>SCROLL</span>
        <ChevronDown size={16} style={{ animation: 'fadeInUp 1.5s ease-in-out infinite' }} />
      </div>
    </section>
  );
}
