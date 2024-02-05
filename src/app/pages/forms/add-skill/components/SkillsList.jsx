import { useEffect } from "react";
import { MdDelete } from "react-icons/md";

import { useSkillsListContext } from "../../../../../contexts/skillListsContext/skillListContext";

const SkillsList = () => {

    const { skills, isLoading, fetchMore, deletePost, noPosts } = useSkillsListContext();

    return (
        <>
            <div className="skills-list-container">
                <div className="skills-list-header">
                    <h1 className="skills-list-heading">Skills List</h1>
                </div>
                <ul className="skills-list">
                    <SkillsListMap skills={skills} deletePost={deletePost} />
                    {isLoading && (
                        <li className="loading">Loading...</li>
                    )}
                    {(!isLoading && noPosts && skills) && (
                        <li className="noposts">
                            <h4>No post Available! &nbsp; Please add to view</h4>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}
 
export default SkillsList;


/**
 * Skills Map
 */
const SkillsListMap = ({skills, deletePost}) => {


    return(
        <>
            {skills && (
                skills.map(skill => (
                    <li key={skill.id} className="skill-item">
                        <div className="skill-image">
                            <img src={skill.photoUrl} alt={skill.skillName} />
                        </div>
                        <div className="skill-name">{skill.skillName}</div>
                        <div className="skill-color" style={{backgroundColor: `#${skill?.color}`}}>#{skill.color}</div>
                        <div className="skill-achived">{skill.skillLabel}%</div>
                        <button className="skill-delete" onClick={() => deletePost(skill.id)}>
                            <MdDelete />
                        </button>
                    </li>
                ))
            )}
        </>
    )
}