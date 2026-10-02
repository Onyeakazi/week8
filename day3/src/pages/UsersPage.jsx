// src/pages/UsersPage.jsx
import { useState, useEffect } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">User Directory</h2>
      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-800 text-slate-300">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b border-slate-800 text-slate-300 hover:bg-slate-800/50">
                <td className="p-4 font-bold text-white">{u.name}</td>
                <td className="p-4">{u.email}</td>
                <td className="p-4">{u.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}