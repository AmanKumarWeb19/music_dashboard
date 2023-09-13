import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginData from "../components/Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginData />} />
    </Routes>
  );
};

export default AllRoutes;
