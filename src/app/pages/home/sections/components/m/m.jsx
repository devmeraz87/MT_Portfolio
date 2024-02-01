import { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./m.scss"

const M = () => {
	const component = useRef(null);

    useEffect(() => {

      let ctx = gsap.context(() => {

		const tl = gsap.timeline({
			defaults: {
				ease: "none"
			},
			scrollTrigger: {
				trigger: component.current,
				start: "top 100%",
				end: "bottom 100%",
				scrub: true,
			}
		})

		tl.fromTo(component.current, {
				y: "20vh",
				scale: 1.2,
			},{
				y: 0,
				scale: 1,
				duration: 1.2,
				ease: Power3.easeOut,
			},
			0
		);

		ScrollTrigger.refresh();

		console.log("M Image ScrollTrigger Initiated!");

      }, component)

      return () =>  ctx.revert();
    },[])
 
    return (
        <>

        <div className="m">
            <div className="container">
                <div className="m-image-container">
                    <img ref={component} src="/images/hero/hero.jpg" alt="" />
                </div>
            </div>
        </div>
            
        </>
    );
}
 
export default M;