import { useEffect, useState } from "react";
import { useScroll } from "../../../hooks/useScroll";
import Loader from "../../components/loader/loader";
import { Link } from "react-router-dom";


import HomeHero from "./hero/hero";
import HomeSections from "./sections/sections";
import Footer from "../../../components/footer/footer";

const Home = () => {
    const [loaded, setLoaded] = useState(false);
    

    useEffect(() => {

        if(loaded) {
            useScroll()
        }

    },[loaded])
 
    return (
        <>
            <Loader
                loaded={loaded}
                setLoaded={setLoaded}
                title={"Md MeraZ Ali"} 
            />

            <div className="__MT__scroll">

                {/* Sections */}

                <HomeHero loaded={loaded} />
                <HomeSections />

                {/* Sections */}
                <Footer />


            </div>

        </>
    );
}
 
export default Home;