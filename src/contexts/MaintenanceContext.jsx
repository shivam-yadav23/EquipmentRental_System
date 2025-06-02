import { createContext, useContext, useState, useEffect } from "react";
import { getData, setData } from "../utils/localStorageUtils";

// Initial maintenance data
const INITIAL_MAINTENANCE = [
  { id: "m1", equipmentId: "eq1", date: "2025-05-20", type: "Routine Check", notes: "No issues found" },
];

const MaintenanceContext = createContext();


export function MaintenanceProvider({ children }) {
  const [maintenance, setMaintenance] = useState(() => getData("maintenance", INITIAL_MAINTENANCE));

  useEffect(() => {
    setData("maintenance", maintenance);
  }, [maintenance]);

  // CRUD operations
  const addMaintenance = (record) => {
    setMaintenance((prev) => [...prev, { ...record, id: "m" + Date.now() }]);
  };

  const updateMaintenance = (id, updated) => {
    setMaintenance((prev) =>
      prev.map((rec) => (rec.id === id ? { ...rec, ...updated } : rec))
    );
  };

  const deleteMaintenance = (id) => {
    setMaintenance((prev) => prev.filter((rec) => rec.id !== id));
  };

  const getMaintenanceByEquipment = (equipmentId) =>{
    maintenance.filter((rec) => rec.equipmentId === equipmentId);
  }

  return (
    <MaintenanceContext.Provider value={{ maintenance, addMaintenance, updateMaintenance, deleteMaintenance, getMaintenanceByEquipment }}>
      {children}
    </MaintenanceContext.Provider>
  );
}

export function useMaintenance() {
  return useContext(MaintenanceContext);
}
