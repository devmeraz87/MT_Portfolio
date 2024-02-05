import { Link } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";

const PortfolioDLink = ({linkPath, linkText}) => {
 
    return(
        <Link to={linkPath} target={linkPath ? "_blank" : "_self"} rel="noopener noreferrer">
            <span>{linkText}</span>
            <span><LuExternalLink /></span>
        </Link>
    );
}
 
export default PortfolioDLink;