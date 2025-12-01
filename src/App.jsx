import React from "react";
import  Product  from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Reg from "./pages/Register";
import Abt from "./pages/About";
import Layout from "./Layout";
import Welcome from "./components/welcome_pg";
import Viewproduct from "./pages/Viewproduct";
import Demo from "./components/demo";
import UserInfoProvider from "./providers/UserInfoProvider";
import LinkProvider from "./providers/LinksProvider";
import Logout from "./components/Logout";
import Register from "./components/Intial";
import Demo4 from "./pages/Demo4";
import Demo5 from "./pages/Demo5";

function App() {
  return (
    <>
    <LinkProvider>
    <UserInfoProvider>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="viewproduct/:id" element={<Viewproduct/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="about" element={<Abt/>}/>
        <Route path="logout" element={<Logout/>}/>
        <Route path="demo" element={<Demo4/>}/>
        <Route path="demo5" element={<Demo5/>}/>

      </Route>
      {/* <Route path="demo" element={<Demo/>}/> */}
    </Routes>
    
    </UserInfoProvider>
    </LinkProvider>

    

    

    </>
  )
  
}
export default App;