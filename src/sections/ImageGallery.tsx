import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function ImageGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.gallery-card');
    const triggers: ScrollTrigger[] = [];

    cards.forEach((card) => {
      const anim = gsap.fromTo(
        card,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
      if (anim.scrollTrigger) {
        triggers.push(anim.scrollTrigger);
      }
    });

    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex]);

  if (galleryConfig.items.length === 0) return null;

  const selected = selectedIndex !== null ? galleryConfig.items[selectedIndex] : null;

  return (
    <>
      <section
        id="waves-gallery"
        ref={sectionRef}
        style={{
          background: '#0a0a0b',
          padding: '12rem var(--page-padding)',
        }}
      >
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          {galleryConfig.sectionLabel && (
            <div className="section-label" style={{ marginBottom: '2rem' }}>
              {galleryConfig.sectionLabel}
            </div>
          )}
          {galleryConfig.sectionTitle && (
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                color: '#ffffff',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
              }}
            >
              {galleryConfig.sectionTitle}
            </h2>
          )}
        </div>

        <div
          className="mx-auto grid grid-cols-2 md:grid-cols-3"
          style={{
            gap: '3vw',
            width: '90vw',
            maxWidth: '1400px',
          }}
        >
          {galleryConfig.items.map((item, i) => (
            <div
              key={i}
              className="gallery-card group"
              style={{ opacity: 0, cursor: 'pointer' }}
              onClick={() => setSelectedIndex(i)}
            >
              <div
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    display: 'block',
                  }}
                />
                {/* Hover overlay with icon */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out"
                  style={{
                    background: 'rgba(10, 10, 11, 0.5)',
                    backdropFilter: 'blur(2px)',
                  }}
                >
                  <div
                    className="flex flex-col items-center gap-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400 ease-out"
                  >
                    {/* Magnifying glass icon */}
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-90"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <path d="M21 21l-4.35-4.35" />
                      <path d="M11 8v6" className="group-hover:scale-110 transition-transform" />
                      <path d="M8 11h6" className="group-hover:scale-110 transition-transform" />
                    </svg>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '10px',
                        fontWeight: 400,
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: '#ffffff',
                        opacity: 0.8,
                      }}
                    >
                      ׁלמענועü
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="flex items-center gap-2"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(13px, 3vw, 14px)',
                  color: '#b0b2b5',
                  marginTop: '0.85rem',
                  letterSpacing: '0.02em',
                  fontWeight: 400,
                  transition: 'color 0.3s ease',
                }}
              >
                <span className="group-hover:text-white transition-colors duration-300">
                  {item.caption}
                </span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
                  style={{ color: '#f25b29', flexShrink: 0 }}
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox overlay */}
      {selected && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(10, 10, 11, 0.95)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5vh 5vw',
            cursor: 'pointer',
            animation: 'fadeIn 0.3s ease',
          }}
          onClick={() => setSelectedIndex(null)}
        >
          <div
            style={{
              display: 'flex',
              gap: '4vw',
              maxWidth: 1400,
              width: '100%',
              maxHeight: '80vh',
              alignItems: 'center',
              cursor: 'default',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image ג€” left */}
            <div style={{ flex: '0 0 55%', maxHeight: '80vh' }}>
              <img
                src={selected.src}
                alt={selected.caption}
                style={{
                  width: '100%',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>

            {/* Description ג€” right */}
            <div style={{ flex: '1 1 45%', overflow: 'auto', maxHeight: '80vh' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  color: '#ffffff',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                {selected.caption}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: '#b0b2b5',
                }}
              >
                {selected.description}
              </p>

              {/* Close hint */}
              {galleryConfig.lightboxCloseHint && (
                <div
                  style={{
                    marginTop: '2rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    color: '#666',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {galleryConfig.lightboxCloseHint}
                </div>
              )}
            </div>

            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              style={{
                position: 'absolute',
                top: '3vh',
                right: '3vw',
                background: 'none',
                border: 'none',
                color: '#999',
                fontSize: '2rem',
                cursor: 'pointer',
                lineHeight: 1,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
