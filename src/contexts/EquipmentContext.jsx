import { createContext, useContext, useState, useEffect } from "react";
import { getData, setData } from "../utils/localStorageUtils.js";
import { equipmentData } from "../assets/assets.js"


const EquipmentContext = createContext();

export function EquipmentProvider({ children }) {
  const [equipment, setEquipment] = useState(() => getData("equipment", equipmentData));


  useEffect(() => {
    setData("equipment", equipment);
  }, [equipment]);

  // CRUD operations
  const addEquipment = (item) => {
    setEquipment((prev) => [...prev, { ...item, id: "eq" + Date.now() }]);
  };

  const updateEquipment = (id, updated) => {
    setEquipment((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteEquipment = (id) => {
    setEquipment((prev) => prev.filter((item) => item.id !== id));
  };

  const getEquipmentById = (id) => equipment.find((item) => item.id === id);

  return (
    <EquipmentContext.Provider value={{ equipment, addEquipment, updateEquipment, deleteEquipment, getEquipmentById }}>
      {children}
    </EquipmentContext.Provider>
  );
}

export function useEquipment() {
  return useContext(EquipmentContext);
}
