import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function Rewards() {
  const [ecoPoints, setEcoPoints] = useState(420);
  const [showConfetti, setShowConfetti] = useState(false);

  const rewards = [
    { id: 1, title: "Exclusive EcoSnap Sticker Pack", cost: 150, icon: "🌟" },
    { id: 2, title: "$5 Voucher for Sustainable Brands", cost: 500, icon: "💸" },
    {
      id: 3,
      title: "Certificate of Environmental Stewardship",
      cost: 1000,
      icon: "📜",
    },
    { id: 4, title: "Plant a Tree in Your Name", cost: 1500, icon: "🌳" },
  ];

  const [claimed, setClaimed] = useState([]);

  const handleClaim = (reward) => {
    if (ecoPoints >= reward.cost && !claimed.includes(reward.id)) {
      setEcoPoints(ecoPoints - reward.cost);
      setClaimed([...claimed, reward.id]);
      setShowConfetti(true);
    }
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const nextReward = rewards.find((r) => !claimed.includes(r.id) && r.cost > ecoPoints);
  const actionsToNextReward = nextReward ? Math.ceil((nextReward.cost - ecoPoints) / 10) : 0; // Assuming 10 points per action

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {showConfetti && <Confetti />}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-green-700">Redeem with Purpose</h1>
        <p className="text-gray-500 mt-2">Turn your EcoPoints into meaningful rewards.</p>
      </div>

      {/* EcoPoints Breakdown */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800">Your EcoPoints Balance</h2>
        <p className="text-5xl font-bold text-green-500 my-3">{ecoPoints}</p>
        {nextReward && (
          <p className="text-md text-gray-600">
            You're just <span className="font-bold text-green-600">{actionsToNextReward} actions</span> away from unlocking the "{nextReward.title}"!
          </p>
        )}
      </div>

      {/* Rewards Shop */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className={`bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between transition-all duration-300 ${claimed.includes(reward.id)
                ? "opacity-50"
                : "hover:shadow-2xl hover:scale-105"
              }`}>
            <div className="text-center">
              <div className="text-5xl mb-4">{reward.icon}</div>
              <h3 className="font-bold text-xl text-green-800">{reward.title}</h3>
              <p className="text-lg font-semibold text-gray-500 my-2">{reward.cost} EcoPoints</p>
            </div>
            <button
              disabled={ecoPoints < reward.cost || claimed.includes(reward.id)}
              onClick={() => handleClaim(reward)}
              className={`mt-4 w-full px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 ${
                claimed.includes(reward.id)
                  ? "bg-gray-400 cursor-not-allowed"
                  : ecoPoints >= reward.cost
                    ? "bg-green-500 hover:bg-green-600 shadow-lg"
                    : "bg-gray-300 cursor-not-allowed"
                }`}>
              {claimed.includes(reward.id) ? "🎉 Unlocked" : "Unlock Reward"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
