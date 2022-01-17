import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { ContentWrapper } from "./Layout.elements";

const Layout = () => {
  return (
    <>
      <NavBar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </>
  );
};

export default Layout;
