import React from 'react';

const PointsDisplay = ({ points }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
      <h3 className="text-xl font-semibold text-green-700 mb-2">
        My EcoPoints
      </h3>
      <p className="text-4xl font-bold text-green-800">{points}</p>
    </div>
  );
};

export default PointsDisplay;