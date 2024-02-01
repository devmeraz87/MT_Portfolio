import { Link } from "react-router-dom";
import { AiOutlineDribbble, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const DefaultFooter = () => {
    
 
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="content">
                        <div className="footer-context">
                            <div className="footer-logo">
                                <img src="/images/logo/logo.svg" alt="" />
                            </div>
                            <div className="footer-thanks">
                                <span className="footer-thanks-thik">Thanks for scrolling, </span>
                                <span>that's all folks.</span>
                            </div>
                            <div className="footer-social">
                                <Link to={"/"} data-cursor="-hoverable">
                                    <AiOutlineDribbble />
                                </Link>
                                <Link to={"/"} data-cursor="-hoverable">
                                    <AiOutlineInstagram />
                                </Link>
                                <Link to={"/"} data-cursor="-hoverable">
                                    <BiLogoLinkedin />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
 
export default DefaultFooter;