import React, { useEffect, useState } from "react";

export default function ActivityLog() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("ecoSnapHistory");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("ecoSnapHistory");
    setHistory([]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Your Recycling Activity</h2>

      {history.length === 0 ? (
        <p className="text-gray-500">No classification history yet.</p>
      ) : (
        <ul className="space-y-4">
          {history.map((entry, index) => (
            <li key={index} className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4">
              <img
                src={entry.preview}
                alt="Waste Preview"
                className="w-16 h-16 rounded-md border object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold text-green-800">
                  {entry.label} <span className="text-sm text-gray-500">({entry.category})</span>
                </p>
                <p className="text-sm text-gray-600 italic">{entry.points} EcoPoints earned</p>
                <p className="text-xs text-gray-400">
                  {new Date(entry.timestamp).toLocaleString()}
                </p>
                <p className="text-sm mt-1">
  <span
    className={`inline-block px-2 py-1 rounded text-white text-xs ${
      entry.category === "Recyclable"
        ? "bg-green-600"
        : entry.category === "Organic"
        ? "bg-yellow-600"
        : entry.category === "E-waste"
        ? "bg-purple-600"
        : entry.category === "Hazardous"
        ? "bg-red-600"
        : "bg-gray-600"
    }`}
  >
    {entry.category}
  </span>
</p>

              </div>
            </li>
          ))}
        </ul>
      )}

      {history.length > 0 && (
        <div className="mt-6">
          <button
            onClick={clearHistory}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Clear History
          </button>
        </div>
      )}
    </div>
  );
}
