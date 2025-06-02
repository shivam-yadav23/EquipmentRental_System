import React, { useState } from "react";
import { useMaintenance } from "../contexts/MaintenanceContext";
import MaintenanceList from "../components/Maintenance/MaintenanceList";
import MaintenanceForm from "../components/Maintenance/MaintenanceForm";
import { useAuth } from "../contexts/AuthContext";
import { canViewMaintenance } from "../utils/roleUtils.js";

export default function MaintenancePage() {
  const { maintenance, addMaintenance, updateMaintenance, deleteMaintenance } = useMaintenance();
  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  if (!canViewMaintenance(user.role)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-bold mb-2">Access Denied</h2>
          <p className="text-gray-600">You do not have permission to view maintenance records.</p>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    setEditing(null);
    setShowForm(true);
  };

  const handleEdit = (item) => {
    setEditing(item);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this maintenance record?")) {
      deleteMaintenance(id);
    }
  };

  const handleSave = (item) => {
    if (editing) {
      updateMaintenance(editing.id, item);
    } else {
      addMaintenance(item);
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
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Maintenance Records</h1>
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Maintenance
          </button>
        </div>
        {showForm && (
          <MaintenanceForm
            onSave={handleSave}
            onCancel={handleCancel}
            editing={editing}
          />
        )}
        <MaintenanceList
          records={maintenance}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
