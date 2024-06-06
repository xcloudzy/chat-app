import { Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Authenticated = true;

const DashboardLayout = () => {
  if (!Authenticated) {
    return <Navigate to="/auth/login" />;
  }
  return (
    <Stack direction="row">
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
