import React from 'react';
import { FaCamera, FaRecycle, FaAward } from 'react-icons/fa';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white p-8 flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)',
      }}
    >
      <h1 className="text-7xl font-extrabold">EcoSnap</h1>
      <p className="text-2xl italic mt-2">Snap, Sort, Save the Planet.</p>

      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <FaCamera size={60} className="text-green-400 mb-4" />
            <h3 className="text-2xl font-semibold">1. Snap a Photo</h3>
            <p className="mt-2 text-lg">Take a picture of any waste item.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaRecycle size={60} className="text-green-400 mb-4" />
            <h3 className="text-2xl font-semibold">2. Get Guidance</h3>
            <p className="mt-2 text-lg">Our AI tells you how to recycle it.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaAward size={60} className="text-green-400 mb-4" />
            <h3 className="text-2xl font-semibold">3. Earn Rewards</h3>
            <p className="mt-2 text-lg">Collect EcoPoints for your efforts.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
        <p className="text-xl leading-relaxed">
          To empower individuals and communities to make a positive environmental impact through education and technology. We believe that small, everyday actions can lead to significant, lasting change for our planet.
        </p>
      </div>
    </div>
  );
}