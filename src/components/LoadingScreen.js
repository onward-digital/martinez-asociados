'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LETTERS = 'Martínez & Asociados'.split('');

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState('typing'); // typing | reveal

  useEffect(() => {
    // After 2.2s start the curtain reveal
    const t1 = setTimeout(() => setPhase('reveal'), 2200);
    // After reveal animation (0.7s), notify parent
    const t2 = setTimeout(() => onComplete?.(), 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: '#0c0f14',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '1.5rem',
          }}
        >
          {/* Curtain overlay that slides up */}
          <motion.div
            initial={{ y: 0 }}
            animate={phase === 'reveal' ? { y: '-100%' } : { y: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'absolute', inset: 0,
              background: '#0c0f14',
              zIndex: 2,
              transformOrigin: 'top',
            }}
          />

          {/* Text & line — behind curtain */}
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            {/* Letter-by-letter title */}
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
              fontWeight: 700,
              color: '#c9a96e',
              letterSpacing: '0.04em',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              {LETTERS.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.05,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>

            {/* Expanding gold line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #c9a96e, transparent)',
                transformOrigin: 'center',
                marginTop: '1rem',
                width: '260px',
                margin: '1rem auto 0',
              }}
            />

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: 'rgba(201, 169, 110, 0.55)',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                marginTop: '0.75rem',
              }}
            >
              Estudio Jurídico · Desde 1998
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
