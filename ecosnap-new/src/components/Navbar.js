import React from "react";
import { Link } from "react-router-dom";
import GoogleSignInButton from "./GoogleSignInButton";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Ecosnap
        </div>
        <div className="flex space-x-4">
          <Link to="/dashboard" className="text-white">Dashboard</Link>
          <Link to="/upload" className="text-white">Upload</Link>
          <Link to="/rewards" className="text-white">Rewards</Link>
          <Link to="/activity" className="text-white">Activity Log</Link>
          <Link to="/settings" className="text-white">Settings</Link>
          <Link to="/about" className="text-white">About Us</Link>
          <Link to="/analytics" className="text-white">Analytics</Link>
        </div>
        <GoogleSignInButton />
      </div>
    </nav>
  );
};

export default Navbar;