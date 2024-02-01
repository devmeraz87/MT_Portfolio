import { Link } from "react-router-dom";

const FormsHeader = ({showFormsNav, handleFormsNav}) => {
    

 
    return (
        <>
            <div className={`forms-nav ${showFormsNav ? "forms-nav-active-under-768" : ""}`}>
                <div className="forms-nav-header">
                    <h1 className="forms-nav-heading">Forms List</h1>
                </div>
                <div className="forms-nav-container">
                    <ul className="forms-nav-links">
                        <li><Link onClick={handleFormsNav} className="forms-nav-link" to={"/forms"}>Forms</Link></li>
                        <li><Link onClick={handleFormsNav} className="forms-nav-link" to={"add-skill"}>Add Skill</Link></li>
                    </ul>
                </div>
            </div>
            <div onClick={handleFormsNav} className={`forms-nav-overlay ${showFormsNav ? "forms-nav-overlay-active-under-768" : ""}`}></div>
        </>
    );
}
 
export default FormsHeader;