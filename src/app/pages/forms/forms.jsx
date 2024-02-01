import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";


import FormsNav from "../../components/headers/formsHeaders/formsNav";
import FormsHeader from "../../components/headers/formsHeaders/formsHeader";
import { stopScroll } from "../../../hooks/useScroll/useScroll";

export const Forms = () => {
    const [showFormsNav, setShowFormsNav] = useState(false);
    const [showDefaultOutlet, setShowDefaultOutlet] = useState(false);

    // Stop Scroll
    stopScroll(true);

    // Router Hook
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/forms" || pathname === "/forms/") {
            setShowDefaultOutlet(true);
        } else {
            setShowDefaultOutlet(false);
        }
    }, [pathname]);

    const handleFormsNav = () => {
        setShowFormsNav(!showFormsNav);
    };

    return (
        <>
            <div className="forms">
                <FormsHeader
                    showFormsNav={showFormsNav}
                    setShowFormsNav={setShowFormsNav} />
                <div className="forms-nav-container">
                    <FormsNav
                        showFormsNav={showFormsNav}
                        handleFormsNav={handleFormsNav} />
                </div>
                <div className="forms-container">
                    <div className="forms-contexts">
                        {showDefaultOutlet ? (
                            <>
                                <DefaultFormsRouterContexts
                                    handleFormsNav={handleFormsNav} />
                            </>
                        ) : (
                            <>
                                <Outlet />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};


export default Forms;



const DefaultFormsRouterContexts = ({handleFormsNav}) => {

    return(
        <>
            <div className="default-forms-contexts">
                <div>
                    <h1>Forms</h1>
                    <p>Add Somthing if you have according to your forms!</p>
                    <button onClick={handleFormsNav} className="">Add Task</button>
                </div>
            </div>
        </>
    )
}