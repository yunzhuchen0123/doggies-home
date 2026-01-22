import { useState, useRef } from 'react';
import '../styles/header.css';

function Header({ setPage, currentPage, theme, setTheme, userName, setUserName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef();
  const [tempName, setTempName] = useState('');

  function handleNavClick(e, newPage) {
    e.preventDefault();
    setPage(newPage);
    window.location.hash = newPage;
    setMenuOpen(false);
  }

  function openModal() {
    setTempName(userName);
    dialogRef.current.showModal();
  }

  function closeModal() {
    dialogRef.current.close();
  }

  function handleSave() {
    if (tempName.trim()) {
      setUserName(tempName.trim());
    }
    closeModal();
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
        </nav>

        <div className="header__controls">
          <span className="header__greeting">Hello, {userName}!</span>
          <button className="header__button" onClick={openModal}>
            Edit Name
          </button>
          <button className="header__button" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>

      <dialog ref={dialogRef} className="modal">
        <h2 className="modal__title">Change Your Name</h2>
        <label className="modal__label">
          <span className="modal__label-text">Enter your name:</span>
          <input 
            type="text"
            className="modal__input"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />
        </label>
        <div className="modal__buttons">
          <button className="modal__button modal__button--primary" onClick={handleSave}>
            Save
          </button>
          <button className="modal__button" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </dialog>
    </header>
  );
}

export default Header;