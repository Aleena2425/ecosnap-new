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
    <header className="bg-white border-b shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-green-700 flex items-center">
        <span role="img" aria-label="leaf" className="mr-2">🌿</span>
        EcoSnap
      </div>
      <div className="flex gap-4 items-center">
        {!loggedIn ? (
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
            onClick={() => setShowModal(true)}
          >
            Login
          </button>
        ) : (
          <span className="text-green-700 font-medium">👋 Welcome, Aleena</span>
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

