import { useEffect, useState } from "react";
import { useScroll } from "../../../hooks/useScroll";
import Loader from "../../components/loader/loader";
import { Link } from "react-router-dom";

const About = () => {
    const [loaded, setLoaded] = useState(false);
    

    useEffect(() => {

        if(loaded) {
            useScroll()
        }

    },[loaded])
 
    return (
        <>
            <Loader title={"About Me"} />


            <Link to={"/"}>Home</Link>
            <img src="/images/hero/hero.jpg" alt="" />
            <img src="/images/hero/hero2.png" alt="" />

        </>
    );
}
 
export default About;