import LoginRegister from "./Components/LoginRegister";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Recipes from "./Components/Recipes";
import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";

function App() {

  return (
    <div className="overflow-auto scrollbar-hide">
    <BrowserRouter >
    <Navbar/>
      <Routes>
        <Route path="/" element={<HeroSection/>}></Route>
        <Route path="/Recipes" element={<Recipes/>}></Route>
        <Route path="/AboutSection" element={<AboutSection/>}></Route>
        <Route path="/ContactUs" element={<ContactSection/>}></Route>
        <Route path="/LoginRegister" element={<LoginRegister />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
