import React from "react";
import LevelBadge from "../components/LevelBadge";

export default function Dashboard() {
  const ecoPoints = 100;
  const dailyGoal = 5;
  const todayRecycled = 3;

  const ecoTips = [
    "Composting reduces landfill waste 🌱",
    "Plastic takes 1000 years to degrade ♻️",
    "Turn off taps while brushing 🚰",
    "Segregate waste at source 🔄",
    "Use cloth bags instead of plastic 🛍️"
  ];
  const tip = ecoTips[Math.floor(Math.random() * ecoTips.length)];

  return (
    <div className="p-6 space-y-6">
      {/* Row: Level + Summary */}
      <div className="grid md:grid-cols-2 gap-6">
        <LevelBadge points={ecoPoints} />

        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            🌍 EcoPoints Summary
          </h3>
          <p className="text-gray-800 text-lg font-bold">
            {ecoPoints} EcoPoints
          </p>
          <p className="text-gray-600 mb-2">
            Today: {todayRecycled} / {dailyGoal} items recycled
          </p>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{
                width: `${Math.min(
                  100,
                  (todayRecycled / dailyGoal) * 100
                )}%`,
              }}
            />
          </div>
          <p className="text-sm text-right text-gray-500 mt-1">
            {dailyGoal - todayRecycled > 0
              ? `${dailyGoal - todayRecycled} more to complete today's goal!`
              : "Goal achieved! 🎉"}
          </p>
        </div>
      </div>

      {/* Chart Placeholder + Tip */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-md h-64 flex items-center justify-center text-gray-400">
          📈 Mini chart (e.g. last 5 days) coming soon...
        </div>
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-xl shadow-md">
          <h4 className="text-lg font-semibold text-green-700 mb-2">
            💡 Eco Tip of the Day
          </h4>
          <p className="text-gray-700 italic">{`"${tip}"`}</p>
        </div>
      </div>
    </div>
  );
}
