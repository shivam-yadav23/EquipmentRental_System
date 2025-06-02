import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { EquipmentProvider } from './contexts/EquipmentContext.jsx'
import { MaintenanceProvider } from './contexts/MaintenanceContext.jsx'
import { NotificationProvider } from './contexts/NotificationContext.jsx'
import { RentalsProvider } from './contexts/RentalsContext.jsx'
import { WishListContextProvider } from './contexts/WishListContext.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <EquipmentProvider>
    <WishListContextProvider>
    <RentalsProvider>
    <NotificationProvider>
    <MaintenanceProvider>
    <EquipmentProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
    </EquipmentProvider>
    </MaintenanceProvider>
    </NotificationProvider>
    </RentalsProvider>
    </WishListContextProvider>
    </EquipmentProvider>
    </BrowserRouter>
)
