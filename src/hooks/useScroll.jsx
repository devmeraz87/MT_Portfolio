import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import LocomotiveScroll from "locomotive-scroll"

export const useScroll = () => {

    gsap.registerPlugin(ScrollTrigger);

    if(window.scroller) window.scroller.destroy();
    
    window.addEventListener("touchmove", (e) => {
        e.preventDefault()
    }, {passive: false})

    window.scroller = new LocomotiveScroll({
        el: document.querySelector(".__MT__scroll"),
        smooth: true,
        smartphone: {
            smooth: true,
            direction: "vertical",
            gestureDirection: "vertical"
        },
        tablet: {
            smooth: true,
            direction: "vertical",
            gestureDirection: "vertical"
        }
    })

    setTimeout(() => {
        window.scroller.destroy();
        window.scroller.init();
    }, 500);


    window.scroller.on("scroll", ScrollTrigger.update);


    ScrollTrigger.scrollerProxy(".__MT__scroll", {
        scrollTop(value) {
            return arguments.length ? window.scroller.scrollTo(value, 0, 0) : window.scroller.scroll.instance.scroll.y;
        },
    
        getBoundingClientRect() {
            return {
                top: 0, 
                left: 0, 
                width: window.innerWidth, 
                height: window.innerHeight
            };
        },

      pinType: document.querySelector(".__MT__scroll").style.transform ? "transform" : "fixed"        
    })


    ScrollTrigger.refresh();
    ScrollTrigger.addEventListener("refresh", () => window.scroller.update());
    ScrollTrigger.defaults({
        scroller: ".__MT__scroll"
    });


}