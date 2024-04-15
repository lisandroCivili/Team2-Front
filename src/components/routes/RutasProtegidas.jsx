import React from "react";
import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
  const admin = JSON.parse(sessionStorage.getItem("usuario")) || null;
  if (!admin) {
    return <Navigate to={"/login"}></Navigate>;
  } else {
    return children;
  }
};

export default RutasProtegidas;
