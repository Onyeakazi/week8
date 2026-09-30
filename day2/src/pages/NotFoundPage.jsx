// src/pages/NotFoundPage.jsx
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-6 text-center">
      <p className="text-8xl font-black text-slate-700">404</p>
      <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
      <p className="text-slate-400">The page you're looking for doesn't exist.</p>
      <Link to="/products" className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-3 rounded-xl transition">
        ← Back to Products
      </Link>
    </div>
  );
}
