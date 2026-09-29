import { useState, useEffect } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    }
    setTimeout(()=> {
      fetchUserData();
    }, 7000)
  }, []); // [] = Empty array means run ONCE on initial mount

  if (loading) return <p className="animate-pulse text-sky-400">Relax Profile loading...</p>;
  return <h3 className="text-xl font-bold text-white">{user.name} ({user.email})</h3>;
}
