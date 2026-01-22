import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Breeds from './pages/Breeds';
import Care from './pages/Care';
import Quiz from './pages/Quiz';
import About from './pages/About';
import './styles/app.css';

function App() {
  const hash = document.location.hash || '#/';
  const [page, setPage] = useState(hash);
  const [theme, setTheme] = useState('light');
  const [userName, setUserName] = useState('Friend');

  useEffect(() => {
    function handlePageLoad() {
      setPage(document.location.hash || '#/');
    }
    window.addEventListener('popstate', handlePageLoad);
    setPage(document.location.hash || '#/');
    return () => {
      window.removeEventListener('popstate', handlePageLoad);
    };
  }, []);

  return (
    <div className={theme === 'dark' ? 'app dark-theme' : 'app'}>
      <a href="#main" className="skiplink">Skip to main content</a>
      <Header setPage={setPage} currentPage={page} theme={theme} setTheme={setTheme} userName={userName} setUserName={setUserName} />
      <main id="main" tabIndex="-1">
        {page === '#/' && <Home />}
        {page === '#/breeds' && <Breeds />}
        {page === '#/care' && <Care />}
        {page === '#/quiz' && <Quiz />}
        {page === '#/about' && <About />}
      </main>
      <Footer />
    </div>
  );
}

export default App;