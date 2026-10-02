
// src/components/Header.jsx
export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 px-8 py-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold text-white">Enterprise Workspace</h2>
        <p className="text-xs text-slate-400">Welcome back, Administrator</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/20">
          ● System Live
        </span>
        <div className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center font-bold text-white shadow-md">
          AD
        </div>
      </div>
    </header>
  );
}