import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { HttpService } from "../services/httpService";

function ProtectedRout({ authorized, setAuthorized, setUser }) {
  useEffect(() => {
    const authorization = async () => {
      if (authorized) return;
      const user = await HttpService.autorized();
      if (user) {
        setAuthorized(true);
        setUser(user);
      }
    };

    authorization();
  }, [setAuthorized, setUser, authorized]);

  return authorized ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRout;
