import { Routes, Route } from "react-router-dom"


import Header from "./components/header/header";
import Home from "./apps/pages/home/home";
import About from "./apps/pages/about/about";
import Footer from "./components/footer/footer";


const MeraZ = () => {
  
 
  return (
    <>
      <div className="_MeraZMT">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
 
export default MeraZ;