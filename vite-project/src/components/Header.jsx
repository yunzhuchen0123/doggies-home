import { useState } from 'react';
import '../styles/header.css';

function Header({ currentPage, theme, setTheme, userName, user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick(e, newPage) {
    e.preventDefault();
    window.location.hash = newPage;
    setMenuOpen(false);
  }

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          <h1 className="header__title">Pawfect Pups</h1>
        </div>

        <button 
          className="header__menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <nav className={menuOpen ? 'header__nav header__nav--open' : 'header__nav'}>
          <a 
            href="#/" 
            className={currentPage === '#/' ? 'header__link header__link--active' : 'header__link'}
            onClick={(e) => handleNavClick(e, '#/')}
          >
            Home
          </a>
          <a 
            href="#/breeds" 
            className={currentPage === '#/breeds' ? 'header__link header__link--active' : 'header__link'}
            onClick={(e) => handleNavClick(e, '#/breeds')}
          >
            Breeds
          </a>
          <a 
            href="#/care" 
            className={currentPage === '#/care' ? 'header__link header__link--active' : 'header__link'}
            onClick={(e) => handleNavClick(e, '#/care')}
          >
            Care Guide
          </a>
          <a 
            href="#/quiz" 
            className={currentPage === '#/quiz' ? 'header__link header__link--active' : 'header__link'}
            onClick={(e) => handleNavClick(e, '#/quiz')}
          >
            Quiz
          </a>
          <a 
            href="#/about" 
            className={currentPage === '#/about' ? 'header__link header__link--active' : 'header__link'}
            onClick={(e) => handleNavClick(e, '#/about')}
          >
            About
          </a>
          <a 
            href="#/identify" 
            className={currentPage === '#/identify' ? 'header__link header__link--active' : 'header__link'}
            onClick={(e) => handleNavClick(e, '#/identify')}
          >
            AI Identify
          </a>
        </nav>

        <div className="header__controls">
          <span className="header__greeting">Hello, {userName}!</span>
          {user ? (
            <button className="header__button" onClick={onLogout}>
              Log Out
            </button>
          ) : (
            <a 
              href="#/login" 
              className="header__button"
              onClick={(e) => handleNavClick(e, '#/login')}
            >
              Log In
            </a>
          )}
          <button className="header__button" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;