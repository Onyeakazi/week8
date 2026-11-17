import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Without the dependency array, this useEffect will run after every render of the component.
  // useEffect(() => {
  //   console.log('App component mounted')
  // })  

  // With an empty dependency array, this useEffect will run only once after the initial render of the component.
  // useEffect(() => {
  //   console.log('App component mounted')
  // }, [])           
  
  // With a dependency array containing a state variable, this useEffect will run after the initial render and whenever the specified state variable changes.
  // useEffect(() => {
  //   console.log('App component mounted or updated', count)
  // }, [count]) 
    
  useEffect(() => {
    async function fetchUserData() {
      try{
        const user = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const userData = await user.json();
        setUserData(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }finally {
        setLoading(false);
      }
    }
    setTimeout(() => {
      fetchUserData();
    }, 3000); // Simulate a 3-second delay before fetching user data
  }, []);
  return (   
    <>
      <h1 className='text-red-400 bg-sky-500 m-6 p-6 hover:text-green-400 shadow-xl shadow-red-500/50 rounded-lg text-center text-4xl'>welcome to react hooks and tailwind css</h1>
      {loading ? (
        <p className='text-center text-2xl'>Loading user data...</p>
      ) : (
        <div className='text-center text-2xl'>
          <p>User Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
        </div>
      )}
      {/* <h1 className='text-center text-2xl'>Count: {count}</h1>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCount(count + 1)}>Increment</button> */}
    </>
  )
}

export default App
