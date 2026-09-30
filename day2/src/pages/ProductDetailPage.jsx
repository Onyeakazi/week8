// src/pages/ProductDetailPage.jsx
import { useState, useEffect } from 'react';
import {useParams, useNavigate} from "react-router-dom"

export default function ProductDetailPage() {
  const { id } = useParams(); // Extracts :id from URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="p-8 text-sky-400">Loading product details...</p>;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-4">
        <div className="p-8 max-w-2xl bg-slate-900 rounded-xl border border-slate-800 text-white">
        <button onClick={() => navigate('/products')} className="mb-4 text-sky-400 font-semibold">← Back to Catalog</button>
        <img src={product.image} alt={product.title} className="h-48 object-contain mb-4 bg-white p-4 rounded-lg" />
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-emerald-400 text-xl font-bold mb-4">${product.price}</p>
        <p className="text-slate-400 text-sm">{product.description}</p>
        </div>
    </div>
  );
}