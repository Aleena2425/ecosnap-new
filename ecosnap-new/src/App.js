import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";
import RewardsPage from "./pages/RewardsPage";
import ActivityLog from "./pages/ActivityLog";
import Settings from "./pages/Settings";
import AboutUs from "./pages/AboutUs";
import Analytics from "./pages/Analytics";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseConfig from "./firebase/config";
import GoogleSignInButton from "./components/GoogleSignInButton";

function App() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in:", user);
      } else {
        console.log("No user is signed in.");
      }
    });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 bg-gray-50 p-4">
            <GoogleSignInButton />
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/rewards" element={<RewardsPage />} />
              <Route path="/activity" element={<ActivityLog />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/analytics" element={<Analytics />} />
              {/* Add more pages like Rewards, ActivityLog, etc. later */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;