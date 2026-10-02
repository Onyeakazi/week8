// src/pages/DashboardHome.jsx
export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <p className="text-slate-400 font-semibold text-sm">Total Revenue</p>
          <p className="text-3xl font-black text-emerald-400 mt-2">$54,230</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <p className="text-slate-400 font-semibold text-sm">Active Users</p>
          <p className="text-3xl font-black text-sky-400 mt-2">1,842</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <p className="text-slate-400 font-semibold text-sm">Conversion Rate</p>
          <p className="text-3xl font-black text-indigo-400 mt-2">4.8%</p>
        </div>
      </div>
    </div>
  );
}