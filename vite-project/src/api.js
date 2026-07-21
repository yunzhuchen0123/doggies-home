const API_URL = 'https://pawfect-pups-api.onrender.com/api';

export async function register(email, password, name) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name })
  });
  return res.json();
}

export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
}

export async function getProfile(token) {
  const res = await fetch(`${API_URL}/user/profile`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return res.json();
}

export async function addFavorite(token, breed) {
  const res = await fetch(`${API_URL}/user/favorites`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ breed })
  });
  return res.json();
}

export async function removeFavorite(token, breed) {
  const res = await fetch(`${API_URL}/user/favorites/${breed}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return res.json();
}
