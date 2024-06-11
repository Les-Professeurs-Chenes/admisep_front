import "./App.css";
import "daisyui/dist/full.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import { getUserByToken } from "./helpers/User";
import Home from "./views/home/Home";

const user = await getUserByToken();
const user_logged_in = user.id !== undefined;

const queryClient = new QueryClient({});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={user_logged_in ? <Home /> : <Login />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
