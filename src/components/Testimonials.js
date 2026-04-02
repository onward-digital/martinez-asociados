'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollReveal, fadeInUp, fadeIn, staggerContainer } from '@/hooks/useScrollAnimation';

const cardVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const starVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.07, duration: 0.3, ease: 'easeOut' },
  }),
};

export default function Testimonials() {
  const { t } = useLanguage();
  const { ref: headerRef, inView: headerInView } = useScrollReveal();
  const { ref: gridRef, inView: gridInView } = useScrollReveal();

  const testimonials = [
    { text: t('test_1_text'), name: t('test_1_name'), role: t('test_1_role'), initials: 'CM', color: '#c9a96e' },
    { text: t('test_2_text'), name: t('test_2_name'), role: t('test_2_role'), initials: 'MR', color: '#818cf8' },
    { text: t('test_3_text'), name: t('test_3_name'), role: t('test_3_role'), initials: 'RC', color: '#34d399' },
  ];

  return (
    <section id="testimonios" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
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
          }}>{t('test_tag')}</motion.span>
          <motion.div variants={fadeIn} className="gold-line-center" style={{ marginBottom: '1.5rem' }} />
          <motion.h2 variants={fadeInUp} style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          }}>{t('test_title')}</motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
          className="testimonials-grid"
        >
          {testimonials.map((item, i) => (
            <TestimonialCard key={i} item={item} index={i} inView={gridInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ item, index, inView }) {
  return (
    <motion.div
      variants={cardVariant}
      data-cursor="card"
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        padding: '2.25rem', display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
        cursor: 'default',
      }}
      whileHover={{
        y: -5,
        borderColor: 'rgba(201,169,110,0.35)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
        transition: { duration: 0.35 },
      }}
    >
      {/* Gold top line on hover */}
      <div className="test-card-top-line" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'var(--color-accent)', transformOrigin: 'left',
        transform: 'scaleX(0)',
        transition: 'transform 0.45s ease',
      }} />

      {/* Stars — cascade */}
      <div style={{ display: 'flex', gap: '2px', marginBottom: '1.25rem' }}>
        {[...Array(5)].map((_, j) => (
          <motion.div
            key={j}
            custom={j}
            variants={starVariant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <Star size={14} fill="var(--color-accent)" style={{ color: 'var(--color-accent)' }} />
          </motion.div>
        ))}
      </div>

      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '0.95rem',
        color: 'var(--color-text-secondary)', lineHeight: 1.8,
        marginBottom: '1.75rem', flex: 1, fontWeight: 300, fontStyle: 'italic',
      }}>
        &ldquo;{item.text}&rdquo;
      </p>

      <div style={{
        borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem',
        display: 'flex', alignItems: 'center', gap: '1rem',
      }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '50%',
          background: `linear-gradient(135deg, ${item.color}25, ${item.color}10)`,
          border: `1.5px solid ${item.color}35`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: '0.85rem', color: item.color,
        }}>
          {item.initials}
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: '1rem', marginBottom: '0.2rem',
          }}>{item.name}</div>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: '0.8rem',
            color: 'var(--color-accent)', fontWeight: 400,
          }}>{item.role}</div>
        </div>
      </div>
    </motion.div>
  );
}
