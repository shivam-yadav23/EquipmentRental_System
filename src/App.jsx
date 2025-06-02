import './App.css';
import {Toaster} from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import EquipmentPage from "./pages/EquipmentPage";
import RentalsPage from "./pages/RentalsPage";
import MaintenancePage from "./pages/MaintenancePage";
import NotificationCenter from "./components/Notifications/NotificationCenter";
import Navbar from "./components/Dashboard/Navbar";
import { useAuth } from "./contexts/AuthContext";
import AllEquipment from "./pages/AllEquipment";
import EquipmentDetails from "./components/Equipment/EquipmentDetails"
import EquipmentCategories from "./pages/EquipmentCategories";
import RentalOrderForm from "./components/Rentals/RentalOrderForm";
import { useRentals } from "./contexts/RentalsContext";
import WishList from "./components/WishList";
import RentalList from "./components/Rentals/RentalList";
import RentalCalendar from "./components/Rentals/RentalCalendar";
import Footer from "./components/Dashboard/Footer";

function PrivateRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("sessionUser"));
  return user ? children : <Navigate to="/login" />;
}

// Place NotificationCenter at the root so it’s always visible
function NotificationRoot() {
  const { notifications, dismiss } = useNotification();
  return <NotificationCenter notifications={notifications} onDismiss={dismiss} />;
}

export default function App() {

  const { showRentalForm } = useRentals();
  const { role } = useAuth();

  return (
    <>
      <Navbar />
      {showRentalForm? <RentalOrderForm />: null}
      <Toaster />

      <div >
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path="/" element={<DashboardPage />} />
          <Route path="/equipments" element={<AllEquipment />} />
          <Route path="/equipments/:category" element={<EquipmentCategories />} />
          <Route path="/equipments/:category/:id" element={<EquipmentDetails />} />
          <Route path="/wishList" element={<WishList />} />
          {(role != "User") && <Route path="/admin/rental" element={<EquipmentPage />} />}
          {(role != "User") && <Route path="/admin/calendar" element={<RentalsPage />} />}
          {(role != "User") && <Route path='/admin/maintenance' element={<MaintenancePage />} />}

        </Routes>
      </div>
      <Footer />
    </>
  );
}
