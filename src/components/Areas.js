'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Building2, Heart, Gavel, Briefcase, Home, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollReveal, fadeInUp, fadeIn, staggerContainer } from '@/hooks/useScrollAnimation';

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Areas() {
  const { t } = useLanguage();
  const { ref: headerRef, inView: headerInView } = useScrollReveal();
  const { ref: gridRef, inView: gridInView } = useScrollReveal();

  const areas = [
    { icon: <Building2 size={26} />, name: t('area_1_name'), desc: t('area_1_desc') },
    { icon: <Heart size={26} />, name: t('area_2_name'), desc: t('area_2_desc') },
    { icon: <Gavel size={26} />, name: t('area_3_name'), desc: t('area_3_desc') },
    { icon: <Briefcase size={26} />, name: t('area_4_name'), desc: t('area_4_desc') },
    { icon: <Home size={26} />, name: t('area_5_name'), desc: t('area_5_desc') },
    { icon: <Shield size={26} />, name: t('area_6_name'), desc: t('area_6_desc') },
  ];

  return (
    <section id="areas" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.span variants={fadeIn} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent)',
            letterSpacing: '0.2em', display: 'block', marginBottom: '1rem',
          }}>{t('areas_tag')}</motion.span>
          <motion.div variants={fadeIn} className="gold-line-center" style={{ marginBottom: '1.5rem' }} />
          <motion.h2 variants={fadeInUp} style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '1rem',
          }}>{t('areas_title')}</motion.h2>
          <motion.p variants={fadeInUp} style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text-secondary)',
            maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300,
          }}>{t('areas_subtitle')}</motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {areas.map((area, i) => (
            <AreaCard key={i} area={area} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AreaCard({ area, t }) {
  return (
    <motion.div
      variants={cardVariant}
      data-cursor="card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        padding: '2rem',
        display: 'flex', flexDirection: 'column', cursor: 'pointer',
        position: 'relative', overflow: 'hidden',
      }}
      className="area-card"
    >
      {/* Gold top border that expands on hover */}
      <div className="area-card-top-line" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'var(--color-accent)', transformOrigin: 'left',
        transform: 'scaleX(0)',
        transition: 'transform 0.45s ease',
      }} />

      <div style={{
        width: '52px', height: '52px', borderRadius: '8px',
        background: 'var(--color-accent-glow)', border: '1px solid rgba(201,169,110,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--color-accent)', marginBottom: '1.25rem',
      }}>{area.icon}</div>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 600,
        fontSize: '1.2rem', marginBottom: '0.75rem',
      }}>{area.name}</h3>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '0.9rem',
        color: 'var(--color-text-secondary)', lineHeight: 1.7,
        marginBottom: '1.5rem', flex: 1, fontWeight: 300,
      }}>{area.desc}</p>
      <a href="#contacto" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.85rem',
        color: 'var(--color-accent)', textDecoration: 'none', transition: 'gap 0.3s',
      }}
        onMouseEnter={(e) => e.currentTarget.style.gap = '0.7rem'}
        onMouseLeave={(e) => e.currentTarget.style.gap = '0.4rem'}
      >{t('area_cta')} <ArrowRight size={15} /></a>
    </motion.div>
  );
}
