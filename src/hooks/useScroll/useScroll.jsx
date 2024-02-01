/**
 * @LocomotiveScroll _x_ @gsap _x_ @Reactjs
 * Complited code without any issue if @You found
 * Please @count + 0
 */

import { useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

const useScroll = (start) => {

    gsap.registerPlugin(ScrollTrigger);


    useLayoutEffect(() => {

        if(!start) return;

        if(window.scroller) window.scroller.destroy();

        ScrollTrigger.clearScrollMemory("manual"); // TO clear previous record of scroll
        window.history.scrollRestoration = "manual"; // TO clear previous record of scroll


        const $crollEl = document.querySelector(".__MT__scroll");

        window.scroller = new LocomotiveScroll({
            el: $crollEl,
            smooth: true,
            smartphone: {
              smooth: true
            },
            tablet: {
              smooth: true
            }
        });


        window.scroller.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy($crollEl, {
            scrollTop(value) {
              if (window.scroller) {
                return arguments.length
                  ? window.scroller.scrollTo(value, { duration: 0, disableLerp: true })
                  : window.scroller.scroll.instance.scroll.y;
              }
              return null;
            },
            getBoundingClientRect() {
              return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
              };
            },
            pinType: document.querySelector(".__MT__scroll").style.transform
              ? "transform"
              : "fixed"
            }
        );

        window.refreshPosition = () => {
          if(window.scroller) {
            window.scroller.update();
            ScrollTrigger.refresh();
          }
        }

        const UpdateScroll = () => {
            if (window.scroller) {
              window.scroller.update();
            }
        };

        ScrollTrigger.defaults({
            scroller: document.documentElement.classList.contains("has-scroll-smooth") && $crollEl
        });

        ScrollTrigger.addEventListener("refresh", UpdateScroll);
        // ScrollTrigger.addEventListener("refreshInit", UpdateScroll)

        window.addEventListener("resize", window.refreshPosition);
        window.refreshPosition();
        
        setTimeout(() => {
          window.refreshPosition();
        }, 1000);

        return () => {
            window.scroller.destroy();
            ScrollTrigger.removeEventListener("refresh", UpdateScroll);
        };

    },[start]);

};


export { useScroll };



export const stopScroll = (start) => {
  
  useEffect(() => {
    if(!start) return; 

    if(window.scroller) {
      window.scroller.stop();
      console.log("Scroll Stoped");
    }
  },[])
}