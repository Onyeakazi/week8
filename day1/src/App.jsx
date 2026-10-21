import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  //  No dependency array
  // useEffect(()=> {
  //   console.log("fetching!!")
  // })

  // Empty dependency array
  // useEffect(()=> {
  //   console.log("fetching!");
  // }, []);

  // With dependency array
  // useEffect(()=> {
  //   console.log("fetching");
  // }, [count])

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
    }, 3000)
  }, []); // [] = Empty array means run ONCE on initial mount

  if (loading) return <p className="animate-pulse text-sky-400">Loading Profile...</p>;

  return (
    <>
      <h3 className="text-xl font-bold text-black">{user.name} ({user.email})</h3>



      <h1 className='text-red-500 text-4xl bg-green-400 p-4 m-6'>welcome to tailwindcss</h1>
      <h2>{count}</h2>
      <button onClick={()=> setCount(count + 1)} className='bg-red-300 rounded-lg px-3 m-6'>add</button>
    </>
  )
}

export default App
