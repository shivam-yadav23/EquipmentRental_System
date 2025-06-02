import React, { useState } from "react";
import { useRentals } from "../contexts/RentalsContext";
import { useAuth } from "../contexts/AuthContext";
import RentalList from "../components/Rentals/RentalList";
import RentalForm from "../components/Rentals/RentalForm";
import RentalCalendar from "../components/Rentals/RentalCalendar";
import { canCreateRental } from "../utils/RoleUtils.js";

export default function RentalsPage() {
  const { addRental, updateRental, deleteRental } = useRentals();
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
    if (window.confirm("Are you sure you want to delete this rental order?")) {
      deleteRental(id);
    }
  };

  const handleSave = (item) => {
    if (editing) {
      updateRental(editing.id, item);
    } else {
      addRental(item);
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
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Rental Orders</h1>
          {canCreateRental(user.role) && (
            <button
              onClick={handleAdd}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Create Rental
            </button>
          )}
        </div>
        {showForm && (
          <RentalForm
            onSave={handleSave}
            onCancel={handleCancel}
            editing={editing}
          />
        )}
        <RentalList onEdit={handleEdit} onDelete={handleDelete} />
        <RentalCalendar />
      </div>
    </div>
  );
}
