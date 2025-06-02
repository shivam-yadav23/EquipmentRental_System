import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const USERS = JSON.parse(import.meta.env.VITE_USERS_JSON);



const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("sessionUser")));
  const [role, setRole] = useState(() => {
    const savedUser = JSON.parse(localStorage.getItem("sessionUser"));
    return savedUser?.role || "User";
  });

  const [searchQuery, setSearchQuery] = useState({});
  const navigate = useNavigate();
  // Login function
  const handleLogin = (e, email, password) => {
    e.preventDefault();
    try{
      
      const foundUser = USERS.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      setRole(foundUser.role);
      localStorage.setItem("sessionUser", JSON.stringify(foundUser));
      navigate("/");
      toast.success("Logged In")
    }else{
      toast.error("Invalid username or password");
    }
    
    }catch(err){
      toast.error(err.message);
    }
    
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("sessionUser");
  };

  useEffect(() => {
    setRole(user?.role || "User");
  },[user]);

  return (
    <AuthContext.Provider value={{ user, handleLogin, logout, role, setRole, navigate, searchQuery, setSearchQuery }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
