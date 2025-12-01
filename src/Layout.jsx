import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/navbar";
import Foot from "./components/Footer";
import Login from "./components/login";

const Layout = () => {
    return(
        <>
        <Nav/>
        <main><Outlet/></main>
        <Foot/>
        </>
    )
}
export default Layout;