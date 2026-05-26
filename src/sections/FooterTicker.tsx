import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { footerConfig } from '../config';

function getRandomChar() {
  const isDigit = Math.random() < 0.3;
  if (isDigit) {
    return String(Math.floor(Math.random() * 10));
  }
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

interface LineState {
  el: HTMLDivElement;
  chars: number;
  word: string;
  wordStart: number;
  rateA: { value: number };
  rateB: { value: number };
  tweens: gsap.core.Tween[];
  timeouts: ReturnType<typeof setTimeout>[];
}

export default function FooterTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<LineState[]>([]);
  const rafRef = useRef<number>(0);

  const DICTIONARY = footerConfig.tickerWords;

  const buildLineHTML = useCallback((state: LineState) => {
    const { chars, word, wordStart, rateA, rateB } = state;
    let html = '';
    const wordEnd = wordStart + word.length;
    const NOISE_WIDTH = 30; // noise band around the sweep front

    for (let i = 0; i < chars; i++) {
      const progressA = rateA.value * chars;
      const progressB = rateB.value * chars;

      if (i < progressB) {
        // Behind rateB: invisible
        html += '<span style="color:#0a0a0b">_</span>';
      } else if (i >= wordStart && i < wordEnd && i < progressA) {
        // Word area already swept: show real letter
        const letterIndex = i - wordStart;
        html += word[letterIndex];
      } else if (i < progressA && i > progressA - NOISE_WIDTH) {
        // Narrow noise band at the sweep front
        html += getRandomChar();
      } else if (i < progressA) {
        // Already swept, not word, not in noise band: invisible
        html += '<span style="color:#0a0a0b">_</span>';
      } else if (i >= wordStart && i < wordEnd) {
        // Word area not yet swept: show real letter
        const letterIndex = i - wordStart;
        html += word[letterIndex];
      } else {
        // Not swept, not word: invisible
        html += '<span style="color:#0a0a0b">_</span>';
      }
    }

    state.el.innerHTML = html;
  }, []);

  const startLineCycle = useCallback((state: LineState, delay: number) => {
    if (DICTIONARY.length === 0) return;
    // Pick new word and position
    state.word = DICTIONARY[Math.floor(Math.random() * DICTIONARY.length)];
    state.wordStart = Math.floor(Math.random() * Math.max(1, state.chars - state.word.length - 4)) + 2;
    state.rateA.value = 0;
    state.rateB.value = 0;

    const timeout = setTimeout(() => {
      // Phase 1: rateA sweeps 0->1 (reveal)
      const tweenA = gsap.to(state.rateA, {
        value: 1,
        duration: 1.5,
        ease: 'power2.inOut',
      });
      state.tweens.push(tweenA);

      // After reveal, hold 5-6s, then erase
      const holdTimeout = setTimeout(() => {
        // Phase 2: rateB sweeps 0->1 (erase)
        const tweenB = gsap.to(state.rateB, {
          value: 1,
          duration: 1.5,
          ease: 'power2.inOut',
        });
        state.tweens.push(tweenB);

        // After erase, pause 2s, then loop
        const pauseTimeout = setTimeout(() => {
          startLineCycle(state, 0);
        }, 2000);
        state.timeouts.push(pauseTimeout);
      }, 5000 + Math.random() * 1000);
      state.timeouts.push(holdTimeout);
    }, delay);
    state.timeouts.push(timeout);
  }, [DICTIONARY]);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    const charsPerLine = Math.ceil(window.innerWidth / 8);
    const lineEls = ticker.querySelectorAll<HTMLDivElement>('.ticker-line');
    const lines: LineState[] = [];

    lineEls.forEach((el, i) => {
      const state: LineState = {
        el,
        chars: charsPerLine,
        word: '',
        wordStart: 0,
        rateA: { value: 0 },
        rateB: { value: 0 },
        tweens: [],
        timeouts: [],
      };
      lines.push(state);
      startLineCycle(state, i * 100);
    });

    linesRef.current = lines;

    // Render loop — gated by visibility, throttled to ~30 fps
    let isVisible = false;
    let lastRender = 0;
    const FRAME_INTERVAL = 1000 / 30;

    function render(now: number) {
      rafRef.current = requestAnimationFrame(render);
      if (!isVisible) return;
      if (now - lastRender < FRAME_INTERVAL) return;
      lastRender = now;
      for (const state of lines) {
        buildLineHTML(state);
      }
    }
    rafRef.current = requestAnimationFrame(render);

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          isVisible = entry.isIntersecting;
        }
      },
      { threshold: 0 }
    );
    visibilityObserver.observe(ticker);

    // Handle resize
    const handleResize = () => {
      const newChars = Math.ceil(window.innerWidth / 8);
      for (const state of lines) {
        state.tweens.forEach((t) => t.kill());
        state.timeouts.forEach((t) => clearTimeout(t));
        state.tweens = [];
        state.timeouts = [];
      }
      lines.forEach((state, i) => {
        state.chars = newChars;
        startLineCycle(state, i * 100);
      });
    };

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 300);
    };

    window.addEventListener('resize', debouncedResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      visibilityObserver.disconnect();
      window.removeEventListener('resize', debouncedResize);
      for (const state of lines) {
        state.tweens.forEach((t) => t.kill());
        state.timeouts.forEach((t) => clearTimeout(t));
      }
    };
  }, [startLineCycle, buildLineHTML]);

  if (footerConfig.tickerWords.length === 0 && !footerConfig.copyright) {
    return null;
  }

  const renderIcon = (type: string) => {
    switch (type) {
      case 'tg':
        return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.35rem' }}><path d="M21.5 3.5L2.5 11l6 2.5M21.5 3.5l-4 18-8-7m8 7l-8-7m8 7l-2.5-6m-5.5 1l-4 4"/></svg>;
      case 'email':
        return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.35rem' }}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>;
      case 'ig':
        return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.35rem' }}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="18" cy="6" r="1"/></svg>;
      default:
        return null;
    }
  };

  const contacts = [
    { type: 'tg', value: '@hellen_stylist', href: 'https://t.me/hellen_stylist' },
    { type: 'email', value: 'hello@hellen-stylist.ru', href: 'mailto:hello@hellen-stylist.ru' },
    { type: 'ig', value: '@hellen_stylist', href: 'https://instagram.com/hellen_stylist' },
  ];

  return (
    <footer
      id="footer"
      style={{
        background: '#0a0a0b',
        padding: '0 var(--page-padding) 3rem',
      }}
    >
      {/* Horizontal rule */}
      <div className="mx-auto" style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '2rem' }} />

      {/* Bottom bar */}
      <div className="mx-auto flex flex-col items-start gap-4">
        <a
          href="https://elenach.com"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline transition-colors duration-300 hover:text-white"
          style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(13px, 1.8vw, 15px)', fontWeight: 300, color: '#7a7c7f', letterSpacing: '-0.01em' }}
        >
          Сделано студией <span style={{ color: "#f25b29" }}>elenach.com</span>
        </a>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-colors duration-300 hover:text-white"
              style={{ fontFamily: 'var(--font-mono)', fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 400, color: "#c0c0c4", letterSpacing: '0.06em', whiteSpace: 'nowrap' }}
            >
              [{item.label}] {item.value}
            </a>
          ))}
        </div>
      </div>

      {/* Horizontal rule */}
      <div
        className="mx-auto"
        style={{
          maxWidth: '1400px',
          height: '1px',
          background: 'rgba(255,255,255,0.06)',
          margin: '6rem auto',
        }}
      />

      {/* Bottom half — Terminal ticker */}
      {footerConfig.tickerWords.length > 0 && (
        <div ref={tickerRef}>
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="ticker-line" />
          ))}
        </div>
      )}

      {/* Copyright */}
      {footerConfig.copyright && (
        <div className="mx-auto" style={{ marginTop: '2rem', fontFamily: 'var(--font-sans)', fontSize: 10, color: '#444' }}>
          {footerConfig.copyright}
        </div>
      )}
    </footer>
  );
}
