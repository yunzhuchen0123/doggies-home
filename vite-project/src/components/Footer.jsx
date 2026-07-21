import '../styles/footer.css';

const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://www.instagram.com' },
  { name: 'Facebook', url: 'https://www.facebook.com' },
  { name: 'Twitter', url: 'https://www.twitter.com' }
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">Pawfect Pups - Your trusted dog breed guide</p>
        <div className="footer__links">
          {SOCIAL_LINKS.map(link => (
            <a
              key={link.name}
              href={link.url}
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
        <p className="footer__memorial">Dedicated to the memory of our beloved NiuNiu</p>
        <p className="footer__memorial">November 29, 2025 - Forever in our hearts 💕</p>
        <p className="footer__copyright">2025 All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
