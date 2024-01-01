import { Link } from "react-router-dom";
import {  BiRightArrowAlt } from "react-icons/bi"
import { LuExternalLink } from "react-icons/lu";

const HomePortfolio = () => {
    
 
    return (
        <>
            <div id="project" className="home-portfolio">
                <div className="container">
                    <div className="home-portfolio-grid">
                        <div className="grid-col">
                            <div className="home-portfolio-details">
                                <div className="section-subtitle">
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
                                    <a className="_global_link_04MT" href="/portfolio">
                                        <span className="__flex">
                                            <span>Explore more</span>
                                            <span>
                                                <div className="_arrow_right">
                                                   <BiRightArrowAlt />
                                                </div>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="portfolio-item">
                                <div className="portfolio-item-detls">
                                    <Link to={"/"} target="_blank">
                                        <span>Live here</span>
                                        <span><LuExternalLink /></span>
                                    </Link>
                                    <Link to={"/"} target="_blank">
                                        <span>Code</span>
                                        <span><LuExternalLink /></span>
                                    </Link>
                                </div>
                                <div className="portfolio-item-img">
                                    <img src="http://localhost:3000/images/web-showcase/seone.png" alt="Seone" />
                                </div>
                            </div>
                        </div>
                        <div className="grid-col">
                            <div className="portfolio-item">
                                <div className="portfolio-item-detls">
                                    <Link to={"/"} target="_blank">
                                        <span>Live here</span>
                                        <span><LuExternalLink /></span>
                                    </Link>
                                    <Link to={"/"} target="_blank">
                                        <span>Code</span>
                                        <span><LuExternalLink /></span>
                                    </Link>
                                </div>
                                <div className="portfolio-item-img">
                                    <img src="http://localhost:3000/images/web-showcase/beserver.png" alt="Seone" />
                                </div>
                            </div>
                            <div className="portfolio-item">
                                <div className="portfolio-item-detls">
                                    <Link to={"/"} target="_blank">
                                        <span>Live here</span>
                                        <span><LuExternalLink /></span>
                                    </Link>
                                    <Link to={"/"} target="_blank">
                                        <span>Code</span>
                                        <span><LuExternalLink /></span>
                                    </Link>
                                </div>
                                <div className="portfolio-item-img">
                                    <img src="http://localhost:3000/images/web-showcase/energetic.png" alt="Seone" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default HomePortfolio;