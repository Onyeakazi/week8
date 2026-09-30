import { NavLink } from 'react-router-dom';

export default function Navbar() {
  // NavLink provides an 'isActive' boolean automatically
  const activeStyle = ({ isActive }) =>
    isActive
      ? "px-4 py-2 bg-sky-500 text-white rounded-lg font-bold"
      : "px-4 py-2 text-slate-400 hover:text-white font-medium";

  return (
    <nav className="bg-slate-900 p-4 flex gap-4 border-b border-slate-800">
      <NavLink to="/" end className={activeStyle}>Dashboard</NavLink>
      <NavLink to="/products" className={activeStyle}>Products</NavLink>
    </nav>
  );
}