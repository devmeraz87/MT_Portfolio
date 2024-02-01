import { useEffect, useState } from "react";
import gsap, { Expo } from "gsap";

// >> Custome hook
import { useLoader } from "../../../hooks/useLoader/useLoader";

import "./loader.scss";

const Loader = (props) => {
    const [$fn, $setFn] = useState(false);


    useEffect(() => {

        useLoader($setFn);

    },[])

    useEffect(() => {

        const loader = gsap.timeline();


        if($fn) {

            if(props.setLoaded) {
                props?.setLoaded(true);
            }

            loader.fromTo(".wrapper-curtain", {
                top: "40vh",
            }, {
                top: 0,
                duration: 2,
                ease: Expo.easeInOut,
            }, 1);

            loader.to(".wrapper-curtain", {
                y: "-25vh",
                duration: 2,
                ease: Expo.easeInOut,
            }, 3)

            loader.to(
                ".wrapper-preloader",
                {
                  top: "-100%",
                  duration: 2,
                  opacity: 1,
                  ease: Expo.easeInOut,
                },
                1
              ); // SitePreloader // ProgressBar
              
              loader.to(".progress-bar__container", {
                width: "0%",
                opacity: 0,
                duration: 1.5,
                ease: Expo.easeOut,
              });
              
              loader.to(
                ".wrapper-loading",
                {
                  height: 0,
                  duration: 2,
                  ease: Expo.easeInOut,
                },
                3
              );
        }

    },[$fn])
 
    return (
        <>
           <div className="wrapper-loading">
                <div className="wrapper-preloader">
                    <div className="box-preloader">
                        <h1>{props?.title}</h1>
                        <div className="progress-bar__container">
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
                <div className="wrapper-curtain">
                    <div className="MT">
                        <h1></h1>
                    </div>
                    <div className="box-title">
                        {/* <div className="title">MT</div> */}
                        <div className="title">MT</div>
                    </div>
                </div>
           </div>
        </>
    );
}
 
export default Loader;