import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const AddSkillForm = () => {
    const [blob, setBlob] = useState(null);
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if(file) {
            const _blob = URL.createObjectURL(file);
            if(_blob) {
                setBlob(_blob);
            }
        } else {
            setBlob(null)
        }
        
    }

 
    return (
        <>
            <form action="" id="addSkillForm">
                <div className="form-group">
                    <label className="label">Skill Name</label>
                    <input className="form-control" type="text" placeholder="JavaScript/*" />
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <span className="label">Skill Label</span>
                            <input className="form-control" type="number" placeholder="1 to 100" />
                        </div>
                        <div className="col">
                            <span className="label">Color</span>
                            <input className="form-control" type="text" placeholder="#333333" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="skill_image_file" className="file-label" title="Image file">
                        <AiFillPlusCircle />
                    </label>
                    <input type="file" name="" id="skill_image_file" accept="image/*" onChange={handleFileChange} />
                    {blob && (
                        <img className="image-blob" src={blob} alt="" />
                    )}
                </div>
                <div className="form-group">
                    <div className="button-group">
                        <button className="submit-button">Submit</button>
                    </div>
                </div>
            </form>
        </>
    );
}
 
export default AddSkillForm;