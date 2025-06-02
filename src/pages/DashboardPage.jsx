import { useAuth } from "../contexts/AuthContext";
import { useEquipment } from "../contexts/EquipmentContext";
import { useRentals } from "../contexts/RentalsContext";
import { useMaintenance } from "../contexts/MaintenanceContext";
import KPICards from "../components/Dashboard/KPICards";
import Charts from "../components/Dashboard/Charts";
import Categories from "../components/Dashboard/Categories";
import DashboardPreview from "../components/Dashboard/EquipmetPreview";
import Banner from "../components/Dashboard/Banner";

export default function DashboardPage() {
  const { equipment } = useEquipment();
  const { rentals } = useRentals();
  const { maintenance } = useMaintenance();
  const { role } = useAuth();

  const totalEquipment = equipment.length;
  const available = equipment.filter(e => e.status === "Available").length;
  const rented = equipment.filter(e => e.status === "Rented").length;
  const overdue = rentals.filter(r =>
    r.status === "Rented" && new Date(r.endDate) < new Date()
  ).length;
  const upcomingMaintenance = maintenance.filter(m =>
    new Date(m.date) > new Date() && new Date(m.date) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  ).length;

  

  return (
    <div className="min-h-screen bg-gray-100 p-4 pr-8">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold px-8">Dashboard</h1>
      </header>
      {(role === "User")?
       <Banner />
       :<KPICards
        totalEquipment={totalEquipment}
        available={available}
        rented={rented}
        overdue={overdue}
      />}
      {role != "User"? <Charts
        available={available}
        rented={rented}
        overdue={overdue}
        upcomingMaintenance={upcomingMaintenance}
      />: null}
      <Categories />
      <DashboardPreview />
    </div>
  );
}
