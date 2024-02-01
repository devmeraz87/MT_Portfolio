import { Link } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";

const PortfolioDLink = ({linkPath, linkText}) => {
 
    return(
        <Link to={linkPath} target="_blank">
            <span>{linkText}</span>
            <span><LuExternalLink /></span>
        </Link>
    );
}
 
export default PortfolioDLink;