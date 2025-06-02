import React, { useState, useEffect } from "react";
import { useEquipment } from "../../contexts/EquipmentContext";

const USERS = [
  { id: "1", role: "Admin", email: "admin@entnt.in" },
  { id: "2", role: "Staff", email: "staff@entnt.in" },
  { id: "3", role: "Customer", email: "customer@entnt.in" },
];

const initialState = {
  equipmentId: "",
  customerId: "",
  startDate: "",
  endDate: "",
  status: "Reserved",
};

export default function RentalForm({ onSave, onCancel, editing }) {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const { equipment } = useEquipment();

  useEffect(() => {
    if (editing) {
      setForm(editing);
    } else {
      setForm(initialState);
    }
  }, [editing]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.equipmentId || !form.customerId || !form.startDate || !form.endDate) {
      setError("All fields are required.");
      return;
    }
    if (form.startDate > form.endDate) {
      setError("Start date must be before or equal to end date.");
      return;
    }
    setError("");
    onSave(form);
    setForm(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-4 max-w-lg"
    >
      <h3 className="text-lg font-semibold mb-3">
        {editing ? "Edit Rental Order" : "Create Rental Order"}
      </h3>
      {error && (
        <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-2">
          {error}
        </div>
      )}
      <div className="mb-2">
        <label className="block text-gray-700 text-sm mb-1">Equipment</label>
        <select
          name="equipmentId"
          value={form.equipmentId}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        >
          <option value="">Select Equipment</option>
          {equipment.map(e => (
            <option key={e.id} value={e.id}>{e.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="block text-gray-700 text-sm mb-1">Customer</label>
        <select
          name="customerId"
          value={form.customerId}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        >
          <option value="">Select Customer</option>
          {USERS.filter(u => u.role === "Customer").map(u => (
            <option key={u.id} value={u.id}>{u.email}</option>
          ))}
        </select>
      </div>
      <div className="mb-2 flex gap-2">
        <div className="flex-1">
          <label className="block text-gray-700 text-sm mb-1">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 text-sm mb-1">End Date</label>
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="block text-gray-700 text-sm mb-1">Status</label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
        >
          <option value="Reserved">Reserved</option>
          <option value="Rented">Rented</option>
          <option value="Returned">Returned</option>
        </select>
      </div>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editing ? "Update" : "Create"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
