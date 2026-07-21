import { useState } from 'react';
import { login, register } from '../api';
import '../styles/login.css';

function Login({ onLogin }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let result;
      if (isRegister) {
        result = await register(email, password, name);
      } else {
        result = await login(email, password);
      }

      if (result.error) {
        setError(result.error);
      } else {
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        onLogin(result.user);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login">
      <h2 className="login__title">{isRegister ? 'Create Account' : 'Welcome Back'}</h2>
      
      <form className="login__form" onSubmit={handleSubmit}>
        {isRegister && (
          <label className="login__label">
            <span>Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="login__input"
            />
          </label>
        )}
        
        <label className="login__label">
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login__input"
          />
        </label>
        
        <label className="login__label">
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="login__input"
          />
        </label>

        {error && <p className="login__error">{error}</p>}

        <button type="submit" className="login__button" disabled={loading}>
          {loading ? 'Please wait...' : (isRegister ? 'Sign Up' : 'Log In')}
        </button>
      </form>

      <p className="login__switch">
        {isRegister ? 'Already have an account?' : "Don't have an account?"}
        <button 
          type="button" 
          className="login__switch-btn"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? 'Log In' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
}

export default Login;
