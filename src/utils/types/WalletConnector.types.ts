export interface WalletConnector {
  title: string
  icon: string
  ethereum: {
    metamask: boolean
  }
  solana: {
    phantom: boolean
  }
}
