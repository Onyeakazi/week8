import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // No dependency array
  // useEffect(()=> {
  //   console.log("Fetching data!");
  // });

  // Empty dependency Array
  // useEffect(()=> {
  //   console.log("Fetching data!");
  // }, []);

  // with dependency Array
  // useEffect(()=> {
  //   console.log("Fetching data!", count);
  // }, [count]);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('Leanne');
  const [results, setResults] = useState([]);
  const videoRef = useRef(null);

  // useEffect(() => {
  //   async function fetchUserData() {
  //     try {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  //       const data = await response.json();
  //       setUser(data);
  //     } catch (err) {
  //       console.error("Fetch Error:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   setTimeout(() => {
  //     fetchUserData();
  //   }, 3000); // Simulate a delay of 3 seconds before fetching data

  // }, []); // [] = Empty array means run ONCE on initial mount

  // if (loading) return <p className="animate-pulse text-sky-400">Loading Profile...</p>;
  
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
    <>
      <h1>{count}</h1>
      <h1 className="text-red-600 text-center text-4xl hover:bg-green-300">welcome</h1>
      <button onClick={()=> setCount(count + 1)}>add</button>  

      {/* <h3 className="text-xl font-bold text-white">{user.name} ({user.email})</h3>   */}
      <div className="p-6 bg-slate-900 rounded-xl">
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Type to search..." 
          className="px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg mb-4" 
        />
        {results.map(u => <p key={u.id} className="text-slate-300">{u.name}</p>)}
      </div>

       <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <video ref={videoRef} className="w-full rounded-lg mb-4" src="https://www.w3schools.com/html/mov_bbb.mp4" />
          <div className="flex gap-4">
            <button onClick={() => videoRef.current.play()} className="bg-emerald-600 text-white px-4 py-2 rounded-lg">▶ Play</button>
            <button onClick={() => videoRef.current.pause()} className="bg-rose-600 text-white px-4 py-2 rounded-lg">⏸ Pause</button>
            <button onClick={() => videoRef.current.currentTime = 0} className="bg-slate-700 text-white px-4 py-2 rounded-lg">↺ Restart</button>
          </div>
        </div>

    </>
  )
}

export default App
