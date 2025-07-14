import React from "react";
import { Link } from "react-router-dom";
import GoogleSignInButton from "./GoogleSignInButton";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h2 className="text-lg font-bold">Menu</h2>
        <nav className="mt-4">
          <ul>
            <li>
              <Link to="/dashboard" className="block py-2 text-gray-700 hover:bg-gray-200">Dashboard</Link>
            </li>
            <li>
              <Link to="/upload" className="block py-2 text-gray-700 hover:bg-gray-200">Upload</Link>
            </li>
            <li>
              <Link to="/rewards" className="block py-2 text-gray-700 hover:bg-gray-200">Rewards</Link>
            </li>
            <li>
              <Link to="/activity" className="block py-2 text-gray-700 hover:bg-gray-200">Activity Log</Link>
            </li>
            <li>
              <Link to="/settings" className="block py-2 text-gray-700 hover:bg-gray-200">Settings</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 text-gray-700 hover:bg-gray-200">About Us</Link>
            </li>
            <li>
              <Link to="/analytics" className="block py-2 text-gray-700 hover:bg-gray-200">Analytics</Link>
            </li>
          </ul>
        </nav>
        <div className="mt-4">
          <GoogleSignInButton />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;