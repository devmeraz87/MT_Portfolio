import { Routes, Route } from "react-router-dom"


import Header from "./components/header/header";
import Home from "./apps/pages/home/home";
import About from "./apps/pages/about/about";

import Forms from "./apps/pages/forms/forms";

import Footer from "./components/footer/footer";
import AddSkill from "./apps/pages/forms/add-skill/add-skill";


const MeraZ = () => {
  
 
  return (
    <>
      <div className="_MeraZMT">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/add-skill" element={<AddSkill />} />
        </Routes>
      </div>
    </>
  );
}
 
export default MeraZ;