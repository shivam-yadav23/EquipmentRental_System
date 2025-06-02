import React from "react";
import { Link } from "react-router-dom";
import { useEquipment } from "../../contexts/EquipmentContext";
import { useAuth } from "../../contexts/AuthContext";
import { canEditEquipment } from "../../utils/RoleUtils.js";
import { equipmentData } from "../../assets/assets.js"

export default function EquipmentList({ onEdit, onDelete }) {
  //const { equipment } = useEquipment();
  const { user } = useAuth();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="py-2 pr-40 border-b">Name</th>
            <th className="py-2 pr-20 border-b">Category</th>
            <th className="py-2 pr-10 border-b">Condition</th>
            <th className="py-2 px-0 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {equipmentData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="py-2 px-20 border-b">
                <Link to={`/equipment/${item.id}`} className="text-blue-600 underline">
                  {item.name}
                </Link>
              </td>
              <td className="py-2 px-4 border-b">{item.category}</td>
              <td className="py-2 px-4 pl-8 border-b">{item.condition}</td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`px-2 ml-8 py-1 rounded text-xs ${
                    item.status === "Available"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="py-2 px-4 border-b space-x-2">
                <Link
                  to={`/equipments/${item.category}/${item.id}`}
                  className="text-gray-600 hover:text-blue-600"
                  title="View Details"
                >
                  View
                </Link>
                {canEditEquipment(user.role) && (
                  <>
                    <button
                      onClick={() => onEdit(item)}
                      className="text-yellow-600 hover:text-yellow-800"
                      title="Edit"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(item.id)}
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
          {equipmentData.length === 0 && (
            <tr>
              <td colSpan={5} className="py-4 text-center text-gray-400">
                No equipment found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
