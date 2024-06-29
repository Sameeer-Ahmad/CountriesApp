import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <AuthProvider>
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </AuthProvider>
  );
};

export default App;
