import React from "react";
import ReactDOM from "react-dom/client";
import { ModalProvider } from "./Context/modal.jsx";
import App from "./App.jsx";
import "./index.css";
import ABI from "./Utils/CeloABI.json";
import { ThirdwebProvider } from "thirdweb/react";
import { createPublicClient, http } from "viem";
import { mainnet, celoAlfajores } from "viem/chains";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
