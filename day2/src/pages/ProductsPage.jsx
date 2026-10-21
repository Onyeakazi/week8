// src/pages/ProductsPage.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // <-- Link, not NavLink

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => { setProducts(data); setLoading(false); });
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="animate-pulse text-sky-400">Loading products...</p>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Products Catalog</h2>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div key={product.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <img src={product.image} alt={product.title} className="h-40 object-contain bg-white p-3 rounded-xl mb-4" />
            <div>
              <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">{product.title}</h3>
              <p className="text-emerald-400 font-extrabold text-lg mb-4">${product.price}</p>
              {/* Link navigates to /products/4, /products/7, etc. — matches /products/:id in App.jsx */}
              <Link
                to={`/products/${product.id}`}
                className="block text-center bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 rounded-xl transition"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}