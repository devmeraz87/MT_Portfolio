/**
 * @LocomotiveScroll _x_ @gsap _x_ @Reactjs
 * Complited code without any issue if @You found
 * Please @count + 0
 */

import { useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useScroll = (start) => {

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {

        if(!start) return;

        ScrollTrigger.clearScrollMemory("manual"); // TO clear previous record of scroll
        window.history.scrollRestoration = "manual"; // TO clear previous record of scroll


        const $crollEl = document.querySelector(".__MT__scroll");

        let scroller = new LocomotiveScroll({
            el: $crollEl,
            smooth: true,
            smartphone: {
              smooth: true
            },
            tablet: {
              smooth: true
            }
        });


        scroller.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy($crollEl, {
            scrollTop(value) {
              if (scroller) {
                return arguments.length
                  ? scroller.scrollTo(value, { duration: 0, disableLerp: true })
                  : scroller.scroll.instance.scroll.y;
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


        const UpdateScroll = () => {
            if (scroller) {
                scroller.update();
            }
        };

        ScrollTrigger.defaults({
            scroller: document.documentElement.classList.contains("has-scroll-smooth") && $crollEl
        });

        ScrollTrigger.addEventListener("refresh", UpdateScroll);

        return () => {
            scroller.destroy();
            ScrollTrigger.removeEventListener("refresh", UpdateScroll);
        };

    },[start]);

};


export { useScroll };