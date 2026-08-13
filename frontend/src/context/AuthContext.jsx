import { createContext, useState, useEffect } from 'react';
import api from '../services/api.js';

export const AuthContext = createContext(); // Ek khali "global container" banata hai jisme hum authentication ki information store karenge.

// AuthProvider: Ek wrapper component hai jo poore app (children) ko is container ka access deta hai.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

// (Page Reload hone par Login check karna)

useEffect(() => {
  // 1. Browser ki memory (localStorage) check karo
  const storedUser = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  // 2. Agar token mil gaya, matlab user ne pehle login kiya tha!
  if (storedUser && token) {
    setUser(JSON.parse(storedUser)); // Wapas React state me data daal do
  }
  
  setLoading(false); // Checking poori ho gayi
}, []); // [] ka matlab: Sirf page refresh/load par chalega

   const login = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data));
    setUser(data);
    return data;
  };

    const register = async (name, email, password) => {
    const { data } = await api.post('/auth/register', { name, email, password });
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data));
    setUser(data);
    return data;
  };

    const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

   return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};




