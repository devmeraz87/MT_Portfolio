import {  BiRightArrowAlt } from "react-icons/bi"


const SectionContact = () => {
    
 
    return (
        <>
            <div className="section-contact">
                <div className="container">
                    <div className="section-contact-context">
                        <div className="section-contact-left">
                            <div>
                                <div className="section-subtitle section-contact-section-subtitle">
                                    <div className="line"></div>
                                    <span>Contact</span>
                                </div>
                                <div className="section-heading">
                                    <span>Any Type Of Query</span>
                                    <span>& Discussion.</span>
                                </div>
                                <p className="section-lead">
                                    <span>Sed ut perspiciatis unde omnis iste natus error sit</span>
                                    <span>voluptatem accusantium.</span>
                                </p>
                            </div>
                            <div>
                                <a className="_global_link_04MT" href="mailto:devmeraz87@gmail.com">
                                    <span className="__flex">
                                        <span>devmeraz87</span>
                                        <span>
                                            <div className="_arrow_right">
                                                <BiRightArrowAlt />
                                            </div>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="section-contact-right">
                            <h1 className="section-contact-right-heading">
                                <span>You can't use up creativity,</span>
                                <span>the more you use, more you have</span>
                                <span>in your signifant mind.</span>
                            </h1>
                            <p className="section-contact-right-lead">
                                <span>Sed ut perspiciatis unde omnis iste natus error sit</span>
                                <span>voluptatem accusantium doloremque laudantium,</span>
                                <span>totam rem aperiam, eaque ipsa.</span>
                            </p>
                            <div className="section-contact-right-ex&client">
                                <div className="experience">
                                    <span className="_number">14</span>
                                    <span className="flex flex-col">
                                        <span>Years of</span>
                                        <span>Experience.</span>
                                    </span>
                                </div>
                                <div className="client">
                                    <span className="_number">187</span>
                                    <span className="flex flex-col">
                                        <span>Satisfied</span>
                                        <span>Clients.</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}
 
export default SectionContact;