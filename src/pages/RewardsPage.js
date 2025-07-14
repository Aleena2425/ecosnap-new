import React, { useState } from "react";

export default function RewardsPage() {
  const history = JSON.parse(localStorage.getItem('ecoSnapHistory')) || [];
  const [ecoPoints, setEcoPoints] = useState(history.reduce((acc, item) => acc + (item.ecoPoints || 0), 0));
  const rewards = [
    { id: 1, title: "10% Off EcoBag", cost: 30 },
    { id: 2, title: "Digital Recycling Badge", cost: 50 },
    { id: 3, title: "E-Certificate of Sustainability", cost: 100 },
  ];

  const [claimed, setClaimed] = useState([]);

  const handleClaim = (reward) => {
    if (ecoPoints >= reward.cost) {
      setEcoPoints(ecoPoints - reward.cost);
      setClaimed([...claimed, reward.id]);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Your EcoPoints</h2>
      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <div className="text-xl font-semibold text-green-800">{ecoPoints} EcoPoints</div>
        <div className="text-sm text-gray-500 mb-2">Earn 100 points to unlock a new badge</div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="bg-green-400 h-full rounded-full"
            style={{ width: `${(ecoPoints / 100) * 100}%` }}
          ></div>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-700 mb-3">Available Rewards</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {rewards.map((reward) => (
          <div key={reward.id} className="bg-white rounded-xl p-4 shadow-md flex flex-col justify-between">
            <h4 className="font-bold text-green-700">{reward.title}</h4>
            <p className="text-sm text-gray-500 mb-2">{reward.cost} EcoPoints</p>
            {claimed.includes(reward.id) ? (
              <div className="text-sm text-green-500 font-semibold">🎉 Claimed</div>
            ) : (
              <button
                disabled={ecoPoints < reward.cost}
                onClick={() => handleClaim(reward)}
                className={`mt-2 px-3 py-1 rounded-md text-white text-sm ${
                  ecoPoints >= reward.cost
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                {ecoPoints >= reward.cost ? "Claim Reward" : "Not Enough Points"}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
