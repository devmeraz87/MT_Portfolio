import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db } from "../../../../../config/firebase/firebase.config";
import { useSkillsListContext } from "../../../../../contexts/skillListsContext/skillListContext";

import toast from 'react-hot-toast';
import { useRef } from "react";
import { getBase64Image } from "../../../../../hooks/getBase64/getBase64";

const AddSkillForm = () => {
    const [blob, setBlob] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [fileError, setFileError] = useState(false);
    const [formIsSubmited, setFormIsSubmited] = useState(false);
    const formEl = useRef();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: "onChange"});
    const { setNoPosts } = useSkillsListContext();


    const skillName = watch("skillName");
    const skillLabel = watch("skillLabel");
    const color = watch("color");

    
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if(file) {
            const _blob = URL.createObjectURL(file);
            setBlob(_blob);
            try {
                getBase64Image(520, file, setImageFile);
            } catch (err) {
                toast.error(`${err.message} \ Alert from Add Skill.jsx line 54`, {position: "top-right"})
            }

        } else {
            setBlob(null);
            setFileError(true);
            setImageFile(null)
        }
    }


    const onSubmit = async (data) => {
        const { skillName, skillLabel, color } = data;

        setFormIsSubmited(true)

        const postData = {
            skillName,
            skillLabel,
            color,
            photoUrl: imageFile,
            createdAt: Timestamp.now().toDate()
        }

        try {
            if(imageFile) {
                const SkillPostRef = collection(db, "Skills");
                
                addDoc(SkillPostRef, postData)
                    .then(() => {
                        toast.success("Skill added sucessfully", {position: "top-right"});
                        formEl.current.reset();
                        setNoPosts(false)
                        setImageFile(null);
                        setBlob(null);
                        setFormIsSubmited(false);
                    })
                    .catch((err) => {
                        alert()
                        toast.error(`${err.message} \ Faild to add Skill`, {position: "top-right"});
                        formEl.current.reset();
                        setImageFile(null);
                        setBlob(null);
                        setFormIsSubmited(false);
                    })

            } else {
                toast.error("No file", {position: "top-right"})
            }

        } catch (err) {
            toast.error(`${err.message} Error on catch block line 106 add skill.jsx`, {position: "top-right"})
        }

    }

 
    return (
        <>
            <form ref={formEl} id="addSkillForm" onSubmit={handleSubmit(onSubmit)}>
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
                            <button type="submit" className="submit-button">{formIsSubmited ? "Submiting..." : "Submit"}</button>
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