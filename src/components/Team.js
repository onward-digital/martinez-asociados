'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Team() {
  const { t } = useLanguage();

  const team = [
    {
      name: t('team_1_name'), role: t('team_1_role'), spec: t('team_1_spec'),
      initials: 'RM', color: '#c9a96e',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: t('team_2_name'), role: t('team_2_role'), spec: t('team_2_spec'),
      initials: 'CV', color: '#818cf8',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: t('team_3_name'), role: t('team_3_role'), spec: t('team_3_spec'),
      initials: 'AR', color: '#34d399',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: t('team_4_name'), role: t('team_4_role'), spec: t('team_4_spec'),
      initials: 'VT', color: '#f472b6',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
    },
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
            <TeamCard key={i} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="card-elegant" style={{
      padding: '2.25rem 1.75rem', textAlign: 'center',
    }}>
      {/* Avatar with photo */}
      <div style={{
        width: '100px', height: '100px', borderRadius: '50%',
        border: `2px solid ${member.color}40`,
        margin: '0 auto 1.5rem',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${member.color}20, ${member.color}08)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: `0 8px 25px ${member.color}15`,
      }}>
        {!imgError ? (
          <img
            src={member.photo}
            alt={member.name}
            onError={() => setImgError(true)}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              filter: 'grayscale(30%) contrast(1.05)',
            }}
          />
        ) : (
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: '1.6rem', color: member.color,
          }}>{member.initials}</span>
        )}
      </div>

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
  );
}
