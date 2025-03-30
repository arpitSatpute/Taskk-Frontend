import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "./ApiClient";
import {jwtDecode} from "jwt-decode";

const Protected = ({ children, authenticated }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  // Refresh Token Function
  const refreshToken = async () => {
    try {
      console.log("Refreshing token...");
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await apiClient.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/auth/refresh`,
        { token: refreshToken }
      );
      const { accessToken } = response.data.data;
      localStorage.setItem("accessToken", accessToken);
      return true;
    } catch (error) {
      console.error("Failed to refresh token:", error);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return false;
    }
  };

  // Check Authentication Status
  const checkAuthStatus = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setLoader(false);
      navigate("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      // Check if token is expired
      if (decoded.exp < currentTime) {
        const refreshed = await refreshToken();
        if (!refreshed) {
          navigate("/login");
          return;
        }
      }

      // Redirect if authenticated but accessing a public route
      if (!authenticated && token) {
        navigate("/");
        return;
      }

    } catch (error) {
      console.error("Error decoding token:", error);
      navigate("/login");
    }

    setLoader(false);
  };

  useEffect(() => {
    checkAuthStatus();
  }, [navigate, authenticated]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
};

export default Protected;