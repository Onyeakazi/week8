// src/pages/LoginPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // After validating credentials, redirect programmatically
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('isLoggedIn', 'true'); // Persist login state
      navigate('/');  // Redirect to dashboard
    } else {
      alert('Invalid credentials!');
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <form onSubmit={handleLogin} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 w-80 space-y-4">
        <h2 className="text-2xl font-black text-white">Sign In</h2>
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
        <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 rounded-xl">
          Login
        </button>
        <button type="button" onClick={() => navigate(-1)} className="w-full text-slate-400 text-sm">
          ← Go Back
        </button>
      </form>
    </div>
  );
}