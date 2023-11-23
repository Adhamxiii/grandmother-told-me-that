import React, { Children } from "react";
import { Outlet } from "react-router";

import Navbar from "../components/Navbar";
import Dialog from "../components/Dialog";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
