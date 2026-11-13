// src/pages/SettingsPage.jsx
import { useState, useRef } from 'react';

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const fileInputRef = useRef(null);

  return (
    <div className="max-w-xl bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-6">
      <h2 className="text-3xl font-bold text-white">System Preferences</h2>
      
      {/* useRef Custom File Trigger */}
      <div className="space-y-2">
        <p className="text-slate-400 font-semibold text-sm">PROFILE AVATAR</p>
        <input ref={fileInputRef} type="file" className="hidden" onChange={(e) => alert(`Uploaded: ${e.target.files[0]?.name}`)} />
        <button onClick={() => fileInputRef.current.click()} className="bg-sky-500 text-white font-bold px-4 py-2 rounded-xl">
          📁 Upload New Avatar (useRef)
        </button>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-slate-800">
        <span className="text-white font-semibold">Dark Mode State</span>
        <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 rounded-xl bg-slate-800 text-sky-400 font-bold">
          {darkMode ? '🌙 Dark Mode Active' : '☀️ Light Mode Active'}
        </button>
      </div>
    </div>
  );
}