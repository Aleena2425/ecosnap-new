import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar
} from "recharts";

const pointsData = [
  { date: "Jul 10", points: 20 },
  { date: "Jul 11", points: 40 },
  { date: "Jul 12", points: 55 },
  { date: "Jul 13", points: 75 },
  { date: "Jul 14", points: 100 },
];

const categoryData = [
  { name: "Recyclable", value: 45 },
  { name: "Compostable", value: 30 },
  { name: "Hazardous", value: 25 },
];

const dailyItems = [
  { day: "Mon", items: 3 },
  { day: "Tue", items: 1 },
  { day: "Wed", items: 4 },
  { day: "Thu", items: 2 },
  { day: "Fri", items: 3 },
];

const COLORS = ["#10B981", "#FBBF24", "#EF4444"];

function Analytics() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6">EcoStats</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Line Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">EcoPoints Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={pointsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="points" stroke="#10B981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Waste Categories</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Items Recycled per Day</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={dailyItems}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="items" fill="#34D399" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Analytics;
