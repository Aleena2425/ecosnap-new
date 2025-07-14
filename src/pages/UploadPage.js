import React, { useState, useEffect, useRef } from "react";
import * as tmImage from "@teachablemachine/image";

export default function UploadPage() {
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [ecoPoints, setEcoPoints] = useState(0);
  const [model, setModel] = useState(null);
  const imageRef = useRef(null);

  // 🧠 Load history from localStorage
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("ecoSnapHistory");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
  let isMounted = true;

  const loadModel = async () => {
    if (!model) {
      const modelURL = "/tf-model/model.json";
      const metadataURL = "/tf-model/metadata.json";
      const loadedModel = await tmImage.load(modelURL, metadataURL);
      if (isMounted) {
        setModel(loadedModel);
      }
    }
  };

  loadModel();

  return () => {
    isMounted = false;
  };
}, [model]);

  const saveToHistory = (entry) => {
    const updated = [entry, ...history];
    setHistory(updated);
    localStorage.setItem("ecoSnapHistory", JSON.stringify(updated));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setResult(null);

      const img = new Image();
      img.src = imageUrl;

      img.onload = async () => {
        if (!model) return;

        const predictions = await model.predict(img);
        const best = predictions.reduce((a, b) =>
          a.probability > b.probability ? a : b
        );

        const instructionsMap = {
          "Recyclable": "Place this in the dry blue bin.",
          "Organic": "Compost this in your green bin.",
          "E-waste": "Take it to an authorized e-waste collection center.",
          "Hazardous": "Dispose safely at a hazardous waste facility.",
          "General": "Dispose in landfill waste bin.",
        };

        const ecoPointMap = {
          "Recyclable": 10,
          "Organic": 5,
          "E-waste": 15,
          "Hazardous": 0,
          "General": 2,
        };

        const finalResult = {
          label: best.className,
          category: best.className,
          instructions: instructionsMap[best.className] || "Dispose responsibly.",
          ecoPoints: ecoPointMap[best.className] || 0,
        };

        setResult(finalResult);
        setEcoPoints((prev) => prev + finalResult.ecoPoints);

        // 🧠 Save entry to history
        saveToHistory({
          timestamp: new Date().toISOString(),
          label: finalResult.label,
          category: finalResult.category,
          points: finalResult.ecoPoints,
          preview: imageUrl
        });
      };
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
            <img
              src={preview}
              alt="Uploaded"
              className="w-64 h-auto rounded-md mb-4"
            />
            <p className="text-sm text-gray-500 mb-4">Image uploaded successfully.</p>
            <div className="bg-green-100 text-green-800 p-4 rounded-xl w-full max-w-md shadow-md">
              {result ? (
                <>
                  <p className="font-semibold text-lg">
                    🗂 Classified as:{" "}
                    <span className="text-green-700">{result.label}</span>
                  </p>
                  <p className="text-sm mt-1 mb-2">
                    Category: <strong>{result.category}</strong>
                  </p>
                  <p className="text-sm text-gray-700 italic mb-2">
                    “{result.instructions}”
                  </p>
                  <div className="mt-2 bg-green-200 p-2 rounded-md text-center text-sm">
                    +{result.ecoPoints} EcoPoints awarded!
                  </div>

                  {/* 🔁 Classify another image */}
                  <button
                    onClick={() => {
                      setPreview(null);
                      setResult(null);
                    }}
                    className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                  >
                    Classify Another Image
                  </button>
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
