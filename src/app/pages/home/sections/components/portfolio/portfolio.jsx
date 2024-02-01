import GlobalLink from "../../../../../ui/globalLink/globalLink";
import PortfolioItem from "../../../../../ui/portfolio-item/portfolio-item";

const HomePortfolio = () => {
    
 
    return (
        <>
            <div id="project" className="home-portfolio">
                <div className="container">
                    <div className="home-portfolio-grid">
                        <div className="grid-col">
                            <div className="home-portfolio-details">
                                <div className="section-subtitle home-portfolio-section-subtitle">
                                    <div className="line"></div>
                                    <span>Portfolio</span>
                                </div>
                                <div className="section-heading">
                                    <span>Any Type Of Query</span>
                                    <span>& Discussion.</span>
                                </div>
                                <p className="section-lead">
                                    <span>Sed ut perspiciatis unde omnis iste natus error sit</span>
                                    <span>voluptatem accusantium.</span>
                                </p>
                                <div>
                                    <GlobalLink linkText={"Explore more"} linkPath={"/portfolio"} />
                                </div>
                            </div>
                            <PortfolioItem imgLink={"/images/portfolio-images/seone.png"} name={"Seone"} />
                        </div>
                        <div className="grid-col">
                            <PortfolioItem imgLink={"/images/portfolio-images/beserver.png"} name={"Beserver"} />
                            <PortfolioItem imgLink={"/images/portfolio-images/energetic.png"} name={"Energetic"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default HomePortfolio;


