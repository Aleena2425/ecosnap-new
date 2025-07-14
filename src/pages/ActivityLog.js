import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const categoryIcons = {
  Recyclable: "♻️",
  Organic: "🌿",
  "E-waste": "🔋",
  Hazardous: "☣️",
};

export default function ActivityLog() {
  const [history, setHistory] = useState([]);
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("ecoSnapHistory");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Your EcoSnap Activity Log", 14, 16);
    doc.autoTable({
      startY: 22,
      head: [["Date", "Item", "Category", "Points", "Action"]],
      body: filteredHistory.map(entry => [
        new Date(entry.timestamp).toLocaleDateString(),
        entry.label,
        entry.category,
        entry.points,
        entry.action,
      ]),
    });
    doc.save("ecosnap-activity-log.pdf");
  };

  const filteredHistory = history.filter(
    (entry) => filter === "All" || entry.category === filter
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-extrabold text-green-700">Your Waste Journey</h1>
          <p className="text-gray-500 mt-2">A transparent and traceable log of your eco-actions.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={exportPDF}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md">
            Export as PDF
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("ecoSnapHistory");
              setHistory([]);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md">
            Clear History
          </button>
        </div>
      </div>

      <div className="mb-6 flex space-x-2">
        {["All", ...Object.keys(categoryIcons)].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === category
                ? "bg-green-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}>
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredHistory.map((entry, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div
              className="p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50"
              onClick={() => setExpanded(expanded === index ? null : index)}>
              <div className="text-3xl">{categoryIcons[entry.category]}</div>
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
              </div>
              <div className="text-xs text-gray-400">
                {new Date(entry.timestamp).toLocaleString()}
              </div>
            </div>
            {expanded === index && (
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <h4 className="font-semibold text-gray-700">Action Taken:</h4>
                <p className="text-gray-600">{entry.action}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
