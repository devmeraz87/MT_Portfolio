import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

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
                        <div className="home-contact-right"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default HomeContact;