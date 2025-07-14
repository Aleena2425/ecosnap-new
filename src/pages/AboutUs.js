import React from "react";

export default function AboutUs() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/2149895783/vector/waste-management-concept-a-man-carrying-trash-bags-with-a-smartphone-and-recycle-bin-graphic.jpg?s=612x612&w=0&k=20&c=z7Q77uOxgnqfktO65d13XRoJH4S7IATv1eIYWgusxbk=)",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 max-w-3xl text-center mx-4">
        <h1 className="text-4xl font-extrabold text-green-800 mb-4">
          About EcoSnap
        </h1>
        <p className="text-lg text-gray-700 italic mb-6">
          “One Snap at a Time, One Planet Forever”
        </p>
        <p className="text-gray-800 leading-relaxed mb-6">
          EcoSnap is more than just a tool — it's a mission. We empower students,
          communities, and eco-warriors to make sustainable choices by identifying
          waste, tracking impact, and turning small actions into collective change.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-green-900 font-semibold text-xl">
          <div>
            ♻️ <span className="block text-3xl font-bold">12,000+</span>
            Items Recycled
          </div>
          <div>
            👩‍🏫 <span className="block text-3xl font-bold">120+</span>
            Schools Onboarded
          </div>
          <div>
            🌎 <span className="block text-3xl font-bold">5</span>
            Countries Reached
          </div>
        </div>
      </div>
    </div>
  );
}
