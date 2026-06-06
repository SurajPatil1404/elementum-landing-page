import './Footer.css';

const cols = [
  {
    title: 'Company',
    links: ['Home', 'Studio', 'Services', 'Blog'],
    hrefs: ['#home', '#studio', '#services', '#'],
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
    hrefs: ['#', '#', '#', '#'],
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'YouTube', 'Twitter'],
    hrefs: ['#', '#', '#', '#'],
  },
  {
    title: 'Terms & Policies',
    links: [
      '168 Rue Balzac, str. 272,\n3290-EU, 5,00921',
      '(223) 456199003',
      'info@elementumtest',
    ],
    hrefs: ['#', 'tel:+2234561990030', 'mailto:info@elementumtest'],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {cols.map(col => (
          <div className="footer__col" key={col.title + col.links[0]}>
            <h4 className="footer__col-title">{col.title}</h4>
            <ul>
              {col.links.map((link, i) => (
                <li key={link}>
                  <a href={col.hrefs[i]} className="footer__col-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <p>© 2023 Elementum. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
