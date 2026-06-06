import { useEffect, useRef } from 'react';
import './Services.css';

const items = [
  {
    id: 1,
    tag: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
  },
  {
    id: 2,
    tag: 'The hanger US Air Force digital experiments',
    title: 'We talk about our weight',
  },
  {
    id: 3,
    tag: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
];

function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('revealed'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="services" id="services">
      <div className="services__inner" ref={ref}>
        <div className="services__header">
          <div className="services__heading-wrap">
            <h2 className="services__heading">
              What we <mark className="svc-mark">can</mark>
              <br />offer you!
            </h2>
            {/* Squiggle under heading — matches Figma */}
            <svg className="services__squiggle" aria-hidden="true" viewBox="0 0 260 28" fill="none">
              <path d="M0 14 C30 3,60 25,90 14 S150 3,180 14 S230 25,260 14" stroke="#e63946" strokeWidth="1.7" fill="none"/>
            </svg>
          </div>
          <p className="services__sub">
            Three pillars of how we engage with clients and move the needle.
          </p>
        </div>

        <div className="services__list">
          {items.map((item, i) => (
            <div
              className="service-row"
              key={item.id}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="service-row__tag">{item.tag}</p>
              <h3 className="service-row__title">{item.title}</h3>
              <span className="service-row__arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
