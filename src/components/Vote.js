import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from './Spinner'; // Assuming you have a Spinner component
import Tutorial from './Tutorial'; // Import Tutorial component

const Vote = ({ contract }) => {
  const [loading, setLoading] = useState(false);
  const [candidateId, setCandidateId] = useState('');

  const handleVote = async () => {
    if (!candidateId) {
      toast.error('Please select a candidate.');
      return;
    }

    setLoading(true);
    try {
      const transaction = await contract.vote(candidateId);
      await transaction.wait();
      toast.success('Vote successfully cast!');
    } catch (error) {
      if (error.message.includes('Already voted')) {
        toast.error('You have already voted.');
      } else {
        console.error('Error casting vote:', error);
        toast.error('Failed to cast vote.');
      }
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <Tutorial />
      <h2 className="text-2xl font-bold">Cast Your Vote</h2>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter Candidate ID"
          value={candidateId}
          onChange={(e) => setCandidateId(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          disabled={loading}
        />
        <button
          className={`vote-button bg-blue-600 text-white p-2 rounded ml-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleVote}
          disabled={loading}
        >
          {loading ? <Spinner /> : 'Vote'} 
        </button>
      </div>
    </div>
  );
};

export default Vote;
