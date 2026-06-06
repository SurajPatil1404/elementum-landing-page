import { useEffect, useRef } from 'react';
import './InfoSection.css';

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('revealed'); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

function InfoSection() {
  const row1 = useReveal();
  const row2 = useReveal();

  return (
    <div className="info" id="studio">

      {/* Section 1 — text left, image right */}
      <div className="info__row info__row--tl" ref={row1}>
        <div className="info__text">
          <h2 className="info__heading">
            Tomorrow should<br />be better than today
          </h2>
          <p className="info__body">
            We are a team of strategists, designers, communicators, and researchers.
            Together, we believe that progress only happens when you refuse to play things safe.
            We challenge assumptions, question defaults, and build for what's next.
          </p>
          <a href="#services" className="info__link">
            Read more <span className="info__link-line" />
          </a>
        </div>

        <div className="info__visual">
          <div className="info__deco info__deco--glow" />
          <div className="info__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop&crop=center"
              alt="Team collaborating in a bright modern office"
              loading="lazy"
            />
          </div>
          <div className="info__deco info__deco--tri" />
          <div className="info__deco info__deco--blob-purple" />
          <svg className="info__squiggle info__squiggle--r" aria-hidden="true" viewBox="0 0 260 32" fill="none">
            <path d="M0 16 C30 4,60 28,90 16 S150 4,180 16 S230 28,260 16" stroke="#e63946" strokeWidth="1.6" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Section 2 — image left, text right */}
      <div className="info__row info__row--il" ref={row2}>
        <div className="info__visual info__visual--left">
          <div className="info__img-wrap info__img-wrap--offset">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=600&fit=crop&crop=center"
              alt="Two professionals discussing strategy"
              loading="lazy"
            />
          </div>
          <div className="info__deco info__deco--tri2" />
          <div className="info__deco info__deco--square-outline" />
          <div className="info__deco info__deco--dot-yellow" />
          <svg className="info__squiggle info__squiggle--l" aria-hidden="true" viewBox="0 0 220 32" fill="none">
            <path d="M0 16 C25 4,50 28,75 16 S125 4,150 16 S195 28,220 16" stroke="#e63946" strokeWidth="1.6" fill="none"/>
          </svg>
        </div>

        <div className="info__text info__text--right">
          <h2 className="info__heading">
            See how we can<br />help you progress
          </h2>
          <p className="info__body">
            We add a layer of fearless insights and action that allows change makers to accelerate their
            progress in brand, design, digital, content, and social research. We don't just advise — we build.
          </p>
          <a href="#services" className="info__link">
            Read more <span className="info__link-line" />
          </a>
        </div>
      </div>

    </div>
  );
}

export default InfoSection;
