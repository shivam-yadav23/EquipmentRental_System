import React, { useState, useEffect } from "react";
import { useEquipment } from "../../contexts/EquipmentContext";

const initialState = {
  equipmentId: "",
  date: "",
  type: "",
  notes: "",
};

export default function MaintenanceForm({ onSave, onCancel, editing }) {
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
    if (!form.equipmentId || !form.date || !form.type.trim()) {
      setError("All fields except notes are required.");
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
        {editing ? "Edit Maintenance Record" : "Add Maintenance Record"}
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
          {equipment.map((e) => (
            <option key={e.id} value={e.id}>{e.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="block text-gray-700 text-sm mb-1">Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700 text-sm mb-1">Type</label>
        <input
          type="text"
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block text-gray-700 text-sm mb-1">Notes</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          rows={2}
        />
      </div>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editing ? "Update" : "Add"}
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
