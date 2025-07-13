import React, { useState } from "react";

function ActivityLog() {
  const [activities] = useState([
    { id: 1, item: "Plastic Bottle", category: "Recyclable", date: "2025-07-15", points: 10 },
    { id: 2, item: "Banana Peel", category: "Compostable", date: "2025-07-14", points: 5 },
    { id: 3, item: "Battery", category: "Hazardous", date: "2025-07-13", points: 15 },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Your Recycling Activity</h2>

      <div className="bg-white rounded-xl shadow-md p-4 overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-700 uppercase bg-green-50">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Item</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">EcoPoints</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((act, index) => (
              <tr key={act.id} className="border-b hover:bg-green-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{act.item}</td>
                <td className="px-4 py-2">{act.category}</td>
                <td className="px-4 py-2">{act.date}</td>
                <td className="px-4 py-2 font-semibold text-green-600">+{act.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActivityLog;
