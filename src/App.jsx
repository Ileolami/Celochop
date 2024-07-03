import React, { useState, useEffect } from 'react'
import './App.css'
import Signup from './Pages/Signup';
import Loading from './Features/Loading';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <main className='min-h-screen bg-[#121223]'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App