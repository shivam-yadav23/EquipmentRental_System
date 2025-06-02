import React, { useState } from "react";
import { useEquipment } from "../contexts/EquipmentContext";
import { useAuth } from "../contexts/AuthContext";
import EquipmentList from "../components/Equipment/EquipmentList";
import EquipmentForm from "../components/Equipment/EquipmentForm";
import { canEditEquipment } from "../utils/RoleUtils.js";

export default function EquipmentPage() {
  const { addEquipment, updateEquipment, deleteEquipment } = useEquipment();
  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  const handleAdd = () => {
    setEditing(null);
    setShowForm(true);
  };

  const handleEdit = (item) => {
    setEditing(item);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this equipment?")) {
      deleteEquipment(id);
    }
  };

  const handleSave = (item) => {
    if (editing) {
      updateEquipment(editing.id, item);
    } else {
      addEquipment(item);
    }
    setShowForm(false);
    setEditing(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditing(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Equipment Inventory</h1>
          {canEditEquipment(user.role) && (
            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Equipment
            </button>
          )}
        </div>
        {showForm && (
          <EquipmentForm
            onSave={handleSave}
            onCancel={handleCancel}
            editing={editing}
          />
        )}
        <EquipmentList onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}
