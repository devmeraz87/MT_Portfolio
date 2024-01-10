import HomeAbout from "./components/about/about";
import BlogAndTestimonials from "./components/blog-and-testimonials/blog-and-testimonials";
import HomeContact from "./components/home-contact/home-contact";
import HomePortfolio from "./components/portfolio/portfolio";
import SectionContact from "./components/section-contact/section-contact";
import Skills from "./components/skills/skills";
import HomeTeam from "./components/team/homeTeam";

const HomeSections = () => {
    
 
    return (
        <>
            <SectionContact />
            <HomeTeam />
            <HomeAbout />
            <Skills />
            <HomePortfolio />
            <BlogAndTestimonials />
            <HomeContact />
        </>
    );
}
 
export default HomeSections;