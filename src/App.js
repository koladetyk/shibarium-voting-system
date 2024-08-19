import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ethers } from 'ethers';
import Header from './components/Header';
import Home from './components/Home';
import Vote from './components/Vote';
import Analytics from './components/Analytics';
import Learn from './components/Learn';
import AddCandidate from './components/AddCandidate';
import VotingSystemABI from './ABI/VotingSystem.json';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initContract = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractAddress = "0x1Cae31dA3Dc7A8f98E2D86fFe7Ec973CC7ec6B6f"; 
      const contractInstance = new ethers.Contract(contractAddress, VotingSystemABI.abi, signer);
      setContract(contractInstance);
    };
    initContract();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vote" element={<Vote contract={contract} />} />
        <Route path="/analytics" element={<Analytics contract={contract} />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/add-candidate" element={<AddCandidate contract={contract} />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
