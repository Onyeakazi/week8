import { useState, useEffect, useRef } from 'react';
import "./App.css";

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessages([...messages, text]);
    setText("")
  }

  // Whenever messages update, auto-scroll to bottom dummy ref
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="bg-slate-900 p-6 rounded-xl h-400 overflow-y-auto">
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} className='bg-gray-600 m-4 rounded-xl w-100 h-10' onChange={(e)=> setText(e.target.value)}/>
        <button type="submit" className='text-green-500 bg-green-50 p-3 rounded-md'>submit</button>
      </form>
      {messages.map((msg, i) => (
        <div key={i} className="bg-slate-800 p-3 rounded-lg mb-2 text-slate-200">{msg}</div>
      ))}
      <div ref={chatEndRef} /> {/* Scroll Anchor */}
    </div>
  );
}