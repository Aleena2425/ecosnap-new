import React from "react";
import GoogleSignInButton from "../components/GoogleSignInButton";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <GoogleSignInButton />
    </div>
  );
};

export default Dashboard;