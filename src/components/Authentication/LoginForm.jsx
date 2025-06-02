import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";


export default function LoginForm() {
  const { handleLogin, role } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
      <div>
        <form onSubmit={(e)=>handleLogin(e, email, password)}  className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
            <p className="text-2xl font-medium m-auto">
                <span className="text-indigo-500">{role}</span>Login
            </p>
            
            <div className="w-full ">
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="password" required />
            </div>
            <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                Login
            </button>
        </form>
      </div>
  );

}

