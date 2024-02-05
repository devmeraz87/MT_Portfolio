import PortfolioDLink from "../portfolio-details-link/portfolio-details-link";

const PortfolioItem = ({
    name,
    imgLink,
    liveLink,
    codeLink,
}) => {
 
    return (
        <>
            <div className="portfolio-item">
                <div className="portfolio-item-detls">
                    <PortfolioDLink linkPath={liveLink || "#"} linkText={"Live here"} />
                    <PortfolioDLink linkPath={codeLink || "#"} linkText={"Code"} />
                </div>
                <div className="portfolio-item-img">
                    <img src={imgLink} alt={name} />
                </div>
            </div>            
        </>
    );
}
 
export default PortfolioItem;