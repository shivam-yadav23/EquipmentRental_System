import { createContext, useContext, useState, useEffect } from "react";
import { getData, setData } from "../utils/localStorageUtils";

const INITIAL_RENTALS = [
  { id: "r1", equipmentId: "eq2", customerId: "3", startDate: "2025-06-01", endDate: "2025-06-05", status: "Reserved" },
];

const RentalsContext = createContext();

export function RentalsProvider({ children }) {
  const [rentals, setRentals] = useState(() => getData("rentals", INITIAL_RENTALS));
  const [showRentalForm, setShowRentalForm] = useState(false);

  useEffect(() => {
    setData("rentals", rentals);
  }, [rentals]);

  const addRental = (rental) => {
    setRentals((prev) => [...prev, { ...rental, id: "r" + Date.now() }]);
  };

  const updateRental = (id, updated) => {
    setRentals((prev) =>
      prev.map((rental) => (rental.id === id ? { ...rental, ...updated } : rental))
    );
  };

  const deleteRental = (id) => {
    setRentals((prev) => prev.filter((rental) => rental.id !== id));
  };

  const getRentalById = (id) => rentals.find((rental) => rental.id === id);

  return (
    <RentalsContext.Provider value={{ rentals, addRental, updateRental, deleteRental, getRentalById, showRentalForm, setShowRentalForm }}>
      {children}
    </RentalsContext.Provider>
  );
}

export function useRentals() {
  return useContext(RentalsContext);
}
