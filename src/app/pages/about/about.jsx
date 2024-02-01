import Loader from "../../components/loader/loader";
import { Link } from "react-router-dom";

const About = () => {

    if(window.scroller) window.scroller.destroy();

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