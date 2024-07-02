import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [framework, setFramework] = useState('React')

  return (
    <div className="App">
      <h1>Choose your favorite JavaScript framework</h1>
      <div className=" flex justify-center gap-8">
        <button onClick={() => setFramework('React')}>
          <img src={reactLogo} alt="React logo" />
          React
        </button>
        <button onClick={() => setFramework('Vite')}>
          <img src={viteLogo} alt="Vite logo" />
          Vite
        </button>
      </div>
      <h2>You've chosen {framework}!</h2>
    </div>
  )
}

export default App