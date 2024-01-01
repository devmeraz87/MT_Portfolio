import { useEffect } from "react";
import gsap, { Power4 } from "gsap";
import { AiOutlineDribbble, AiFillLinkedin, AiOutlineInstagram, AiOutlineLink } from "react-icons/ai"

const HomeHero = ({ loaded }) => {


    useEffect(() => {

        if(loaded) {

            

        }

    }, [loaded])

    
    return (
        <>
            <div className="hero hero-home">
                <div className="container">
                    <div className="hero-context">
                      <div className="hero-context-left">
                        <p className="hero-context-subtitle">
                            <span>Web Developer !</span>
                        </p> 
                        <h1 className="hero-context-heading">
                            <span className="mevlan">
                                <span>Mevlan</span>
                            </span>
                            <span className="meraz">
                                <span>Mera<span>Z</span></span>
                            </span>
                        </h1>
                        <div className="hero-context-social">
                            <a href="http://dribbble.com/" target="_blank" rel="noopener noreferrer">
                                <AiOutlineDribbble />
                            </a>
                            <a href="http://instagram.com/" target="_blank" rel="noopener noreferrer">
                                <AiOutlineInstagram />
                            </a>
                            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <AiFillLinkedin />
                            </a>
                        </div>
                      </div>
                      <div className="hero-context-right">
                        {/* <div className="hero-context-img"> */}
                            {/* <img src="https://bennettfeely.com/clippy/pics/fierenze.jpg" alt="" /> */}
                            {/* <img src="https://merazmt.vercel.app/static/media/meraz_big_gallery_2.fe448817c70cd34ac512.jpg" alt="MeraZ" />
                        </div> */}
                      </div>
                    </div>
                </div>
                <svg className="hero-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path  fill="#252734" fillOpacity="1" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,202.7C672,192,768,192,864,208C960,224,1056,256,1152,234.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <div fill="#273036" className="hero-bg-img">
                    <img src="/images/hero/hero.jpg" alt="MeraZ" />
                </div>
            </div>

        </>
    );
}
 
export default HomeHero;