import { useEffect, useRef } from 'react';
import './Testimonials.css';

const leftAvatars = [
  { id: 1, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face', top: '8%',  size: '68px', name: 'Sara K.'  },
  { id: 2, src: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=120&h=120&fit=crop&crop=face', top: '46%', size: '58px', name: 'Leo M.'  },
  { id: 3, src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&h=120&fit=crop&crop=face', top: '78%', size: '52px', name: 'Nina B.' },
];

const rightAvatars = [
  { id: 4, src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face', top: '12%', size: '64px', name: 'Priya A.' },
  { id: 5, src: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=120&h=120&fit=crop&crop=face', top: '50%', size: '72px', name: 'Raj J.'  },
  { id: 6, src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&crop=face', top: '80%', size: '50px', name: 'Tom C.'  },
];

function Testimonials() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('revealed'); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="testi">
      <div className="testi__inner" ref={ref}>
        {/* Figma heading: plain text, no highlighted words */}
        <h2 className="testi__heading">
          What our customer<br />says About Us
        </h2>

        <div className="testi__stage">

          <div className="testi__side testi__side--left">
            {leftAvatars.map(p => (
              <div key={p.id} className="testi__avatar" style={{ top: p.top, width: p.size, height: p.size }}>
                <img src={p.src} alt={p.name} loading="lazy" />
              </div>
            ))}
          </div>

          <div className="testi__card">
            {/* Squiggle above card */}
            <svg className="testi__squiggle" aria-hidden="true" viewBox="0 0 180 24" fill="none">
              <path d="M0 12 C22 3,44 21,66 12 S110 3,132 12 S164 21,180 12" stroke="#e63946" strokeWidth="1.5" fill="none" opacity="0.45"/>
            </svg>
            <div className="testi__quote-mark">&ldquo;</div>
            <p className="testi__quote">
              Elementum delivered the site within the timeline they requested. In the end,
              the client found a 50% increase in traffic since its launch. They also had an
              impressive ability to use technologies that the company hadn't used before,
              which have also proved to be easy to use and reliable.
            </p>
            <div className="testi__quote-mark testi__quote-mark--close">&rdquo;</div>
            <div className="testi__author">
              <div className="testi__author-img">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face"
                  alt="James Wilson"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="testi__author-name">James Wilson</p>
                <p className="testi__author-role">CEO, NovaTech Inc.</p>
              </div>
            </div>
          </div>

          <div className="testi__side testi__side--right">
            {rightAvatars.map(p => (
              <div key={p.id} className="testi__avatar testi__avatar--right" style={{ top: p.top, width: p.size, height: p.size }}>
                <img src={p.src} alt={p.name} loading="lazy" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
