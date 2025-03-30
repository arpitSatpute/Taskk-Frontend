import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try{
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}auth/login`, { email, password });
        const { accessToken } = response.data.data;
        localStorage.setItem('accessToken', accessToken);
        
        console.log('Login successful');
        return response.data;
        }
        
        catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const signup = async (data) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}auth/signup`, data);
            console.log('Signup successful');
            return response.data;
        } catch(error) {
            console.error('Signup failed:', error);
            throw error;
        };
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        setUser(null);
        console.log('Logout successful');
    };
    
    const value = {
        user,
        login,
        signup,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
  