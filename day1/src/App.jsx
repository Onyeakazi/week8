import react from 'react'
import { useEffect, useState, useRef } from 'react';
import "./App.css"

function App() {
    const [query, setQuery] = useState('Leanne');
    const [userData, setUserData] = useState([]);

    // useref
    const videoRef = useRef(null);

    // useEffect(() => {
    //     async function fetchUserData() {
    //         try {
    //             const user = await fetch(`https://api.github.com/users/${query}`);
    //             const userData = await user.json();
    //             setUserData(userData);
    //         } catch (error) {
    //             console.error('Error fetching user data:', error);
    //         }
    //     }
        
    //     fetchUserData();
    //   // Simulate a 3-second delay before fetching user data
    // }, [query])

    useEffect(() => {
        async function fetchUserData() {
            try {
                const user = await fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`);
                const userData = await user.json();
                setUserData(userData);
                // console.log('User data fetched:', userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        
        fetchUserData();
      // Simulate a 3-second delay before fetching user data
    }, [query])

  return (
    <div className="App">
      <h1 className='text-red-400 bg-sky-500 m-6 p-6 hover:text-green-400 shadow-xl shadow-red-500/50 rounded-lg text-center text-4xl'>welcome to react hooks and tailwind css</h1>
        <input 
            type="text" 
            placeholder="Enter GitHub username"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />

        <ul>
            {userData.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <video ref={videoRef} className="w-full rounded-lg mb-4" src="https://www.w3schools.com/html/mov_bbb.mp4" />
            <div className="flex gap-4">
                <button onClick={() => videoRef.current.play()} className="bg-emerald-600 text-black px-4 py-2 rounded-lg">▶ Play</button>
                <button onClick={() => videoRef.current.pause()} className="bg-rose-600 text-black px-4 py-2 rounded-lg">⏸ Pause</button>
                <button onClick={() => videoRef.current.currentTime = 0} className="bg-slate-700 text-black px-4 py-2 rounded-lg">↺ Restart</button>
            </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-6 mx-6 my-6">
            <div className="bg-slate-800 p-4 rounded-lg">card 1</div>
            <div className="bg-slate-800 p-4 rounded-lg">card 2</div>
            <div className="bg-slate-800 p-4 rounded-lg">card 3</div>
            <div className="bg-slate-800 p-4 rounded-lg">card 4</div>
        </div>
    </div>
  )
}

export default App