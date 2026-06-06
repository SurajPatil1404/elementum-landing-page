import { useEffect, useRef } from 'react';
import './Hero.css';

const avatars = [
  { id: 1,  src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',  style: { top: '14%',   left: '1%',   width: '90px',  height: '90px'  }, delay: '0s'    },
  { id: 2,  src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&h=120&fit=crop&crop=face', style: { top: '46%',   left: '-1%',  width: '72px',  height: '72px'  }, delay: '0.1s'  },
  { id: 3,  src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&h=120&fit=crop&crop=face', style: { top: '5%',    left: '16%',  width: '78px',  height: '78px'  }, delay: '0.15s' },
  { id: 4,  src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face', style: { top: '2%',    left: '36%',  width: '76px',  height: '76px'  }, delay: '0.2s'  },
  { id: 5,  src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face', style: { top: '5%',    right: '16%', width: '80px',  height: '80px'  }, delay: '0.25s' },
  { id: 6,  src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face', style: { top: '1%',    right: '0%',  width: '80px',  height: '80px'  }, delay: '0.3s'  },
  { id: 7,  src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face', style: { top: '38%',   right: '-1%', width: '74px',  height: '74px'  }, delay: '0.35s' },
  { id: 8,  src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face',   style: { bottom: '22%', left: '2%',   width: '70px',  height: '70px'  }, delay: '0.4s'  },
  { id: 9,  src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&crop=face',   style: { bottom: '16%', right: '2%',  width: '76px',  height: '76px'  }, delay: '0.45s' },
  { id: 10, src: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=120&h=120&fit=crop&crop=face',style: { top: '30%',   left: '10%',  width: '62px',  height: '62px'  }, delay: '0.5s'  },
  { id: 11, src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&h=120&fit=crop&crop=face',style: { top: '26%',   right: '10%', width: '66px',  height: '66px'  }, delay: '0.55s' },
  { id: 12, src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&h=120&fit=crop&crop=face',style: { bottom: '30%', right: '13%', width: '60px',  height: '60px'  }, delay: '0.6s'  },
];

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('hero--visible'); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" ref={heroRef} id="home">

      {/* ── Red squiggle lines — positioned around hero content like Figma ── */}
      <svg className="hero__squiggle hero__squiggle--left" aria-hidden="true" viewBox="0 0 300 36" fill="none">
        <path d="M0 18 C37 4,74 32,111 18 S185 4,222 18 S272 32,300 18" stroke="#e63946" strokeWidth="1.8" fill="none"/>
      </svg>
      <svg className="hero__squiggle hero__squiggle--right" aria-hidden="true" viewBox="0 0 260 36" fill="none">
        <path d="M0 18 C32 4,64 32,96 18 S160 4,192 18 S236 32,260 18" stroke="#e63946" strokeWidth="1.8" fill="none"/>
      </svg>

      {/* ── Geometric shapes ── */}
      {/* Red triangles */}
      <div className="hero__deco hero__deco--tri-red"    aria-hidden="true" />
      <div className="hero__deco hero__deco--tri-red2"   aria-hidden="true" />
      {/* Purple blobs */}
      <div className="hero__deco hero__deco--blob-purple"  aria-hidden="true" />
      <div className="hero__deco hero__deco--blob-purple2" aria-hidden="true" />
      {/* Yellow dot */}
      <div className="hero__deco hero__deco--circle-yellow" aria-hidden="true" />
      {/* Outline rings */}
      <div className="hero__deco hero__deco--ring"  aria-hidden="true" />
      <div className="hero__deco hero__deco--ring2" aria-hidden="true" />

      {/* ── Purple cursor arrow (Figma upper-right area) ── */}
      <svg className="hero__cursor" aria-hidden="true" viewBox="0 0 32 40" fill="none">
        <path d="M2 2 L2 34 L10 26 L16 38 L20 36 L14 24 L26 24 Z" fill="#6b46c1"/>
      </svg>

      {/* ── Floating avatars ── */}
      <div className="hero__avatars" aria-hidden="true">
        {avatars.map(av => (
          <div key={av.id} className="hero__avatar" style={{ ...av.style, animationDelay: av.delay }}>
            <img src={av.src} alt="" loading="lazy" />
          </div>
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="hero__content">
        <h1 className="hero__headline">
          The thinkers and<br />
          doers were{' '}
          <mark className="mark mark--yellow">changing</mark>
          <br />
          the{' '}
          <mark className="mark mark--green">status quo</mark>
          {' '}with
        </h1>
        <p className="hero__body">
          We are a team of strategists, designers, communicators, and researchers.
          Together, we believe that progress only happens when you refuse to play things safe.
        </p>
      </div>
    </section>
  );
}

export default Hero;
