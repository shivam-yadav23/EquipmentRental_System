import React from "react";
import { useEquipment } from "../../contexts/EquipmentContext";

export default function MaintenanceList({ records, onEdit, onDelete }) {
  const { equipment } = useEquipment();

  const getEquipmentName = (id) =>
    equipment.find((e) => e.id === id)?.name || "Unknown";

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Equipment</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Notes</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec) => (
            <tr key={rec.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{getEquipmentName(rec.equipmentId)}</td>
              <td className="py-2 px-4 border-b">{rec.date}</td>
              <td className="py-2 px-4 border-b">{rec.type}</td>
              <td className="py-2 px-4 border-b">{rec.notes}</td>
              <td className="py-2 px-4 border-b space-x-2">
                <button
                  onClick={() => onEdit(rec)}
                  className="text-yellow-600 hover:text-yellow-800"
                  title="Edit"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(rec.id)}
                  className="text-red-600 hover:text-red-800"
                  title="Delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {records.length === 0 && (
            <tr>
              <td colSpan={5} className="py-4 text-center text-gray-400">
                No maintenance records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
