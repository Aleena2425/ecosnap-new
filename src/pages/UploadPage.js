import React, { useState } from "react";

export default function UploadPage() {
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [ecoPoints, setEcoPoints] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);

      // Simulate classification result
      setTimeout(() => {
        const fakeResult = {
          label: "Plastic Bottle",
          category: "Recyclable",
          instructions: "Rinse it and place in the plastic recycling bin.",
          ecoPoints: 10,
        };
        setResult(fakeResult);
        setEcoPoints((prev) => prev + fakeResult.ecoPoints);
      }, 1500);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Identify & Recycle</h2>
      <p className="text-gray-600 mb-6">
        Upload or capture an image of waste to receive recycling guidance.
      </p>

      <div className="border-2 border-dashed border-green-300 p-6 rounded-xl bg-white shadow-md mb-6">
        {!preview ? (
          <div className="text-center text-gray-400">
            <p className="mb-2">📸 Drop an image here or use the button below</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="file-input"
            />
            <label
              htmlFor="file-input"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Upload Image
            </label>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img src={preview} alt="Uploaded" className="w-64 h-auto rounded-md mb-4" />
            <p className="text-sm text-gray-500 mb-4">Image uploaded successfully.</p>
            <div className="bg-green-100 text-green-800 p-4 rounded-xl w-full max-w-md shadow-md">
              {result ? (
                <>
                  <p className="font-semibold text-lg">🗂 Classified as: <span className="text-green-700">{result.label}</span></p>
                  <p className="text-sm mt-1 mb-2">Category: <strong>{result.category}</strong></p>
                  <p className="text-sm text-gray-700 italic mb-2">“{result.instructions}”</p>
                  <div className="mt-2 bg-green-200 p-2 rounded-md text-center text-sm">
                    +{result.ecoPoints} EcoPoints awarded!
                  </div>
                </>
              ) : (
                <p className="italic text-gray-500">Analyzing image...</p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-right text-green-600 font-bold">
        Total EcoPoints: {ecoPoints}
      </div>
    </div>
  );
}
