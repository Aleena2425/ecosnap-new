import React, { useState } from "react";

function Settings() {
  const [email] = useState("aleena@example.com");
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("normal");
  const [highContrast, setHighContrast] = useState(false);
  const [audioNarration, setAudioNarration] = useState(true);

  return (
    <div className="p-6 max-w-2xl">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Settings</h2>

      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">👤 Account</h3>
        <label className="block text-sm text-gray-600 mb-1">Email Address</label>
        <input
          type="email"
          disabled
          value={email}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-700"
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">⚙️ Preferences</h3>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Font Size</label>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300"
          >
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="xl">Extra Large</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={highContrast}
            onChange={(e) => setHighContrast(e.target.checked)}
            className="w-4 h-4"
            id="contrast"
          />
          <label htmlFor="contrast" className="text-sm text-gray-600">
            Enable High Contrast Mode
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={audioNarration}
            onChange={(e) => setAudioNarration(e.target.checked)}
            className="w-4 h-4"
            id="narration"
          />
          <label htmlFor="narration" className="text-sm text-gray-600">
            Enable Audio Narration
          </label>
        </div>
      </div>
    </div>
  );
}

export default Settings;

