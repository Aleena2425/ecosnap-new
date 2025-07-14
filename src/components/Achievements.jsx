import React from 'react';

const achievements = [
  { icon: '🎉', title: 'First Snap!', date: '2023-10-26' },
  { icon: '♻️', title: 'Recycled 100 items', date: '2023-10-28' },
  { icon: '🔥', title: '5-day streak', date: '2023-10-30' },
  { icon: '🌳', title: 'Eco-Warrior', date: '2023-11-01' },
];

const Achievements = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-green-700 mb-4">Achievements</h3>
      <div className="space-y-4">
        {achievements.map((ach, index) => (
          <div key={index} className="flex items-center">
            <div className="text-2xl mr-4">{ach.icon}</div>
            <div>
              <p className="font-semibold">{ach.title}</p>
              <p className="text-sm text-gray-500">{ach.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;