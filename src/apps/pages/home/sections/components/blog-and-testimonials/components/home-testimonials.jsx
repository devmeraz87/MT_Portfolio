import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css"

import { BiSolidQuoteAltLeft } from "react-icons/bi"

const HomeTestimonials = () => {
    
 
    return (
        <>
            <div className="home-testimonials">
                <div className="container">
                    <div className="home-testimonials-contexts">
                        <TestimonialsSlider />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default HomeTestimonials;


function TestimonialsSlider() {
    return(
        <>
            <div className="testimonial-slider-container">
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        el: ".testimonial-pagination-button-container",
                        clickable: true
                    }}
                    modules={[Pagination]}
                    className="testimonial-slider"
                >
                    <SwiperSlide>
                        <div className="testimonial-slide">
                            <div className="testimonial-slide-img">
                                <img src="http://localhost:3000/images/testimonial/testimonial.png" alt="Jared" data-cursor-text="Jared Warner" />
                            </div>
                            <div className="testimonial-slide-context">
                                <div className="_quotes">
                                    <BiSolidQuoteAltLeft />
                                </div>
                                <h1 className="testimonial-slide-context-text">
                                    <span>Amaizing! At vero eos et accu samus et</span>
                                    <span>iusto odio dignissimosan ducimus qui</span>
                                    <span>Blan ditiis praesen tium volup capaten</span>
                                    <span>nise no kamani kuc kuc hotahe!</span>
                                </h1>
                                <div className="testimonial-name-and-designation">
                                    <div className="name">Jared Warner</div>
                                    <div className="designation">CEO of BeServer</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-slide">
                            <div className="testimonial-slide-img">
                                <img src="http://localhost:3000/images/testimonial/testimonial.png" alt="Jared" data-cursor-text="Jared Warner" />
                            </div>
                            <div className="testimonial-slide-context">
                                <div className="_quotes">
                                    <BiSolidQuoteAltLeft />
                                </div>
                                <h1 className="testimonial-slide-context-text">
                                    <span>Amaizing! At vero eos et accu samus et</span>
                                    <span>iusto odio dignissimosan ducimus qui</span>
                                    <span>Blan ditiis praesen tium volup capaten</span>
                                    <span>nise no kamani kuc kuc hotahe!</span>
                                </h1>
                                <div className="testimonial-name-and-designation">
                                    <div className="name">Jared Warner</div>
                                    <div className="designation">CEO of BeServer</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-slide">
                            <div className="testimonial-slide-img">
                                <img src="http://localhost:3000/images/testimonial/testimonial.png" alt="Jared" data-cursor-text="Jared Warner" />
                            </div>
                            <div className="testimonial-slide-context">
                                <div className="_quotes">
                                    <BiSolidQuoteAltLeft />
                                </div>
                                <h1 className="testimonial-slide-context-text">
                                    <span>Amaizing! At vero eos et accu samus et</span>
                                    <span>iusto odio dignissimosan ducimus qui</span>
                                    <span>Blan ditiis praesen tium volup capaten</span>
                                    <span>nise no kamani kuc kuc hotahe!</span>
                                </h1>
                                <div className="testimonial-name-and-designation">
                                    <div className="name">Jared Warner</div>
                                    <div className="designation">CEO of BeServer</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="testimonial-pagination-button-container"></div>
            </div>
        </>
    )
}