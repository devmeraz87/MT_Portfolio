import { useEffect } from "react";
import { Routes, Route, useLocation  } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"


import Home from "./app/pages/home/home";
import About from "./app/pages/about/about";
import Forms from "./app/pages/forms/forms";
import AddSkill from "./app/pages/forms/add-skill/add-skill";
import AddPortfolio from "./app/pages/forms/add-portfolio/add-portfolio";
import Portfolios from "./app/pages/portfolios/portfolios";

const MeraZ = () => {

  const { pathname } = useLocation();
  
  useEffect(() => {

   window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    })

  },[pathname])

  useEffect(() => {
    const style = ["color: #eee", "background: #111", "padding: 8px"].join(";");
    console.log("%cMasterpiece Mevlan MeraZ™ ⚡ https://merazali.com", style);



  },[])

  useEffect(() => {
    if(window.navigator.onLine === false) {
      toast("No Internet Connection", {position: "bottom-left"})
    }
  },[window.navigator.onLine])




  return (
    <>
      <div className="_MeraZMT">
      <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/forms" element={<Forms />}> 
            <Route path="add-skill" element={<AddSkill />}></Route>
            <Route path="add-portfolio" element={<AddPortfolio />}></Route>
            <Route path="add-testimonial" element={<h1>Add Testimonial</h1>}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}
 
export default MeraZ;