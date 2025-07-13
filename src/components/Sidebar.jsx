import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-green-50 border-r shadow-sm p-4 hidden md:block">
      <nav className="flex flex-col gap-4 text-green-900 font-medium">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "hover:text-green-600"
          }
        >
          🏠 Dashboard
        </NavLink>
        <NavLink
          to="/upload"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "hover:text-green-600"
          }
        >
          🖼️ Upload & Classify
        </NavLink>
        <NavLink
          to="/rewards"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "hover:text-green-600"
          }
        >
          📈 Credits & Rewards
        </NavLink>
        <NavLink
          to="/activity"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "hover:text-green-600"
          }
        >
          🧾 Activity Log
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "hover:text-green-600"
          }
        >
          ℹ️ About Us
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "hover:text-green-600"
          }
        >
          ⚙️ Settings
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-bold" : "hover:text-green-600"
          }
>
  📊 Analytics
</NavLink>

      </nav>
    </aside>
  );
}
