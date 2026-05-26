import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 85%' } });
    tl.fromTo(el, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
    return () => { tl.kill(); };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: '#0a0a0b',
        padding: '0 var(--page-padding) clamp(3rem, 8vw, 8rem)',
      }}
    >
      <a
        href="#contact"
        className="group block"
        style={{
          width: '100%',
          background: '#f25b29',
          color: '#ffffff',
          textAlign: 'center',
          padding: 'clamp(1rem, 3vw, 1.4rem) 2rem',
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(12px, 2vw, 14px)',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.25em',
          textDecoration: 'none',
          display: 'block',
          transition: 'letter-spacing 0.35s ease, background 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.letterSpacing = '0.4em';
          e.currentTarget.style.background = '#d14a1f';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.letterSpacing = '0.25em';
          e.currentTarget.style.background = '#f25b29';
        }}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Записаться на консультацию &rarr;
      </a>
    </div>
  );
}
