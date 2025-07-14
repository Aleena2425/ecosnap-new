import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import CountUp from 'react-countup';

import LevelBadge from "../components/LevelBadge";
import Achievements from "../components/Achievements";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const wasteData = [
  { name: 'Plastic', value: 400 },
  { name: 'E-waste', value: 300 },
  { name: 'Organic', value: 300 },
  { name: 'Paper', value: 200 },
];

export default function Dashboard() {
  const [view, setView] = useState('Weekly');
  const history = JSON.parse(localStorage.getItem('ecoSnapHistory')) || [];
  const ecoPoints = history.reduce((acc, item) => acc + (item.ecoPoints || 0), 0);
  const totalWasteItems = history.length;
  const ecoStreak = 5;
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
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Row: Level + Summary */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex justify-center gap-4 mb-6">
            {['Weekly', 'Monthly', 'All-time'].map(v => (
              <button 
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                  view === v ? 'bg-green-600 text-white' : 'bg-white text-green-600'
                }`}>
                {v}
              </button>
            ))}
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg content-hover">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Welcome back, Aleena!
            </h3>
            <p className="text-gray-600">
              Here's a summary of your eco-friendly activities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg content-hover">
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              Today's Progress
            </h3>
            <p className="text-gray-600 mb-2">
              Today: {todayRecycled} / {dailyGoal} items recycled
            </p>
            <div className="w-full bg-gray-200 h-4 rounded-full">
              <div
                className="bg-green-500 h-4 rounded-full text-xs text-white flex items-center justify-center"
                style={{
                  width: `${Math.min(
                    100,
                    (todayRecycled / dailyGoal) * 100
                  )}%`,
                }}
              >
                {`${Math.round((todayRecycled / dailyGoal) * 100)}%`}
              </div>
            </div>
            <p className="text-sm text-right text-gray-500 mt-2">
              {dailyGoal - todayRecycled > 0
                ? `${dailyGoal - todayRecycled} more to complete today's goal!`
                : "Goal achieved! 🎉"}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg content-hover">
            <h3 className="text-xl font-semibold text-green-700 mb-4">{view} Waste Distribution</h3>
            <div style={{ width: '100%', height: 300 }}>
              <PieChart width={400} height={300}>
                <Pie
                  data={wasteData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {wasteData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 content-hover">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center content-hover">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Total EcoPoints</h3>
            <p className="text-5xl font-bold text-green-800">
              <CountUp end={ecoPoints} duration={2.5} />
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center content-hover">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Total Items Logged</h3>
            <p className="text-5xl font-bold text-green-800">
              <CountUp end={totalWasteItems} duration={2.5} />
            </p>
          </div>
          <div className="content-hover"><LevelBadge points={ecoPoints} /></div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center content-hover">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Eco Streak</h3>
            <p className="text-3xl font-bold text-green-800">{ecoStreak} days 🔥</p>
          </div>
          <div className="content-hover"><Achievements /></div>
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-xl shadow-lg content-hover">
            <h4 className="text-lg font-semibold text-green-700 mb-2">
              💡 Eco Tip of the Day
            </h4>
            <p className="text-gray-700 italic">{`"${tip}"`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
