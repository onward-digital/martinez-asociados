'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Scale, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{
      background: 'var(--color-bg-secondary)',
      borderTop: '1px solid var(--color-border)',
      padding: '4rem 1.5rem 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem', marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <Scale size={22} style={{ color: 'var(--color-accent)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem' }}>
                Martínez <span style={{ color: 'var(--color-accent)' }}>&</span> Asociados
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.85rem',
              color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '280px', fontWeight: 300,
            }}>{t('footer_desc')}</p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
              {t('footer_links')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { href: '#areas', label: t('nav_areas') },
                { href: '#equipo', label: t('nav_equipo') },
                { href: '#testimonios', label: t('nav_testimonios') },
                { href: '#contacto', label: t('nav_contacto') },
              ].map((link) => (
                <a key={link.href} href={link.href} style={{
                  textDecoration: 'none', color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                  transition: 'color 0.3s', fontWeight: 300,
                }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                >{link.label}</a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
              {t('footer_legal')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href="#" style={{ textDecoration: 'none', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', transition: 'color 0.3s', fontWeight: 300 }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
              >{t('footer_privacy')}</a>
              <a href="#" style={{ textDecoration: 'none', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', transition: 'color 0.3s', fontWeight: 300 }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
              >{t('footer_terms')}</a>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem' }}>
              {[<Linkedin size={16} />, <Twitter size={16} />].map((icon, i) => (
                <a key={i} href="#" style={{
                  width: '36px', height: '36px', borderRadius: '6px',
                  border: '1px solid var(--color-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'all 0.3s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
                >{icon}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontWeight: 300 }}>
            © {new Date().getFullYear()} Martínez & Asociados. {t('footer_rights')}
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-border-hover)' }}>
            Powered by Onward Digital
          </span>
        </div>
      </div>
    </footer>
  );
}
