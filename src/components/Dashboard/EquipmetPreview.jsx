import { useEquipment } from "../../contexts/EquipmentContext";
import EquipmentCard from "../Equipment/EquipmentCard";
import { useAuth } from "../../contexts/AuthContext";


const DashboardPreview = ()=> {

  const { equipment } = useEquipment();
  const { navigate } = useAuth();

  const previewEquipments = equipment.slice(0, 4);

  return (
      <div className="mt-15 px-8">
        <h2 className="text-2xl font-semibold mb-2">Featured Equipments</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {previewEquipments.map((eq) => (
            <EquipmentCard key={eq.id} Equipment={eq} />
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 mb-4">
          
          <button
            onClick={()=>navigate("/equipments")}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dull text-sm"
          >
            Show All Equipments
          </button>
        </div>
      </div>
  );
}

export default DashboardPreview;
