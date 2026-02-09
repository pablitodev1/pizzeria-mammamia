import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);

    const login = async (userEmail, password) => {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: userEmail, password }),
        });
        const data = await response.json();
        
        if (response.ok) {
            setToken(data.token); 
            setEmail(data.email); 
        } else {
            alert(data.error || "Error al iniciar sesión");
        }
    };

    const register = async (userEmail, password) => {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: userEmail, password }),
        });
        const data = await response.json();

        if (response.ok) {
            setToken(data.token);
            setEmail(data.email);
        } else {
            alert(data.error || "Error al registrarse");
        }
    };

    const logout = () => {
        setToken(null);
        setEmail(null);
    };

    const getProfile = async () => {
        if (!token) return;
        const response = await fetch("http://localhost:5000/api/auth/me", {
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        });
        return await response.json();
    };

    return (
        <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
            {children}
        </UserContext.Provider>
    );
};