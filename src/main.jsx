import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout/Layout.jsx"; 
import Signup from "./components/auth/Signup.jsx";
import Login from "./components/auth/Login.jsx";
import Home from "./components/Home.jsx";
import TaskList from "./components/TaskList.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Protected from "./components/auth/Protected.jsx";
import { AuthProvider } from "./components/auth/AuthContext.jsx";
import AddTask from "./components/AddTask.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/task",
        element: 
        <Protected authenticated={true}>
          <TaskList />
        </Protected>,
      },
      {
        path: "/dashboard",
        element: 
        <Protected authenticated={true}>
          <Dashboard />
        </Protected>,
      },
      {
        path: "/task/add",
        element: 
        <Protected authenticated={true}>
          <AddTask />
        </Protected>,
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
