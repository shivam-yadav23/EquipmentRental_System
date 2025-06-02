import React, { useState, useEffect } from "react";

const initialState = {
  name: "",
  category: "",
  condition: "",
  status: "Available",
};

export default function EquipmentForm({ onSave, onCancel, editing }) {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");

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
    if (!form.name.trim() || !form.category.trim() || !form.condition.trim()) {
      setError("All fields are required.");
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
        {editing ? "Edit Equipment" : "Add Equipment"}
      </h3>
      {error && (
        <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-2">
          {error}
        </div>
      )}
      <div className="mb-2">
        <label className="block text-gray-700 text-sm mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700 text-sm mb-1">Category</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700 text-sm mb-1">Condition</label>
        <input
          type="text"
          name="condition"
          value={form.condition}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block text-gray-700 text-sm mb-1">Status</label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
        >
          <option value="Available">Available</option>
          <option value="Rented">Rented</option>
        </select>
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
