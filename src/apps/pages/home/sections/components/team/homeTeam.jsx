import { PiPenNib, PiMonitor } from "react-icons/pi"
import { IoCubeOutline } from "react-icons/io5"


const HomeTeam = () => {
    
 
    return (
        <>
            <div className="home-team">
                <div className="container">
                    <div className="home-team-contexts">
                        <div className="home-team-cards">
                            <div className="home-team-cards-item">
                                <div className="item-icon">
                                    <IoCubeOutline />
                                </div>
                                <div className="project-name-and-number">
                                    <div className="project-name">
                                        <span>Product</span>
                                        <span>Designer.</span>
                                    </div>
                                    <div className="project-number">124 Projects</div>
                                </div>
                            </div>
                            <div className="home-team-cards-item">
                                <div className="item-icon">
                                    <PiPenNib />
                                </div>
                                <div className="project-name-and-number">
                                    <div className="project-name">
                                        <span>Branding</span>
                                        <span>Designer.</span>
                                    </div>
                                    <div className="project-number">37 Projects</div>
                                </div>
                            </div>
                            <div className="home-team-cards-item">
                                <div className="item-icon">
                                    <PiMonitor />
                                </div>
                                <div className="project-name-and-number">
                                    <div className="project-name">
                                        <span>Full Stack</span>
                                        <span>Developer.</span>
                                    </div>
                                    <div className="project-number">62 Projects</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default HomeTeam;