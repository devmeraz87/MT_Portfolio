import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi"

const GlobalLink = ({linkText, linkPath, linkTarget}) => {
    
    return (
        <>
            <Link className="_global_link_04MT" href={linkPath} target={linkTarget}>
                <span className="__flex">
                    <span>{linkText}</span>
                    <span>
                        <div className="_arrow_right">
                            <BiRightArrowAlt />
                        </div>
                    </span>
                </span>
            </Link>
        </>
    );
}
 
export default GlobalLink;