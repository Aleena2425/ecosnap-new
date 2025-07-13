import React from "react";

function LoginModal({ isOpen, onClose, onLogin }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm relative">
        <button
          className="absolute top-2 right-3 text-gray-500 text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-green-700 mb-2">Welcome Back</h2>
        <p className="text-sm text-gray-500 mb-4">Join us in making the world cleaner, one snap at a time</p>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          className="w-full bg-green-600 text-white rounded-lg py-2 font-semibold hover:bg-green-700 mb-3"
          onClick={onLogin}
        >
          Continue with Email
        </button>

        <div className="text-center text-gray-400 text-sm mb-2">or</div>

        <button
          className="w-full bg-white text-green-600 border border-green-500 rounded-lg py-2 font-semibold hover:bg-green-50"
          onClick={onLogin}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
