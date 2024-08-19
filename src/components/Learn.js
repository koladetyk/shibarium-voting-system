import React from 'react';
import Quiz from './Quiz';

const Learn = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-3xl font-bold mb-4">Learn About Decentralized Voting</h2>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Step-by-Step Guide</h3>
        <ol className="list-decimal list-inside ml-4">
          <li className="my-2">
            <strong>Add a Candidate:</strong> Go to the "Add Candidate" page, enter your name, and the DApp will assign you a dog-themed name.
          </li>
          <li className="my-2">
            <strong>Cast a Vote:</strong> Go to the "Bark" page, enter the candidate ID, and click "Bark" to vote for your favorite pup.
          </li>
        </ol>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Benefits of Decentralized Voting</h3>
        <p>
          Decentralized voting offers numerous benefits, including enhanced transparency, security, and accessibility. Every vote is recorded on the blockchain, ensuring that it cannot be altered or removed. This prevents fraud and manipulation, making the voting process more secure and trustworthy.
        </p>
        <ul className="list-disc list-inside ml-4">
          <li className="my-2">Transparency: All transactions are publicly recorded and verifiable on the blockchain.</li>
          <li className="my-2">Security: Blockchain technology ensures that votes are immutable and tamper-proof.</li>
          <li className="my-2">Accessibility: Voters can participate from anywhere in the world, using just a digital wallet.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">What is Blockchain Technology?</h3>
        <p>
          Blockchain is a distributed ledger technology that allows data to be stored across multiple computers in a secure and decentralized manner. It underpins cryptocurrencies like Bitcoin and Ethereum, but its applications go far beyond digital currency. Blockchain can be used to securely record transactions, manage contracts, and even conduct elections.
        </p>
        <p>
          In a blockchain, data is stored in blocks that are linked together in a chain. Each block contains a list of transactions, and every block is connected to the previous one, forming a continuous chain. This structure makes it extremely difficult to alter any data without affecting the entire chain, ensuring security and integrity.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">What is Shibarium?</h3>
        <p>
          Shibarium is a Layer 2 blockchain solution built on top of the Ethereum network. It was developed to provide faster and cheaper transactions, while still benefiting from the security of Ethereum. Shibarium is particularly popular within the Shiba Inu ecosystem, supporting various decentralized applications (DApps) and tokens.
        </p>
        <p>
          In the context of the Doggo Voting DApp, Shibarium is used to record votes securely and efficiently. By leveraging Shibarium, we can offer users a seamless and cost-effective voting experience.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Glossary of Blockchain Terms</h3>
        <ul className="list-disc list-inside ml-4">
          <li className="my-2"><strong>Blockchain:</strong> A distributed ledger that records transactions across multiple computers.</li>
          <li className="my-2"><strong>Decentralization:</strong> The distribution of power and control away from a central authority.</li>
          <li className="my-2"><strong>Smart Contract:</strong> A self-executing contract with the terms of the agreement directly written into code.</li>
          <li className="my-2"><strong>Ethereum:</strong> A decentralized platform that enables developers to build and deploy smart contracts.</li>
          <li className="my-2"><strong>Gas:</strong> A unit of measure for computational work in executing transactions or smart contracts on the Ethereum network.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Additional Resources</h3>
        <p>Learn more about decentralized voting and blockchain technology:</p>
        <ul className="list-disc list-inside ml-4">
          <li className="my-2"><a href="https://medium.com/@sm_28205/the-promise-of-blockchain-based-voting-a-revolution-in-elections-fb5def7aec35" className="text-blue-500 underline">The Promise of Blockchain-Based Voting</a></li>
          <li className="my-2"><a href="https://ethereum.org/en/what-is-ethereum/" className="text-blue-500 underline">What is Ethereum?</a></li>
          <li className="my-2"><a href="https://shibatoken.com/shibarium" className="text-blue-500 underline">Introduction to Shibarium</a></li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Test Your Knowledge</h3>
        <p>Take this quiz to test your knowledge about decentralized voting and blockchain technology!</p>
        <Quiz /> 
      </div>
    </div>
  );
};

export default Learn;
