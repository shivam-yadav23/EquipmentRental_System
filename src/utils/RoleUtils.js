// Utility functions for role-based access

export function canEditEquipment(role) {
  return role === "Admin" || role === "Staff";
}

export function canViewMaintenance(role) {
  return role === "Admin" || role === "Staff";
}

export function canCreateRental(role) {
  return role === "Admin" || role === "Staff";
}

export function canViewDashboard(role) {
  return role === "Admin" || role === "Staff";
}
