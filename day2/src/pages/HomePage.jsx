// src/pages/HomePage.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigation = useNavigate();

    const [isLoggedIn, setIsloggedIn] = useState(() => {
        return localStorage.getItem("isLoggedIn") === "true";
    });

    const handleAuth = (e)=> {
        e.preventDefault();

        if(isLoggedIn){
            localStorage.removeItem("isLoggedIn")
            setIsloggedIn(false);
            navigation("/login")
        }
    }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-8 text-center">

      {/* Hero section */}
      <div className="space-y-4">
        <span className="text-6xl">🛍️</span>
        <h1 className="text-5xl font-black text-dark tracking-tight">
          Welcome to <span className="text-sky-400">ShopReact</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-md">
          A modern product store built with React Router, dynamic routes, and protected pages.
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl w-full">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-2xl mb-2">⚡</p>
          <p className="text-white font-bold">Instant Navigation</p>
          <p className="text-slate-400 text-sm mt-1">No page reloads, powered by React Router</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-2xl mb-2">🔒</p>
          <p className="text-white font-bold">Protected Pages</p>
          <p className="text-slate-400 text-sm mt-1">Catalog requires login via ProtectedRoute</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-2xl mb-2">🔗</p>
          <p className="text-white font-bold">Dynamic Routes</p>
          <p className="text-slate-400 text-sm mt-1">Product detail pages via useParams</p>
        </div>
      </div>

      {/* CTA buttons */}
      <div className="flex gap-4">
        {/* Goes to /products — requires login (ProtectedRoute will redirect to /login if not logged in) */}
        <Link
          to="/products"
          className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-3 rounded-xl transition"
        >
          Browse Products →
        </Link>
        {/* Goes to /login */}
        <Link
          onClick={handleAuth}
          className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-3 rounded-xl border border-slate-700 transition"
        >
          {isLoggedIn ? "Log out" : "Login"}
        </Link>
      </div>

    </div>
  );
}