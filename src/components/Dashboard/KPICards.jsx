import React from "react";

export default function KPICards({ totalEquipment, available, rented, overdue}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 px-8">
      <div className="bg-[#FEF6DA] shadow rounded-lg p-4 flex flex-col items-center">
        <span className="text-gray-500 text-sm mb-1">Total Equipment</span>
        <span className="text-2xl font-bold">{totalEquipment}</span>
      </div>
      <div className="bg-[#E1F5EC] shadow rounded-lg p-4 flex flex-col items-center">
        <span className="text-gray-500 text-sm mb-1">Available</span>
        <span className="text-2xl font-bold text-green-600">{available}</span>
      </div>
      <div className="bg-[#FEE6CD] shadow rounded-lg p-4 flex flex-col items-center">
        <span className="text-gray-500 text-sm mb-1">Rented</span>
        <span className="text-2xl font-bold text-blue-600">{rented}</span>
      </div>
      <div className="bg-[#FEE0E0] shadow rounded-lg p-4 flex flex-col items-center">
        <span className="text-gray-500 text-sm mb-1">Overdue Rentals</span>
        <span className="text-2xl font-bold text-red-600">{overdue}</span>
      </div>
    </div>
  );
}
