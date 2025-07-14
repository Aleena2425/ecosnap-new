import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";
import Rewards from "./pages/Rewards";
import ActivityLog from "./pages/ActivityLog";
import Settings from "./pages/Settings";
import AboutUs from "./pages/AboutUs";
import Analytics from "./pages/Analytics";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gradient-to-br from-green-100 to-green-300">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/activity" element={<ActivityLog />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
