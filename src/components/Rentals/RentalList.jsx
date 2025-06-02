import React, { useState } from "react";
import { useRentals } from "../../contexts/RentalsContext";
import { useEquipment } from "../../contexts/EquipmentContext";
import { useAuth } from "../../contexts/AuthContext";

export default function RentalList({ onEdit, onDelete }) {
  const { rentals } = useRentals();
  const { equipment } = useEquipment();
  const { user } = useAuth();
  const [filter, setFilter] = useState({ status: "", equipmentId: "", customerId: "" });

  const USERS = [
    { id: "1", role: "Admin", email: "admin@entnt.in" },
    { id: "2", role: "Staff", email: "staff@entnt.in" },
    { id: "3", role: "Customer", email: "customer@entnt.in" },
  ];

  const filteredRentals = rentals.filter(r => {
    return (
      (!filter.status || r.status === filter.status) &&
      (!filter.equipmentId || r.equipmentId === filter.equipmentId) &&
      (!filter.customerId || r.customerId === filter.customerId)
    );
  });

  const getEquipmentName = (id) => equipment.find(e => e.id === id)?.name || "Unknown";
  const getCustomerEmail = (id) => USERS.find(u => u.id === id)?.email || "Unknown";

  return (
    <div>
     
      <div className="flex flex-wrap gap-3 mb-3">
        <select
          className="border rounded px-2 py-1"
          value={filter.status}
          onChange={e => setFilter(f => ({ ...f, status: e.target.value }))}
        >
          <option value="">All Statuses</option>
          <option value="Reserved">Reserved</option>
          <option value="Rented">Rented</option>
          <option value="Returned">Returned</option>
        </select>
        <select
          className="border rounded px-2 py-1"
          value={filter.equipmentId}
          onChange={e => setFilter(f => ({ ...f, equipmentId: e.target.value }))}
        >
          <option value="">All Equipment</option>
          {equipment.map(e => (
            <option key={e.id} value={e.id}>{e.name}</option>
          ))}
        </select>
        <select
          className="border rounded px-2 py-1"
          value={filter.customerId}
          onChange={e => setFilter(f => ({ ...f, customerId: e.target.value }))}
        >
          <option value="">All Customers</option>
          {USERS.filter(u => u.role === "Customer").map(u => (
            <option key={u.id} value={u.id}>{u.email}</option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Equipment</th>
              <th className="py-2 px-4 border-b">Customer</th>
              <th className="py-2 px-4 border-b">Period</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRentals.map(r => (
              <tr key={r.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{getEquipmentName(r.equipmentId)}</td>
                <td className="py-2 px-4 border-b">{getCustomerEmail(r.customerId)}</td>
                <td className="py-2 px-4 border-b">{r.startDate} to {r.endDate}</td>
                <td className="py-2 px-4 border-b">
                  <span className={`px-2 py-1 rounded text-xs
                    ${r.status === "Reserved" ? "bg-yellow-100 text-yellow-700"
                      : r.status === "Rented" ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"}`}>
                    {r.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b space-x-2">
                  {(user.role === "Admin" || user.role === "Staff") && (
                    <>
                      <button
                        onClick={() => onEdit(r)}
                        className="text-yellow-600 hover:text-yellow-800"
                        title="Edit"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(r.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {filteredRentals.length === 0 && (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-400">
                  No rental orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
