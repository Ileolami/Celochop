import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Loading from './Features/Loading';
import Homepage from './Pages/HomePage';
import Search from './Pages/Search';
import Profile from './Pages/Profile';
import AddItem from './Pages/AddItem';
import ConnectWallet from './Features/Connectwallet'

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
    <main className='min-h-screen house'>
      <div className=''>
       <ConnectWallet /> 
      </div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Signup />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />*/}
          <Route path='/' element={<Homepage />} />
          <Route path='/search' element={<Search />} /> 
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/additem' element={<AddItem />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
