import { createPublicClient, createWalletClient, http, custom } from 'viem'
import { celoAlfajores, mainnet } from 'viem/chains'
 
export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})
 

export const walletClient = createWalletClient({
  chain: celoAlfajores,
  transport: custom(window.ethereum || window.ethereum.isMinipay),
})

export const [ account ] = await walletClient.getAddresses();