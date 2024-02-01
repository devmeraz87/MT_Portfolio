import { useEffect } from "react";
import { Routes, Route, useLocation  } from "react-router-dom"


import Home from "./app/pages/home/home";
import About from "./app/pages/about/about";
import Forms from "./app/pages/forms/forms";
import AddSkill from "./app/pages/forms/add-skill/add-skill";

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
 
  return (
    <>
      <div className="_MeraZMT">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/forms" element={<Forms />}> 
            <Route path="add-skill" element={<AddSkill />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}
 
export default MeraZ;