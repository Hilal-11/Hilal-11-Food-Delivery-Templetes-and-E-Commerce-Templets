import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import StartAppScreen from "./InitialScreens/StartAppScreen";
import SecondScreen from "./InitialScreens/SecondScreen";
import ThirdScreen from "./InitialScreens/ThirdScreen";
function App() {
  return (
    <>
      <Routes>
      <Route element={<StartAppScreen />} path="/" />
      <Route element={<SecondScreen />} path="/introduce" />
      <Route element={<ThirdScreen />} path="/getStart" />

      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
    </>
    
  );
}

export default App;
