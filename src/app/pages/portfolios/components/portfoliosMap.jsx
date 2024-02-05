import PortfolioDLink from "../../../ui/portfolio-details-link/portfolio-details-link";
import { usePortfolioListContext } from "../../../../contexts/portfolioListContext/portfolioListContext";

const PortfoliosMap = () => {

    const { portfolios, isLoading } = usePortfolioListContext();

    return (
        <>
            <div className="portfolio-items">
                {portfolios?.map(portfolio => (
                 <PortfolioMapItem 
                    photoUrl={portfolio.photoUrl}
                    projectName={portfolio.projectName}
                    projectDetails={portfolio.projectDetails}
                    webUrl={portfolio.websiteUrl}
                    codeUrl={portfolio.RepositoryUrl}
                  />
                ))}
                {isLoading && (
                    <span className="section-lead">Loading...</span>
                )}
            </div>
        </>
    )
}

export default PortfoliosMap;


const PortfolioMapItem = ({photoUrl, projectName, projectDetails, webUrl, codeUrl}) => {

    return(
        <>
            <div className="portfolio-item">
                <div className="portfolio-img">
                    <img src={photoUrl} alt="" />
                </div>
                <div className="portfolio-details">
                    <div className="portfolio-name">{projectName}</div>
                    <p className="portfolio-lead">{projectDetails.slice(0, 30   )}...</p>
                    <div className="portfolio-links">
                        <PortfolioDLink linkPath={webUrl} linkText={"Live here"} />
                        <PortfolioDLink linkPath={codeUrl} linkText={"Code"} />
                    </div>
                </div>
            </div>
        </>
    )
}