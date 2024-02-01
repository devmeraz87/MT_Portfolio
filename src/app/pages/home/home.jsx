import { useState } from "react";
import { useScroll } from "../../../hooks/useScroll/useScroll";
import Loader from "../../components/loader/loader";
import { Link } from "react-router-dom";


import HomeHero from "./hero/hero";
import HomeSections from "./sections/sections";
import DefaultHeader from "../../components/headers/defaultHeader";
import DefaultFooter from "../../components/footers/defaultFooter";
// import Footer from "../../../components/footer/footer";

const Home = () => {
    const [loaded, setLoaded] = useState(false);

    // >> Smooth Scroller
       useScroll(true);
    // >> Smooth Scroller
    
    return (
        <>
            <Loader
                loaded={loaded}
                setLoaded={setLoaded}
                title={"Md MeraZ Ali"} 
            />
            <DefaultHeader />
            <div data-scroll-container className="__MT__scroll">
                <HomeHero loaded={loaded} />
                <HomeSections />
                <DefaultFooter />
            </div>

        </>
    );
}
 
export default Home;