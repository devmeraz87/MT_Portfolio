import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const FormsHeader = ({showFormsNav, setShowFormsNav}) => {
    
 
    return (
        <>
            <div className="forms-header">
                <div className="container">
                    <div className="forms-header-contexts">
                        <div className="logo&hamburger">
                            <div className="forms-hamburger">
                                <button onClick={() => setShowFormsNav(!showFormsNav)} className="hamburger-btn">
                                    <div className="hamburger-btn-icon"></div>
                                </button>
                            </div>
                            <div className="brand-logo">
                                <img src="/images/logo/logo.svg" alt="" />
                            </div>
                        </div>
                        <ul className="forms-header-links">
                            <li>
                                <Link to={"/"} className="forms-header-link">
                                    <span><FaArrowLeft /></span>
                                    <span>Back to Home</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default FormsHeader;