import * as tmImage from '@teachablemachine/image';
import { useEffect, useRef, useState } from 'react';

export default function WasteClassifier() {
  const [prediction, setPrediction] = useState(null);
  const [label, setLabel] = useState("Upload a waste image to classify");
  const imageRef = useRef(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await tmImage.load(
        '/tf-model/model.json',
        '/tf-model/metadata.json'
      );
      setModel(loadedModel);
    };
    loadModel();
  }, []);

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const img = imageRef.current;
    img.src = URL.createObjectURL(file);

    img.onload = async () => {
      const prediction = await model.predict(img);
      const best = prediction.reduce((a, b) => (a.probability > b.probability ? a : b));
      setPrediction(best);
      setLabel(`${best.className} (${(best.probability * 100).toFixed(2)}%)`);
    };
  };

  return (
    <div className="p-6 rounded-xl shadow-lg bg-white/80 text-center max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-green-700 mb-4">♻️ Waste Classifier</h2>
      <input type="file" accept="image/*" onChange={handleImage} className="mb-4" />
      <img ref={imageRef} alt="Selected" className="w-64 h-auto mx-auto rounded-lg" />
      <p className="mt-4 font-medium text-green-800">{label}</p>
    </div>
  );
}
