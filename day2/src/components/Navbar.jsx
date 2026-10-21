// src/components/Navbar.jsx
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const linkStyle = ({ isActive }) =>
    isActive
      ? 'px-4 py-2 bg-sky-500 text-white rounded-lg font-bold transition'
      : 'px-4 py-2 text-slate-400 hover:text-white font-medium transition';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');          // Send user back to login after logout
  };

  return (
    <nav className="bg-slate-900 px-8 py-4 flex items-center justify-between border-b border-slate-800">
      <span className="text-white font-black text-lg">🛍️ ShopReact</span>
      <div className="flex gap-3">
        <NavLink to="/" end className={linkStyle}>🏠 Home</NavLink>
        {/* 'end' ensures Home is only active on exactly '/', not '/products' */}
        <NavLink to="/products" className={linkStyle}>🛍️ Products</NavLink>
      </div>
      <button onClick={handleLogout} className="text-rose-400 text-sm font-semibold hover:text-rose-300">
        Sign Out
      </button>
    </nav>
  );
}