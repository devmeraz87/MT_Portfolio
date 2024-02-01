import gsap, {Power3} from "gsap";
import { useEffect } from "react";
import ThemeSwitcher from "./components/theme-switcher";


const DefaultHeader = () => {

    useEffect(() => {

        const ScrollTo = document.querySelectorAll(".scroll-to");

        ScrollTo.forEach((scroll) => {
            scroll.addEventListener("click", () => {
                const id = "#" + scroll.dataset.to + "";
                
                gsap.to(window.scroller, {
                    duration: 0,
                    scrollTo: id,
                    ease: Power3.easeOut()
                })

            })
        })

    },[])

    

    return (
        <>

            <header className="header">
                <nav className="navigation-menu">
                    <div className="nav-header">
                        <div className="nav-brand-logo">
                            <a href="/">
                                <img src="/images/logo/logo.svg" alt="MeraZ" />
                            </a>
                        </div>
                        <ul className="nav-links">
                            <li><a className="nav-link-item scroll-to" data-to="about"><span>About</span></a></li>
                            <li><a className="nav-link-item scroll-to" data-to="skill"><span>Skills</span></a></li>
                            <li><a className="nav-link-item scroll-to" data-to="project"><span>Project</span></a></li>
                            <li><a className="nav-link-item scroll-to" data-to="contact"><span>Contact</span></a></li>
                        </ul>
                        <button className="nav-burger-button">
                            <div className="nav-burger-content">
                                <div className="nav-burger-bar--top">x</div>
                                <div className="nav-burger-bar--middle"></div>
                                <div className="nav-burger-bar--bottom"></div>
                            </div>
                        </button>
                    </div>
                </nav>
                <ThemeSwitcher />
            </header>

        </>
    );
}
 
export default DefaultHeader;