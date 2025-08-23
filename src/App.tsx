import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import StartAppScreen from "./InitialScreens/StartAppScreen";
import SecondScreen from "./InitialScreens/SecondScreen";
import ThirdScreen from "./InitialScreens/ThirdScreen";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import VarificationCode from "./auth/VarificationCode";
import ForgetPassword from "./auth/ForgetPassword";
import ResetPassword from "./auth/ResetPassword";
import Home from "./main/Home";
function App() {
  return (
    <>
      <Routes>
      
      // Initial Screens
      <Route element={<StartAppScreen />} path="/" />
      <Route element={<SecondScreen />} path="/introduce" />
      <Route element={<ThirdScreen />} path="/getStart" />

      // Authentication Routes
      <Route element={<Signup />} path="/authentication/signup" />
      <Route element={<Login />} path="/authentication/login" />
      <Route element={<VarificationCode />} path="/authentication/varification" />
      <Route element={<ForgetPassword />} path="/authentication/forgetPassword" />
      <Route element={<ResetPassword />} path="/authentication/resetPassword" />



      <Route element={<Home />} path="/app/home" />


    </Routes>
    </>
    
  );
}

export default App;
