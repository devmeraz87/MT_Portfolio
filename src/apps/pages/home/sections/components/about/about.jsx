import GlobalLink from "../../../../../ui/globalLink/globalLink";

const HomeAbout = () => {
    
 
    return (
        <>
            <div id="about" className="home-about">
                <div className="container">
                    <div className="home-about-contexts">
                        <div className="home-about-left">
                            <h1 className="home-about-heading">About Me</h1>
                            <h3 className="home-about-subtitle">
                                <span>Web Developer. </span>
                                <span>Coder. </span>
                                <span>Designer. </span>
                            </h3>
                            <div className="home-about-lead">
                                <span>Creative and Innovative, Smart working person.</span>
                                <span>who love to Ride Bikes and a PhotoGrapher.</span>
                            </div>
                            <GlobalLink linkText={"Read More"} linkPath={"/about"} />
                        </div>
                        <div className="home-about-right"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default HomeAbout;