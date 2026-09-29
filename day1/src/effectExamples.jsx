// import { useEffect, useState } from 'react'
// import './App.css'

// function Example() {
//   const [count, setCount] = useState(0)

//   // Runs on every render, no dependency
//   // useEffect(()=> {
//   //   console.log("mounted");
//   // });

//   // Runs once, empty dependency
//   // useEffect(()=> {
//   //   console.log("mounted!")
//   // }, []);

//   // Runs only when the value of a state changes
//   useEffect(()=> {
//     console.log("mounted!", {count})
//   }, [count]);

//   return (
//     <>
//      <h1>{count}</h1>
//      <button onClick={()=> setCount(count + 1)}>increase</button>
//      hhhhh
//     </>
//   )
// }

// export default Example