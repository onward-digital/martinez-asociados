'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Send, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Consultation request sent! (Demo)');
  };

  const inputStyle = {
    width: '100%', padding: '0.85rem 1rem',
    background: 'var(--color-bg)', border: '1px solid var(--color-border)',
    borderRadius: '4px', color: 'var(--color-text)',
    fontFamily: 'var(--font-body)', fontSize: '0.9rem', outline: 'none',
    transition: 'border-color 0.3s',
  };

  return (
    <section id="contacto" className="section-padding">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent)',
            letterSpacing: '0.2em', display: 'block', marginBottom: '1rem',
          }}>{t('contact_tag')}</span>
          <div className="gold-line-center" style={{ marginBottom: '1.5rem' }} />
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '1rem',
          }}>{t('contact_title')}</h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text-secondary)',
            maxWidth: '500px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300,
          }}>{t('contact_subtitle')}</p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
        }}>
          {/* Form */}
          <div style={{
            background: 'var(--color-bg-card)', borderRadius: '12px',
            padding: '2.5rem', border: '1px solid var(--color-border)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                  {t('contact_name')}
                </label>
                <input type="text" style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                    {t('contact_email')}
                  </label>
                  <input type="email" style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'} />
                </div>
                <div>
                  <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                    {t('contact_phone')}
                  </label>
                  <input type="tel" style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'} />
                </div>
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                  {t('contact_area')}
                </label>
                <select style={{ ...inputStyle, color: 'var(--color-text-secondary)', cursor: 'pointer' }}>
                  <option>{t('contact_area_option1')}</option>
                  <option>{t('contact_area_option2')}</option>
                  <option>{t('contact_area_option3')}</option>
                  <option>{t('contact_area_option4')}</option>
                  <option>{t('contact_area_option5')}</option>
                  <option>{t('contact_area_option6')}</option>
                  <option>{t('contact_area_option7')}</option>
                </select>
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                  {t('contact_message')}
                </label>
                <textarea rows={4} style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'} />
              </div>

              <button onClick={handleSubmit} className="btn-gold" style={{ justifyContent: 'center', width: '100%', marginTop: '0.5rem' }}>
                {t('contact_send')} <Send size={16} />
              </button>

              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                color: 'var(--color-text-secondary)', marginTop: '0.25rem',
              }}>
                <ShieldCheck size={14} style={{ color: 'var(--color-accent)' }} />
                {t('contact_privacy')}
              </div>
            </div>
          </div>

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2.25rem' }}>
            {[
              { icon: <MapPin size={20} />, label: t('contact_address_label'), value: t('contact_address') },
              { icon: <Phone size={20} />, label: t('contact_phone_label'), value: t('contact_phone_value') },
              { icon: <Mail size={20} />, label: t('contact_email_label'), value: t('contact_email_value') },
              { icon: <Clock size={20} />, label: t('contact_hours_label'), value: t('contact_hours_value') },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '46px', height: '46px', borderRadius: '8px',
                  background: 'var(--color-accent-glow)',
                  border: '1px solid rgba(201,169,110,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-accent)', flexShrink: 0,
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginBottom: '0.3rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.95rem', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
