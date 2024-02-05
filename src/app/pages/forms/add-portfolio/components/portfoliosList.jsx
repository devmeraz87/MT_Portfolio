import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md"
import { usePortfolioListContext } from "../../../../../contexts/portfolioListContext/portfolioListContext";
import { useEffect } from "react";

const PortfolioList = () => {
    
    const {portfolios,  loading, lastDoc, noPosts, deletePortfolio } = usePortfolioListContext();

    return (
        <>
            <div className="portfolios-list-container">
                <div className="portfolios-list-header">
                    <h1 className="portfolios-list-heading">Portfolios List</h1>
                </div>
                <ul className="portfolios-list-items">
                    <PortfoliosMap portfolios={portfolios} deletePortfolio={deletePortfolio} />
                    {loading && (
                        <li className="loading">Loading...</li>
                    )}
                </ul>
            </div>
        </>
    );
}
 
export default PortfolioList;


/**
 * Portfolios Map
 */
const PortfoliosMap = ({portfolios, deletePortfolio}) => {

    
    return (
        <>
            {portfolios?.map(portfolio => (
                <li className="portfolios-list-item" key={portfolio.id}>
                    <div className="portfolio-image">
                        <img src={portfolio.photoUrl} alt="" />
                    </div>
                    <div className="portfolio-details">
                        <div className="portfolio-name">{portfolio.projectName}</div>
                        <div className="portfolio-lead">{portfolio.projectDetails.slice(0, 30)}...</div>
                        <div className="portfolio-links">
                            <Link to={portfolio.websiteUrl || "#"} target="_blank" rel="noopener noreferrer">Live</Link>
                            <Link to={portfolio.repositoryUrl || "#"} target={portfolio.repositoryUrl ? "_blank" : "_self"} rel="noopener noreferrer">Code</Link>
                        </div>
                    </div>
                    <div className="delete-button">
                        <button onClick={() => deletePortfolio(portfolio.id)}>
                            <MdDelete />
                        </button>
                    </div>
                </li>
            ))}
        </>
    )
}