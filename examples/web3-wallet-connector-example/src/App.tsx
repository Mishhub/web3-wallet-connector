import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Web3WalletConnector } from 'web3-wallet-connector'

function App() {
  return (
    <div className="App">
      <Web3WalletConnector /> 
    </div>
  );
}

export default App;
