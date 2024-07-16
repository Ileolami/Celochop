import { createPublicClient, createWalletClient, http, custom } from 'viem'
import { celoAlfajores, mainnet } from 'viem/chains'
 
export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})
 

export const walletClient = createWalletClient({
  chain: celoAlfajores,
  transport: custom(window.ethereum),
})

export const [account] = await walletClient.getAddresses();