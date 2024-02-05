import SkillListContextProvider from "../../../../contexts/skillListsContext/skillListContext";
import SkillsList from "./components/SkillsList";
import AddSkillForm from "./components/addSkillForm";


const AddSkill = () => {
    
 
    return (
        <>

            <SkillListContextProvider>
                <div className="add-skill">
                    <div className="container">
                        <div className="add-skill-contexts">
                            <div className="add-skill-card">
                                <h1 className="section-heading">Add Skill</h1>
                                <AddSkillForm />
                            </div>
                        </div>
                        <SkillsList />
                    </div>
                </div> 
            </SkillListContextProvider>
        </>
    );
}
 
export default AddSkill;