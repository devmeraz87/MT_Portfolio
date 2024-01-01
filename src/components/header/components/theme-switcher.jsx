import { useState } from "react";
import { useThemeContext } from "react-theme-contexts"

import { GoChevronLeft, GoChevronRight} from "react-icons/go"

const ThemeSwitcher = () => {
    const [showThemeSwitcherBtn, setShowThemeSwitcherBtn] = useState(false);
    const { theme, switchTheme } = useThemeContext(); 

    const handleShowAndHideThemeSwitcherButton = () => {
        setShowThemeSwitcherBtn(!showThemeSwitcherBtn);
        document.querySelector(".theme-switcher-wrapper").classList.toggle("theme-switcher-wrapper-active")
    }

 
    return (
        <>
            <div className="theme-switcher-wrapper">
                <div className="theme-switcher-show-hide-button">
                    <button onClick={handleShowAndHideThemeSwitcherButton}>
                        {showThemeSwitcherBtn ? (
                            <GoChevronRight />
                        ) : (
                            <GoChevronLeft />
                        )}
                    </button>
                </div>
                <div className="theme-switcher-button">
                    {theme === "dark" && (
                        <button onClick={() => switchTheme("light")} className="theme-button theme-button-dark">Light Mode</button>
                    )} 
                    {theme === "light" && (
                        <button onClick={() => switchTheme("dark")} className="theme-button theme-button-light">Dark Mode</button>
                    )} 
                </div>
            </div>            
        </>
    );
}
 
export default ThemeSwitcher;