import React, { useState } from "react";
import LoginModal from "./LoginModal";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    setShowModal(false);
  };

  return (
    <header className="bg-green-100 border-b shadow-sm p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-green-700">EcoSnap</div>
      <div className="flex gap-4 items-center">
        {!loggedIn ? (
          <button
            className="bg-green-600 text-white px-4 py-1.5 rounded-lg hover:bg-green-700"
            onClick={() => setShowModal(true)}
          >
            Login
          </button>
        ) : (
          <span className="text-green-700 font-medium">👋 Aleena</span>
        )}
      </div>

      <LoginModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onLogin={handleLogin}
      />
    </header>
  );
}

export default Navbar;

