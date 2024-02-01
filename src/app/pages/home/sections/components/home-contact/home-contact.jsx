import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import HomeContactForm from "./components/home-contact-form";

const HomeContact = () => {
    
 
    return (
        <>
            <div id="contact" className="home-contact">
                <div className="container">
                    <div className="home-contact-contexts">
                        <div className="home-contact-left">
                            <h1 className="section-heading">
                                <span>Got a project?</span>
                                <span>Let's talk</span>
                            </h1>
                            <p className="section-lead">
                                <span>Sed ut perspiciatis unde omnis iste natus error sit</span>
                                <span>voluptatem accusantium.</span>
                            </p>
                            <Link className="_global_link_04MT" to={"mailto:devmeraz87@gmail.com"}>
                                <span className="__flex">
                                    <span>devmeraz87.com</span>
                                    <span>
                                        <div className="_arrow_right">
                                            <BiRightArrowAlt />
                                        </div>
                                    </span>
                                </span>
                            </Link>
                        </div>
                        <div className="home-contact-right">
                            <h1 className="section-heading">
                                <span>Estimate your Project?</span>
                                <span>Let me know here.</span>
                            </h1>
                            <div className="home-contact-form-container">
                                <HomeContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default HomeContact;