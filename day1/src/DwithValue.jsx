import { useState, useEffect } from 'react';

export default function SearchableUserList() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  // const [text, setText] = useState("");

  useEffect(() => {
    // Automatically refetches data whenever 'query' state changes!
    async function searchAPI() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`);
      const data = await response.json();
      setResults(data);
    }
    if (query.trim() !== '') {
      searchAPI();
    }
  }, [query]); // <--- Runs on mount AND whenever 'query' changes!

  return (
    <div className="p-6 bg-slate-900 rounded-xl">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Type to search..." 
        className="px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg mb-4" 
      />
      {results.map(u => <p key={u.id} className="text-slate-300">{u.name}</p>)}
      {/* <br /><br /><input type="text" onChange={(e)=> setText(console.log(e.target.value))}/> */}
    </div>
  );
}