'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Building2, Heart, Gavel, Briefcase, Home, Shield, ArrowRight } from 'lucide-react';

export default function Areas() {
  const { t } = useLanguage();

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
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent)',
            letterSpacing: '0.2em', display: 'block', marginBottom: '1rem',
          }}>{t('areas_tag')}</span>
          <div className="gold-line-center" style={{ marginBottom: '1.5rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '1rem',
          }}>{t('areas_title')}</h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text-secondary)',
            maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300,
          }}>{t('areas_subtitle')}</p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.25rem',
        }}>
          {areas.map((area, i) => (
            <div key={i} className="card-elegant" style={{
              padding: '2rem', display: 'flex', flexDirection: 'column', cursor: 'pointer',
            }}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
