import { BiRightArrowAlt } from "react-icons/bi"
import { ImAttachment } from "react-icons/im"

const HomeContactForm = () => {
    
 
    return (
        <>
            <form action="">
                <div className="home-contact-form-group">
                    <input className="home-contact-form-control" type="text" name="name" id="name" placeholder="What's your name?" autoComplete="off"/>
                </div>
                <div className="home-contact-form-group">
                    <input className="home-contact-form-control" type="email" name="email" id="email" placeholder="Your fancy email" autoComplete="off"/>
                </div>
                <div className="home-contact-form-group">
                    <div className="attachment">
                        <div className="attachment-col attachment-col-1">
                            <div className="attachment-text">Tell me about your project</div>
                            <label htmlFor="File">
                                <ImAttachment />
                            </label>
                            <input type="file" id="File" className="home-contact-form-file-input"  accept="image/*"/>
                        </div>
                        <div className="attachment-col attachment-col-2">
                            <button className="submit-button"><BiRightArrowAlt /></button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
 
export default HomeContactForm;

