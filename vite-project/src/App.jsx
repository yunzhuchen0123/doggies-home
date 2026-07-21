import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Breeds from './pages/Breeds';
import Care from './pages/Care';
import Quiz from './pages/Quiz';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Identify from './pages/Identify';
import Login from './pages/Login';
import './styles/app.css';

const ROUTES = {
  '#/': Home,
  '#/breeds': Breeds,
  '#/care': Care,
  '#/quiz': Quiz,
  '#/about': About,
  '#/identify': Identify,
  '#/login': Login
};

function getCurrentHash() {
  return window.location.hash || '#/';
}

function readStored(key, fallback) {
  try {
    return window.localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeStored(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
  }
}

function App() {
  const [page, setPage] = useState(getCurrentHash);
  const [theme, setTheme] = useState(() => readStored('pawfect:theme', 'light'));
  const [user, setUser] = useState(() => {
    const stored = readStored('pawfect:user', null);
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    function handleHashChange() {
      setPage(getCurrentHash());
    }
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    writeStored('pawfect:theme', theme);
  }, [theme]);

  useEffect(() => {
    if (user) {
      writeStored('pawfect:user', JSON.stringify(user));
    } else {
      localStorage.removeItem('pawfect:user');
    }
  }, [user]);

  function handleLogin(userData) {
    setUser(userData);
    window.location.hash = '#/';
  }

  function handleLogout() {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('pawfect:user');
  }

  const PageComponent = ROUTES[page] || NotFound;
  const userName = user ? user.name : 'Friend';

  return (
    <div className={theme === 'dark' ? 'app dark-theme' : 'app'}>
      <a href="#main" className="skiplink">Skip to main content</a>
      <Header
        currentPage={page}
        theme={theme}
        setTheme={setTheme}
        userName={userName}
        user={user}
        onLogout={handleLogout}
      />
      <main id="main" tabIndex="-1">
        {page === '#/login' ? (
          <Login onLogin={handleLogin} />
        ) : (
          <PageComponent user={user} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;