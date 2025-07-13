import React from "react";
import { getEcoLevel } from "../utils/ecoLevel";

function LevelBadge({ points }) {
  const level = getEcoLevel(points);
  const progress = level.next
    ? Math.min(100, Math.round((points / level.next) * 100))
    : 100;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-green-700">Level</h3>
        <span className="text-green-600 text-xl font-bold">
          {level.emoji} {level.name}
        </span>
      </div>
      {level.next && (
        <>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1 text-right">
            {points}/{level.next} EcoPoints to next level
          </p>
        </>
      )}
      {!level.next && (
        <p className="text-sm text-gray-600 mt-2 text-center">
          You’ve reached the highest rank! 🎉
        </p>
      )}
    </div>
  );
}

export default LevelBadge;
