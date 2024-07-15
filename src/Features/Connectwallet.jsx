import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";

const client = createThirdwebClient({ clientId: import.meta.env.VITE_API_KEY});

export default function ConnectBtn() {
  return (
    
    <div className="flex justify-end">
        <nav className=" flex justify-end m-5 ">
         <ConnectButton client={client} />
        </nav>
    </div>
    
  );
}