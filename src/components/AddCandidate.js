import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tutorial from './Tutorial'; // Import Tutorial component


const dogNames = ["Buddy", "Bella", "Max", "Daisy", "Charlie", "Rocky", "Molly", "Bailey"];

const AddCandidate = ({ contract }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      toast.error('Please enter your name.');
      return;
    }

    if (dogNames.length === 0) {
      toast.error('No more dog names available.');
      return;
    }

    try {
      const candidateName = dogNames.splice(Math.floor(Math.random() * dogNames.length), 1)[0]; // Remove the selected name
      const fullName = `${candidateName} (${name})`;
      const tx = await contract.addCandidate(fullName);
      await tx.wait(); 
      toast.success(`Candidate ${fullName} added successfully! 🐕`);
      setName(''); 
    } catch (err) {
      console.error(err);
      toast.error('Failed to add candidate.');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <Tutorial /> {/* Add the Tutorial component */}
      <h2 className="text-2xl font-bold mb-4">Add a New Candidate</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Your Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Enter your name"
          />
        </div>
        <button type="submit" className="add-candidate-button bg-green-600 text-white p-2 rounded">
          Add Candidate
        </button>
      </form>
    </div>
  );
};

export default AddCandidate;

