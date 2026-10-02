// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "block px-4 py-3 bg-red-500 text-white rounded-xl font-bold shadow-lg transition"
      : "block px-4 py-3 text-slate-400 hover:bg-slate-900 hover:text-white rounded-xl transition";

  return (
    <nav className="w-64 bg-slate-900 h-full p-6 flex flex-col gap-3 border-r border-slate-800">
      <h1 className="text-2xl font-black text-white mb-6 tracking-wider">⚡ Enterprise.OS</h1>
      <NavLink to="/" className={linkStyle}>📊 Overview</NavLink>
      <NavLink to="/products" className={linkStyle}>🛍️ Products Catalog</NavLink>
      <NavLink to="/users" className={linkStyle}>👥 User Directory</NavLink>
      <NavLink to="/settings" className={linkStyle}>⚙️ Settings</NavLink>
    </nav>
  );
}