// src/pages/LoginPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/products');  // <-- Goes to /products, which is in App.jsx
    } else {
      setError('Wrong username or password. Try admin / 1234');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 w-80 space-y-4">
        <h2 className="text-2xl font-black text-white">Sign In</h2>
        {error && <p className="bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm px-4 py-2 rounded-xl">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white"
        />
        <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 rounded-xl transition">
          Login
        </button>
        <p className="text-slate-500 text-xs text-center">Demo: admin / 1234</p>
      </form>
    </div>
  );
}