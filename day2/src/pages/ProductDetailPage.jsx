// src/pages/ProductDetailPage.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetailPage() {
  const { id } = useParams();          // Reads :id from /products/:id
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)  // Uses the id from the URL
      .then((res) => res.json())
      .then((data) => { setProduct(data); setLoading(false); });
  }, [id]);  // Re-runs whenever the URL :id changes

  if (loading) return <p className="animate-pulse text-sky-400">Loading product #{id}...</p>;

  return (
    <div className="max-w-2xl bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-6">
      {/* navigate('/products') goes back to the catalog — matches the route in App.jsx */}
      <button
        onClick={() => navigate('/products')}
        className="text-sky-400 font-bold hover:text-sky-300"
      >
        ← Back to Catalog
      </button>
      <img src={product.image} alt={product.title} className="h-56 object-contain bg-white p-4 rounded-xl" />
      <span className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full uppercase tracking-wide">
        {product.category}
      </span>
      <h2 className="text-2xl font-black text-white">{product.title}</h2>
      <p className="text-emerald-400 text-2xl font-black">${product.price}</p>
      <p className="text-slate-400 leading-relaxed">{product.description}</p>
    </div>
  );
}