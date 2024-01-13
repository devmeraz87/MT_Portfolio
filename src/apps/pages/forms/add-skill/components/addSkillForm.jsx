import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillPlusCircle } from "react-icons/ai";

const AddSkillForm = () => {
    const [blob, setBlob] = useState(null);
    const [imageFile, setImageFile] = useState("");
    const [fileError, setFileError] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: "onChange"});


    const skillName = watch("skillName");
    const skillLabel = watch("skillLabel");
    const color = watch("color");

    
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if(file) {
            const _blob = URL.createObjectURL(file);

            if(_blob) { 
                setBlob(_blob);
            }

            setImageFile(file);

        } else {
            setBlob(null);
            setFileError(true);
        }
    }


    const onSubmit = async (data) => {
        const { skillName, skillLabel, color } = data;

        const postData = {
            skillName,
            skillLabel,
            color,
        }
    }

 
    return (
        <>
            <form action="" id="addSkillForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label className="label">Skill Name</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="JavaScript/*" 

                        {...register("skillName", { 
                            required: "Required!",
                            maxLength: {
                                value: 15,
                                message: "Max is 15"
                           },
                            minLength: {
                                value: 2,
                                message: "Min is 2"
                            }
                        })}
                    />
                    {errors?.skillName && (
                        <div className="error">{errors.skillName.message}</div>
                    )}
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <span className="label">Skill Label</span>
                            <input 
                                className="form-control" 
                                type="number" 
                                placeholder="1 to 100" 

                                {...register("skillLabel", { 
                                    required: "Required!",
                                    min: {
                                        value: 1,
                                        message: "Min is 1"
                                    },
                                    max: {
                                        value: 100,
                                        message: "Max is 100"
                                    }
                                })}
                            />
                            {errors?.skillLabel && (
                                <div className="error">{errors.skillLabel.message}</div>
                            )}
                        </div>
                        <div className="col">
                            <span className="label">Color</span>
                            <input 
                                className="form-control" 
                                type="text" 
                                placeholder="#333333" 

                                {...register("color", { 
                                    required: "Required!",
                                    maxLength: {
                                        value: 8,
                                        message: "Max is 8"
                                   },
                                    minLength: {
                                        value: 6,
                                        message: "Min is 6"
                                    }
                                })}
                            />
                            {errors?.color && (
                                <div className="error">{errors.color.message}</div>
                            )}                            
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="skill_image_file" className="file-label" title="Image file">
                        <AiFillPlusCircle />
                        {fileError && (
                            <span>Required!</span>
                        )}
                    </label>
                    <input 
                        type="file" 
                        id="skill_image_file" 
                        accept="image/*" 
                        onChange={handleFileChange} 
                    />
                    {blob && (
                        <img className="image-blob" src={blob} alt="" />
                    )}
                </div>
                <div className="form-group">
                    <div className="button-group">
                        {imageFile && skillName && skillLabel && color ? (
                            <button type="submit" className="submit-button">Submit</button>
                        ) : (
                            <div className="submit-button disabled">Submit</div>
                        )}
                    </div>
                </div>
            </form>
        </>
    );
}
 
export default AddSkillForm;