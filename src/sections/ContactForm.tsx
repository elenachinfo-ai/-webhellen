import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    if (!section || !form) return;
    const tl = gsap.timeline({ scrollTrigger: { trigger: section, start: 'top 75%' } });
    tl.fromTo(form, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' });
    return () => { tl.kill(); };
  }, []);

  const formatPhone = (value: string) => {
    const d = value.replace(/\D/g, '').slice(0, 11);
    let f = '+7';
    if (d.length > 1) f += ' (' + d.slice(1, 4);
    if (d.length > 4) f += ') ' + d.slice(4, 7);
    if (d.length > 7) f += '-' + d.slice(7, 9);
    if (d.length > 9) f += '-' + d.slice(9, 11);
    return f;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, '').length < 11) return;
    setSubmitted(true);
  };

  if (!contactConfig.title && !contactConfig.buttonText) return null;

  const inputStyle = {
    width: '100%' as const,
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 0,
    padding: '1rem 1.2rem',
    fontFamily: 'var(--font-sans)',
    fontSize: '15px',
    fontWeight: 300,
    color: '#fff',
    outline: 'none',
    transition: 'border-color 0.3s ease, background 0.3s ease',
    caretColor: '#f25b29',
  };

  return (
    <section id="contact" ref={sectionRef} style={{ background: '#0a0a0b', padding: 'clamp(4rem, 10vw, 12rem) var(--page-padding)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 'min(600px,80vw)', height: 'min(600px,80vw)', background: 'radial-gradient(circle, rgba(242,91,41,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div ref={formRef} className="mx-auto" style={{ maxWidth: 520, opacity: 0 }}>
        {contactConfig.sectionLabel && (
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <div className="section-label">{contactConfig.sectionLabel}</div>
          </div>
        )}
        {contactConfig.title && (
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', textAlign: 'center', marginBottom: '0.75rem', whiteSpace: 'pre-line' }}>
            {contactConfig.title}
          </h2>
        )}
        {contactConfig.subtitle && (
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 300, color: '#7a7c7f', textAlign: 'center', marginBottom: '3rem' }}>
            {contactConfig.subtitle}
          </p>
        )}
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text" value={name} onChange={(e) => setName(e.target.value)}
                placeholder={contactConfig.namePlaceholder} required
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(242,91,41,0.5)'; e.target.style.background = 'rgba(255,255,255,0.05)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.background = 'rgba(255,255,255,0.03)'; }}
              />
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <input
                type="tel" value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))}
                placeholder={contactConfig.phonePlaceholder} required
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(242,91,41,0.5)'; e.target.style.background = 'rgba(255,255,255,0.05)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.background = 'rgba(255,255,255,0.03)'; }}
              />
            </div>
            <button
              type="submit"
              className="group relative overflow-hidden"
              style={{
                width: '100%', background: 'transparent', border: '1px solid rgba(242,91,41,0.5)',
                padding: '1.1rem 2rem', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 400,
                textTransform: 'uppercase', letterSpacing: '0.2em', color: '#f25b29',
                cursor: 'pointer', transition: 'all 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f25b29';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.letterSpacing = '0.3em';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#f25b29';
                e.currentTarget.style.letterSpacing = '0.2em';
              }}
            >
              {contactConfig.buttonText} <span className="inline-block ml-2">&rarr;</span>
            </button>
          </form>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 2rem', border: '1px solid rgba(242,91,41,0.3)', background: 'rgba(242,91,41,0.05)' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f25b29" strokeWidth="1.2" style={{ margin: '0 auto 1.5rem', display: 'block' }}>
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 300, color: '#b0b2b5', lineHeight: 1.6 }}>
              {contactConfig.successMessage}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
