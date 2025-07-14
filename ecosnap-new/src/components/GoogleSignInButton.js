import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/config"; // Adjust the import based on your Firebase config file

const GoogleSignInButton = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in: ", user);
      // You can handle user data here (e.g., save to state or context)
    } catch (error) {
      console.error("Error during sign-in: ", error);
    }
  };

  return (
    <button onClick={handleSignIn} className="bg-blue-500 text-white p-2 rounded">
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;