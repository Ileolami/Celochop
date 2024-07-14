import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ABI from './Utils/CeloABI.json'
import { ThirdwebProvider } from "thirdweb/react";
import { createPublicClient, http } from 'viem'
import { mainnet, celoAlfajores } from 'viem/chains'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
)
