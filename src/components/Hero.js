'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer } from '@/hooks/useScrollAnimation';

// ─── Animated Counter ────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target, 10);
    if (isNaN(num)) { setCount(target); return; }
    let start = 0;
    const fps = 60;
    const increment = num / (duration * fps);
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 1000 / fps);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  // Parallax for decorative circles
  const circle1Y = useTransform(scrollY, [0, 500], [0, -80]);
  const circle2Y = useTransform(scrollY, [0, 500], [0, -40]);
  const bgY = useTransform(scrollY, [0, 500], [0, -25]);

  // Stats: parse num + suffix
  const statsRaw = [
    { raw: t('hero_stat_1_num'), label: t('hero_stat_1_label') },
    { raw: t('hero_stat_2_num'), label: t('hero_stat_2_label') },
    { raw: t('hero_stat_3_num'), label: t('hero_stat_3_label') },
    { raw: t('hero_stat_4_num'), label: t('hero_stat_4_label') },
  ].map((s) => {
    const match = s.raw.match(/^(\d+)(.*)$/);
    return match
      ? { num: match[1], suffix: match[2], label: s.label }
      : { num: s.raw, suffix: '', label: s.label };
  });

  return (
    <section id="inicio" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '8rem 1.5rem 4rem',
    }}>
      {/* Background gradient — parallax */}
      <motion.div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(201, 169, 110, 0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
        y: bgY,
      }} />

      {/* Circle 1 — parallax */}
      <motion.div style={{
        position: 'absolute', top: '10%', right: '5%', width: '400px', height: '400px',
        border: '1px solid rgba(201, 169, 110, 0.06)', borderRadius: '50%',
        pointerEvents: 'none',
        y: circle1Y,
      }} />

      {/* Circle 2 — parallax */}
      <motion.div style={{
        position: 'absolute', top: '15%', right: '8%', width: '300px', height: '300px',
        border: '1px solid rgba(201, 169, 110, 0.04)', borderRadius: '50%',
        pointerEvents: 'none',
        y: circle2Y,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Tag */}
          <motion.div variants={fadeInUp} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            marginBottom: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
            color: 'var(--color-accent)', letterSpacing: '0.2em',
          }}>
            {/* Animated gold line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: '50px', height: '2px',
                background: 'linear-gradient(90deg, var(--color-accent), transparent)',
                transformOrigin: 'left',
              }}
            />
            {t('hero_tag')}
          </motion.div>

          {/* Title */}
          <motion.h1 variants={fadeInUp} style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(2.5rem, 6.5vw, 4.5rem)', lineHeight: 1.1,
            marginBottom: '1.75rem',
          }}>
            {t('hero_title_1')}<br />
            <span className="gradient-gold" style={{ fontStyle: 'italic' }}>{t('hero_title_2')}</span><br />
            {t('hero_title_3')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeInUp} style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            color: 'var(--color-text-secondary)', maxWidth: '550px',
            lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300,
          }}>
            {t('hero_subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
            <motion.a
              href="#contacto"
              className="btn-gold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('hero_cta')} <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#equipo"
              className="btn-outline"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('hero_cta2')}
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '2rem', padding: '2rem 0', borderTop: '1px solid var(--color-border)',
            }}
          >
            {statsRaw.map((stat, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--color-accent)',
                }}>
                  <AnimatedCounter target={stat.num} suffix={stat.suffix} duration={2} />
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                  color: 'var(--color-text-secondary)', marginTop: '0.25rem', fontWeight: 400,
                }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          color: 'var(--color-text-secondary)',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
