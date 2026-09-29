import { useState, useEffect, useRef } from 'react';
import "./App.css";

export default function WindowResizeTracker() {
  const videoRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // CLEANUP FUNCTION: Runs when component is removed/unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log("Cleanup: Event listener removed!");
    };
  }, []); // Run setup once on mount, cleanup on unmount

  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <video ref={videoRef} className="w-full rounded-lg mb-4" src="https://www.w3schools.com/html/mov_bbb.mp4" />
      <div className="flex gap-4">
        <button onClick={() => videoRef.current.play()} className="bg-emerald-600 text-white px-4 py-2 rounded-lg">▶ Play</button>
        <button onClick={() => videoRef.current.pause()} className="bg-rose-600 text-white px-4 py-2 rounded-lg">⏸ Pause</button>
        <button onClick={() => videoRef.current.currentTime = 0} className="bg-slate-700 text-white px-4 py-2 rounded-lg">↺ Restart</button>
      </div>
      <p className="text-red-700 hover:bg-green-400">Window Width: {windowWidth}px</p>;
    </div>
  )
}