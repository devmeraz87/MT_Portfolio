import AddSkillForm from "./components/addSkillForm";

const AddSkill = () => {
 
    return (
        <>

            <div className="add-skill">
                <div className="container">
                    <div className="add-skill-contexts">
                        <div className="add-skill-card">
                            <h1 className="section-heading">Add Skill</h1>
                            <AddSkillForm />
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}
 
export default AddSkill;