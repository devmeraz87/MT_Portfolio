import { Link } from "react-router-dom";
import PortfolioListContextProvider from "../../../contexts/portfolioListContext/portfolioListContext";
import PortfoliosMap from "./components/portfoliosMap";
import { FaArrowLeft } from "react-icons/fa"

const Portfolios = () => {

    return (
        <>
        <PortfolioListContextProvider>
            <div className="portfolios">
                <div className="container">
                    <div className="portfolios-contexts">
                        <div className="portfolios-header">
                            <div>
                                <h1 className="portfolios-heading">All My Projects</h1>
                                <p className="portfolios-lead">Here is all my Project Done By Me Alone! Happy Coding life </p>
                            </div>
                            <div className="back-link">
                                <Link to={"/"}>
                                    <span><FaArrowLeft /></span>
                                    <span>Back to Home</span>
                                </Link>
                            </div>
                        </div>
                        <PortfoliosMap/>
                    </div>
                </div>
            </div>
        </PortfolioListContextProvider>
        </>
    );
}
 
export default Portfolios;


