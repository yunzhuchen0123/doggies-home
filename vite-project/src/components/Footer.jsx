import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">Pawfect Pups - Your trusted dog breed guide</p>
        <div className="footer__links">
          <a href="https://www.instagram.com" className="footer__link">Instagram</a>
          <a href="https://www.facebook.com" className="footer__link">Facebook</a>
          <a href="https://www.twitter.com" className="footer__link">Twitter</a>
        </div>
        <p className="footer__copyright">Dedicated to the memory of our beloved NiuNiu</p> 
        <p className="footer__copyright">November 29, 2025 - Forever in our hearts 💕</p>
        <p className="footer__copyright">2025 All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;