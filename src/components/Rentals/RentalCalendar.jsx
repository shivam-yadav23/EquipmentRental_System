import { useState } from "react";
import { useRentals } from "../../contexts/RentalsContext";
import { useEquipment } from "../../contexts/EquipmentContext";

function getDatesInMonth(year, month) {
  const date = new Date(year, month, 1);
  const dates = [];
  while (date.getMonth() === month) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return dates;
}

export default function RentalCalendar() {
  const { rentals } = useRentals();
  const { equipment } = useEquipment();
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(null);

  const year = today.getFullYear();
  const month = today.getMonth();
  const days = getDatesInMonth(year, month);

  const rentalsOnDate = (date) =>
    rentals.filter((r) =>new Date(r.startDate) <= date && new Date(r.endDate) >= date);

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h3 className="text-lg font-semibold mb-3">Rental Calendar (Monthly View)</h3>
      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((date) => {
          const isToday =
            date.toDateString() === new Date().toDateString();
          const dayRentals = rentalsOnDate(date);
          return (
            <button
              key={date.toISOString()}
              onClick={() => setSelectedDate(date)}
              className={`h-16 rounded border flex flex-col items-center justify-center
                ${isToday ? "border-blue-600" : "border-gray-200"}
                ${dayRentals.length > 0 ? "bg-blue-50" : "bg-white"}
                hover:bg-blue-100`}
            >
              <span className="font-semibold">{date.getDate()}</span>
              {dayRentals.length > 0 && (
                <span className="text-xs text-blue-600">{dayRentals.length} rental(s)</span>
              )}
            </button>
          );
        })}
      </div>
      {selectedDate && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2">
            Rentals on {selectedDate.toLocaleDateString()}
          </h4>
          <ul>
            {rentalsOnDate(selectedDate).map((r) => (
              <li key={r.id} className="text-sm text-gray-700">
                {equipment.find(e => e.id === r.equipmentId)?.name || "Unknown"} - {r.status}
                {" "}({r.startDate} to {r.endDate})
              </li>
            ))}
            {rentalsOnDate(selectedDate).length === 0 && (
              <li className="text-gray-400 text-sm">No rentals scheduled.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
