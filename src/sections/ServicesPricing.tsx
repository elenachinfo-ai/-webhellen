import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const list = listRef.current;
    if (!section || !list) return;

    const tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: 'top 75%' },
    });

    tl.fromTo(list, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });

    const rows = list.querySelectorAll('.service-row');
    tl.fromTo(rows, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', stagger: 0.1 }, '-=0.4');

    return () => { tl.kill(); };
  }, []);

  if (servicesConfig.items.length === 0) return null;


  return (
    <section id="services" ref={sectionRef} style={{ background: '#0a0a0b', padding: 'clamp(4rem, 10vw, 10rem) var(--page-padding)' }}>
      <div className="mx-auto" style={{ maxWidth: 700, opacity: 0 }} ref={listRef}>
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
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 300, color: '#7a7c7f', textAlign: 'center', marginBottom: '3rem', letterSpacing: '0.05em' }}>
            {servicesConfig.subtitle}
          </p>
        )}

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem 0' }}>
          {servicesConfig.items.map((item, i) => (
            <div key={i} className="service-row flex items-baseline justify-between" style={{ padding: '1rem 0' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(14px, 2vw, 17px)', fontWeight: 300, color: '#c0c0c4', letterSpacing: '0.03em', position: 'relative', paddingRight: '0.5rem', background: '#0a0a0b', zIndex: 1 }}>
                {item.name}
              </span>
              <span style={{ flex: 1, height: '1px', background: 'repeating-linear-gradient(to right, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 4px)', margin: '0 1rem', alignSelf: 'center', minWidth: '2rem' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(12px, 1.5vw, 14px)', fontWeight: 400, color: '#f25b29', letterSpacing: '0.08em', whiteSpace: 'nowrap', background: '#0a0a0b', paddingLeft: '0.5rem', zIndex: 1 }}>
                от {item.price}
              </span>
            </div>
          ))}
        </div>

        {servicesConfig.footnote && (
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 300, color: '#555', textAlign: 'center', marginTop: '1.5rem', fontStyle: 'italic' }}>
            {servicesConfig.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
