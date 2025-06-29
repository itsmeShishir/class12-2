import React from "react";
import AuthHeader from "../../Components/AuthHeader";
import { Outlet } from "react-router-dom";

function AuthMainPage() {
  return <>
    <AuthHeader />
    <Outlet />
  </>;
}

export default AuthMainPage;
