import React from 'react';
import { Link } from 'react-router-dom';
import dogLogo from '../assets/dog-logo.png'; // Your logo path

const Header = () => {
    return (
        <nav className="navbar bg-gray-800 text-white p-4">
            <div className="container mx-auto flex items-center">
                <img src={dogLogo} alt="Dog Logo" className="h-20 mr-4" /> {/* Reduced height */}
                <Link to="/" className="text-3xl font-bold">Doggo Voting DApp</Link>
                <div className="ml-auto">
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
                        <li><Link to="/add-candidate" className="hover:text-yellow-400">Add Candidate</Link></li>
                        <li><Link to="/vote" className="hover:text-yellow-400">Bark</Link></li> {/* Use "Bark" instead of "Vote" */}
                        <li><Link to="/analytics" className="hover:text-yellow-400">Analytics</Link></li>
                        <li><Link to="/learn" className="hover:text-yellow-400">Learn</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
