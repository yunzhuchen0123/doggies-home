import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Breeds from './pages/Breeds';
import Care from './pages/Care';
import Quiz from './pages/Quiz';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './styles/app.css';
import Identify from './pages/Identify';

const ROUTES = {
  '#/': Home,
  '#/breeds': Breeds,
  '#/care': Care,
  '#/quiz': Quiz,
  '#/about': About,
  '#/identify': Identify
};

function getCurrentHash() {
  return window.location.hash || '#/';
}

function readStored(key, fallback) {
  try {
    return window.localStorage.getItem(key) ?? fallback;
  } catch {
    // Storage can be unavailable (private mode, blocked cookies) - fall back quietly.
    return fallback;
  }
}

function writeStored(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Ignore write failures - persistence is a nicety, not a requirement.
  }
}

function App() {
  const [page, setPage] = useState(getCurrentHash);
  const [theme, setTheme] = useState(() => readStored('pawfect:theme', 'light'));
  const [userName, setUserName] = useState(() => readStored('pawfect:userName', 'Friend'));

  useEffect(() => {
    function handleHashChange() {
      setPage(getCurrentHash());
    }

    // hashchange is the event that actually fires for #-based navigation.
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    writeStored('pawfect:theme', theme);
  }, [theme]);

  useEffect(() => {
    writeStored('pawfect:userName', userName);
  }, [userName]);

  const PageComponent = ROUTES[page] || NotFound;

  return (
    <div className={theme === 'dark' ? 'app dark-theme' : 'app'}>
      <a href="#main" className="skiplink">Skip to main content</a>
      <Header
        currentPage={page}
        theme={theme}
        setTheme={setTheme}
        userName={userName}
        setUserName={setUserName}
      />
      <main id="main" tabIndex="-1">
        <PageComponent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
