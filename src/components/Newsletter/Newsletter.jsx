import { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setDone(true);
  }

  return (
    <section className="newsletter" id="contact">
      <div className="newsletter__deco newsletter__deco--purple" aria-hidden="true" />
      <div className="newsletter__deco newsletter__deco--circle"  aria-hidden="true" />

      <div className="newsletter__inner">
        <h2 className="newsletter__heading">
          Subscribe to<br />our newsletter
        </h2>
        <p className="newsletter__sub">
          To make your day special and even more memorable
        </p>

        {done ? (
          <p className="newsletter__success">✓ You're subscribed!</p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              className="newsletter__input"
              placeholder="Enter your email"
              value={email}
              onChange={e => { setEmail(e.target.value); setError(''); }}
              aria-label="Email address"
            />
            <button type="submit" className="newsletter__btn">
              Subscribe Now
            </button>
            {error && <p className="newsletter__error">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
