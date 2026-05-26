import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const tl = gsap.timeline({ scrollTrigger: { trigger: section, start: 'top 75%' } });
    const items = cards.querySelectorAll('.pricing-card');
    tl.fromTo(items, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.15 });
    return () => { tl.kill(); };
  }, []);

  if (servicesConfig.cards.length === 0) return null;

  return (
    <section id="services" ref={sectionRef} style={{ background: '#0a0a0b', padding: 'clamp(4rem, 10vw, 10rem) var(--page-padding)' }}>
      <div className="mx-auto" style={{ maxWidth: 1100 }} ref={cardsRef}>
        {servicesConfig.sectionLabel && (
          <div className="text-center" style={{ marginBottom: '1rem' }}>
            <div className="section-label">{servicesConfig.sectionLabel}</div>
          </div>
        )}
        {servicesConfig.title && (
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', textAlign: 'center', marginBottom: '0.5rem' }}>
            {servicesConfig.title}
          </h2>
        )}
        {servicesConfig.subtitle && (
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 300, color: '#7a7c7f', textAlign: 'center', marginBottom: '3rem' }}>
            {servicesConfig.subtitle}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {servicesConfig.cards.map((card, i) => (
            <div
              key={i}
              className="pricing-card group"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: card.highlight ? '1px solid rgba(242,91,41,0.35)' : '1px solid rgba(255,255,255,0.07)',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                position: 'relative',
                transition: 'border-color 0.4s ease, background 0.4s ease',
                opacity: 0,
              }}
            >
              {/* Popular badge */}
              {card.highlight && (
                <div style={{
                  position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)',
                  background: '#f25b29', color: '#fff',
                  fontFamily: 'var(--font-sans)', fontSize: 9, fontWeight: 500,
                  textTransform: 'uppercase', letterSpacing: '0.15em',
                  padding: '4px 16px', whiteSpace: 'nowrap',
                }}>
                  {card.highlight}
                </div>
              )}

              {/* Tag */}
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 400,
                textTransform: 'uppercase', letterSpacing: '0.12em',
                color: '#f25b29', marginBottom: '1rem',
              }}>
                {card.tag}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
              }}>
                {card.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 300,
                color: '#7a7c7f', lineHeight: 1.6, marginBottom: '1.5rem',
                minHeight: '2.5rem',
              }}>
                {card.description}
              </p>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1.25rem' }} />

              {/* Service items */}
              <div className="flex flex-col gap-3">
                {card.items.map((item, j) => (
                  <div key={j} className="flex items-baseline justify-between">
                    <span style={{
                      fontFamily: 'var(--font-sans)', fontSize: 'clamp(12px, 1.5vw, 14px)',
                      fontWeight: 300, color: '#b0b2b5', letterSpacing: '0.02em',
                    }}>
                      {item.name}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 'clamp(11px, 1.3vw, 13px)',
                      fontWeight: 400, color: '#fff', letterSpacing: '0.05em',
                      whiteSpace: 'nowrap', marginLeft: '1rem',
                    }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {servicesConfig.footnote && (
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 300, color: '#555', textAlign: 'center', marginTop: '2rem', fontStyle: 'italic' }}>
            {servicesConfig.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
