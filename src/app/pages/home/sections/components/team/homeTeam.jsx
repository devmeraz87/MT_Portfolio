import { PiPenNib, PiMonitor } from "react-icons/pi"
import { IoCubeOutline } from "react-icons/io5"


const HomeTeam = () => {


    return (
        <>
            <div className="home-team">
                <div className="container">
                    <div className="home-team-contexts">
                        <div className="home-team-cards">
                            <TeamCard icon={<IoCubeOutline />} headingText={{ top: "Product", bottom: "Designer." }} projectNumber={0} />
                            <TeamCard icon={<PiPenNib />} headingText={{ top: "Branding", bottom: "Designer." }} projectNumber={0} />
                            <TeamCard icon={<PiMonitor />} headingText={{ top: "Full Stack", bottom: "Developer." }} projectNumber={0} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeTeam;


function TeamCard({ icon, projectNumber, headingText }) {

    return (

        <>
            <div className="home-team-cards-item">
                <div className="item-icon">
                    {icon}
                </div>
                <div className="project-name-and-number">
                    <div className="project-name">
                        <span>{headingText?.top}</span>
                        <span>{headingText?.bottom}</span>
                    </div>
                    <div className="project-number">{projectNumber} Projects</div>
                </div>
            </div>
        </>
    )
}