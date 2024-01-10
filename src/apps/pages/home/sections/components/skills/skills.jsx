const Skills = () => {
    
 
    return (
        <>
            <div id="skill" className="skills">
                <div className="container">
                    <div className="skills-contexts">
                        <h1 className="section-heading" style={{color: "#fff"}}>My skills</h1>
                        <ul className="skill-list">
                            <SkillsMap />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Skills;




function SkillsMap() {

    const skills = [
        {
            id: 1,
            name: "html5",
            logo: "/images/tech-logo/html5.edited.png",
            percentage: 10,
            colorClass: "blue"
        },
        {
            id: 2,
            name: "css3",
            logo: "/images/tech-logo/css3.edited.png",
            percentage: 20,
            colorClass: "blue"
        },
        {
            id: 3,
            name: "sass",
            logo: "/images/tech-logo/sass.png",
            percentage: 40,
            colorClass: "blue"
        },
        {
            id: 4,
            name: "tailwind Css",
            logo: "/images/tech-logo/tailwind-css.png",
            percentage: 40,
            colorClass: "blue"
        },
        {
            id: 5,
            name: "javaScript",
            logo: "/images/tech-logo/js.png",
            percentage: 30,
            colorClass: "blue"
        },
        {
            id: 6,
            name: "react Js",
            logo: "/images/tech-logo/react.png",
            percentage: 45,
            colorClass: "blue"
        },
        {
            id: 7,
            name: "gsap",
            logo: "/images/tech-logo/gsap.svg",
            percentage: 20,
            colorClass: "blue"
        },
    ]

    return (
        <>
            {skills?.map(skill => (
                <li className={`skill-item ${skill.name}`} key={skill.id}>
                    <div className="skill-logo">
                        <img src={skill.logo} alt={skill.name} />
                        <div className="skill-name">{skill.name}</div>
                    </div>
                    <div className="percentage-container">
                        <div className="percentage-circle">
                            <svg viewBox="0 0 36 36" className={`circular-chart ${skill.colorClass}`}>
                                <path className="circle-bg"
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path className="circle"
                                    strokeDasharray={`${skill.percentage}, 100`}
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.35" className="percentage">{skill.percentage}%</text>
                            </svg>
                        </div>
                    </div>
                </li>
            ))}            
        </>
    )

}