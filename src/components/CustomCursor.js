'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Dot follows exact position
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Ring lags behind with spring
  const springX = useSpring(cursorX, { stiffness: 280, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 280, damping: 28 });

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mq.matches) return;
    setIsDesktop(true);

    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnter = (e) => {
      const el = e.target;
      const interactive = el.closest('a, button, [data-cursor="pointer"]');
      const card = el.closest('[data-cursor="card"]');
      if (card) { setIsCard(true); setIsHovering(false); }
      else if (interactive) { setIsHovering(true); setIsCard(false); }
    };

    const onLeave = (e) => {
      const el = e.relatedTarget;
      if (!el) { setIsHovering(false); setIsCard(false); return; }
      const interactive = el.closest('a, button, [data-cursor="pointer"]');
      const card = el.closest('[data-cursor="card"]');
      if (!card) setIsCard(false);
      if (!interactive) setIsHovering(false);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
    };
  }, [cursorX, cursorY, dotX, dotY, visible]);

  if (!isDesktop) return null;

  const ringSize = isCard ? 50 : isHovering ? 45 : 30;
  const ringOpacity = isHovering || isCard ? 0.6 : 0.3;
  const ringRotate = isCard ? 15 : 0;

  return (
    <>
      {/* Dot — exact position */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          position: 'fixed',
          top: 0, left: 0,
          width: '5px', height: '5px',
          borderRadius: '50%',
          background: '#c9a96e',
          pointerEvents: 'none',
          zIndex: 99999,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
        }}
      />
      {/* Ring — spring-lagged */}
      <motion.div
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: visible ? ringOpacity : 0,
          rotate: ringRotate,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{
          x: springX,
          y: springY,
          position: 'fixed',
          top: 0, left: 0,
          borderRadius: '50%',
          border: '1px solid rgba(201, 169, 110, 0.6)',
          pointerEvents: 'none',
          zIndex: 99998,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
