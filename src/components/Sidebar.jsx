import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 ${ 
        isActive
          ? "bg-green-100 text-green-700 font-bold"
          : "text-gray-600 hover:bg-green-50 hover:text-green-700"
      }`
    }
  >
    <span className="text-xl">{icon}</span>
    <span>{label}</span>
  </NavLink>
);

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-green-50 border-r shadow-lg p-4 hidden md:flex flex-col">
      <nav className="flex flex-col gap-2 text-gray-700 font-medium mt-6">
        <NavItem to="/" icon="🏠" label="Home" />
        <NavItem to="/dashboard" icon="📊" label="Dashboard" />
        <NavItem to="/upload" icon="🖼️" label="Upload & Classify" />
        <NavItem to="/rewards" icon="📈" label="Credits & Rewards" />
        <NavItem to="/activity" icon="🧾" label="Activity Log" />
        <NavItem to="/analytics" icon="📊" label="Analytics" />
      </nav>
      <div className="mt-auto">
        <nav className="flex flex-col gap-2 text-gray-700 font-medium">
          <NavItem to="/about" icon="ℹ️" label="About Us" />
          <NavItem to="/settings" icon="⚙️" label="Settings" />
        </nav>
      </div>
    </aside>
  );
}
