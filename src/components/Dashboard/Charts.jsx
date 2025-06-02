import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

export default function Charts({ available, rented, overdue, upcomingMaintenance }) {

  const doughnutData = {
    labels: ["Available", "Rented"],
    datasets: [
      {
        data: [available, rented],
        backgroundColor: ["#22c55e", "#3b82f6"],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ["Overdue Rentals", "Upcoming Maintenance"],
    datasets: [
      {
        label: "Count",
        data: [overdue, upcomingMaintenance],
        backgroundColor: ["#ef4444", "#f59e42"],
      },
    ],
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="flex bg-white p-4 h-50 md:h-70 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Available vs Rented</h3>
        <Doughnut data={doughnutData} />
      </div>
      <div className="bg-white p-4 h-50 md:h-70 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Overdue & Upcoming Maintenance</h3>
        <Bar data={barData} options={{ plugins: { legend: { display: false } } }} />
      </div>
    </div>
  );
}
