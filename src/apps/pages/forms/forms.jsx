import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";

const Forms = () => {
    
 
    return (
        <>
            <div className="forms">
                <div className="container">
                  <div className="forms-contexts">
                    <ul className="form-lists">
                            <li className="forms-list-item">
                                <Link to={"/add-skill"}>
                                    <span>Add Skill</span>
                                    <span className="_icon">
                                        <CiCirclePlus />
                                    </span>
                                </Link>
                            </li>
                            <li className="forms-list-item">
                                <Link to={"/add-review"}>
                                    <span>Add Review</span>
                                    <span className="_icon">
                                        <CiCirclePlus />
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Forms;