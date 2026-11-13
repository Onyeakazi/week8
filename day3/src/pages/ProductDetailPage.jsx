// src/pages/ProductDetailPage.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-sky-400 animate-pulse">Loading Product #{id}...</p>;

  return (
    <div className="max-w-2xl bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-6">
      <button onClick={() => navigate('/products')} className="text-sky-400 font-bold">← Back to Catalog</button>
      <img src={product.image} alt={product.title} className="h-56 object-contain bg-white p-4 rounded-xl" />
      <h2 className="text-2xl font-black text-white">{product.title}</h2>
      <p className="text-emerald-400 text-2xl font-black">${product.price}</p>
      <p className="text-slate-400 leading-relaxed">{product.description}</p>
    </div>
  );
}