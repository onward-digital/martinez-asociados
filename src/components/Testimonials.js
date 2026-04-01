'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    { text: t('test_1_text'), name: t('test_1_name'), role: t('test_1_role'), initials: 'CM', color: '#c9a96e' },
    { text: t('test_2_text'), name: t('test_2_name'), role: t('test_2_role'), initials: 'MR', color: '#818cf8' },
    { text: t('test_3_text'), name: t('test_3_name'), role: t('test_3_role'), initials: 'RC', color: '#34d399' },
  ];

  return (
    <section id="testimonios" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent)',
            letterSpacing: '0.2em', display: 'block', marginBottom: '1rem',
          }}>{t('test_tag')}</span>
          <div className="gold-line-center" style={{ marginBottom: '1.5rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          }}>{t('test_title')}</h2>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {testimonials.map((item, i) => (
            <div key={i} className="card-elegant" style={{
              padding: '2.25rem', display: 'flex', flexDirection: 'column',
            }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '2px', marginBottom: '1.25rem' }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="var(--color-accent)" style={{ color: 'var(--color-accent)' }} />
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
                {/* Avatar */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
