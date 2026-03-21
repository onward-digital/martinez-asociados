'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const { t } = useLanguage();

  const team = [
    { name: t('team_1_name'), role: t('team_1_role'), spec: t('team_1_spec'), initials: 'RM', color: '#c9a96e' },
    { name: t('team_2_name'), role: t('team_2_role'), spec: t('team_2_spec'), initials: 'CV', color: '#818cf8' },
    { name: t('team_3_name'), role: t('team_3_role'), spec: t('team_3_spec'), initials: 'AR', color: '#34d399' },
    { name: t('team_4_name'), role: t('team_4_role'), spec: t('team_4_spec'), initials: 'VT', color: '#f472b6' },
  ];

  return (
    <section id="equipo" className="section-padding">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent)',
            letterSpacing: '0.2em', display: 'block', marginBottom: '1rem',
          }}>{t('team_tag')}</span>
          <div className="gold-line-center" style={{ marginBottom: '1.5rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '1rem',
          }}>{t('team_title')}</h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text-secondary)',
            maxWidth: '550px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300,
          }}>{t('team_subtitle')}</p>
        </div>

        {/* Team Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}>
          {team.map((member, i) => (
            <div key={i} className="card-elegant" style={{
              padding: '2.25rem 1.75rem', textAlign: 'center',
            }}>
              {/* Avatar */}
              <div style={{
                width: '90px', height: '90px', borderRadius: '50%',
                background: `linear-gradient(135deg, ${member.color}20, ${member.color}08)`,
                border: `2px solid ${member.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '1.5rem', color: member.color,
              }}>{member.initials}</div>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 600,
                fontSize: '1.15rem', marginBottom: '0.35rem',
              }}>{member.name}</h3>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                color: 'var(--color-accent)', fontWeight: 500, marginBottom: '0.35rem',
              }}>{member.role}</div>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                color: 'var(--color-text-secondary)', marginBottom: '1.5rem', fontWeight: 300,
              }}>{member.spec}</div>

              {/* Social */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                {[<Linkedin size={16} />, <Mail size={16} />].map((icon, j) => (
                  <a key={j} href="#" style={{
                    width: '36px', height: '36px', borderRadius: '6px',
                    border: '1px solid var(--color-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--color-text-secondary)', textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
                  >{icon}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
