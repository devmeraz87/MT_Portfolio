import { BiRightArrowAlt } from "react-icons/bi"
import { Link } from "react-router-dom";

const HomeBlog = () => {
    
 
    return (
        <>
            <div className="home-blog">
                <div className="container">
                    <div className="home-blog-contexts">
                        <div className="home-blog-contexts-left">
                            <div className="section-subtitle">
                                <div className="line"></div>
                                <span>Blog</span>
                            </div>
                            <h1 className="section-heading">
                                <span>What's new?</span>
                                <span>My blog and news</span>
                            </h1>
                        </div>
                        <div className="home-blog-contexts-right">
                            <ul className="home-blog-list">
                                <li className="home-blog-list-item">
                                    <Link href="/" target="_blank">
                                        <span className="publish-date-and-name">
                                            <span className="date">Feb 26</span>
                                            <span className="dot"></span>
                                            <span>Blog</span>
                                        </span>
                                        <span className="blog-title">Let's this be a lesson to you</span>
                                        <span className="right-arrow">
                                            <BiRightArrowAlt />
                                        </span>
                                    </Link>
                                </li>
                                <li className="home-blog-list-item">
                                    <Link href="/" target="_blank">
                                        <span className="publish-date-and-name">
                                            <span className="date">Feb 26</span>
                                            <span className="dot"></span>
                                            <span>Blog</span>
                                        </span>
                                        <span className="blog-title">How do you use time tracking for project?</span>
                                        <span className="right-arrow">
                                            <BiRightArrowAlt />
                                        </span>
                                    </Link>
                                </li>
                                <li className="home-blog-list-item">
                                    <Link href="/" target="_blank">
                                        <span className="publish-date-and-name">
                                            <span className="date">Feb 26</span>
                                            <span className="dot"></span>
                                            <span>Blog</span>
                                        </span>
                                        <span className="blog-title">Ego and emphaty in design</span>
                                        <span className="right-arrow">
                                            <BiRightArrowAlt />
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default HomeBlog;