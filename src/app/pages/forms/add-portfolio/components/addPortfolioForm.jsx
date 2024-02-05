import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillPlusCircle } from "react-icons/ai"
import { getBase64Image } from "../../../../../hooks/getBase64/getBase64";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../../../../config/firebase/firebase.config";
import toast from "react-hot-toast"
import { useRef } from "react";

const AddPortfolioForm = () => {
    const formEl = useRef();
    const [imageFile, setImageFile] = useState(null);
    const [blob, setBlob] = useState(null);
    const [fileError, setFileError] = useState(false);
    const [formIsSubmited, setFormIsSubmited] = useState(false);
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: "onChange"});

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if(file) {
            const _blob = URL.createObjectURL(file);
            setBlob(_blob);
            try {
                getBase64Image(800, file, setImageFile)
            } catch (err) {
                console.log(err);
            }
        } else {
            setBlob(null);
            setFileError(true);
            setImageFile(null);
        }
    }

    const onSubmit = async (data) => {
        const { projectName, projectDetails, websiteUrl, repositoryUrl } = data;
        setFormIsSubmited(true);

        const postData = {
            projectName,
            projectDetails,
            websiteUrl, 
            repositoryUrl,
            photoUrl: imageFile,
            createdAt: Timestamp.now().toDate()
        }

        try {
            if(imageFile) {
                const portfolioRef = collection(db, "Portfolio");

                addDoc(portfolioRef, postData)
                    .then(() => {
                        toast.success("Portfolio added sucessfully", {position: "top-right"});
                        // formEl.current.reset();
                        // setBlob(null);
                        // setImageFile(null);
                        setFormIsSubmited(false);
                    })
                    .catch((err) => {
                        toast.error(`${err.message} Failed to add Portfolio`, {position: "top-right"});
                        // formEl.current.reset();
                        // setImageFile(null);
                        // setBlob(null);
                        setFormIsSubmited(false);
                    })

                    console.log("clicked");
            }
        } catch (err) {
            toast.error(`${err.message} Catch block line 6 addPortfolioForm.jsx`)
        }
    }
 
    return (
        <>
            <form ref={formEl} id='addPortfolioForm' onSubmit={handleSubmit(onSubmit)}> 
                <div className="form-group">
                    <label className="label">Project Name</label>
                    <input 
                        className="form-control"
                        type="text"     
                        placeholder="Type..."
                        {...register("projectName", {required: "Required!"})}
                    />
                    {errors?.projectName && (
                        <div className="error">{errors.projectName.message}</div>
                    )}
                </div>
                <div className="form-group">
                    <label className="label">Project Details</label>
                    <textarea 
                        className="textarea" 
                        cols="30" 
                        rows="10" 
                        placeholder="Type..."
                        {...register("projectDetails", {required: "Required!"})}
                    ></textarea>
                      {errors?.projectDetails && (
                        <div className="error">{errors.projectDetails.message}</div>
                    )}
                </div>
                <div className="form-group">
                    <label className="label">Website URL</label>
                    <input 
                        className="form-control"
                        type="text" 
                        placeholder="Type..."
                        {...register("websiteUrl", {
                            required: "Required!",
                        })}
                    />
                     {errors?.websiteUrl && (
                        <div className="error">{errors.websiteUrl.message}</div>
                    )}
                </div>
                <div className="form-group">
                    <label className="label">Repository URL</label>
                    <input 
                        className="form-control"
                        type="text" 
                        placeholder="Type..."
                        {...register("repositoryUrl", {
                            required: false,
                        })}
                    />
                     {errors?.repositoryUrl && (
                        <div className="error">{errors.repositoryUrl.message}</div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="add_portfolio_image_file" className="file-label" title="Image file">
                        <AiFillPlusCircle />
                        {fileError && (
                            <span>Required!</span>
                        )}
                    </label>
                    <input 
                        type="file" 
                        id="add_portfolio_image_file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    {blob && (
                        <img className="image-blob" src={blob} alt="" />
                    )}
                </div>
                <div className="form-group">
                    <div className="button-group">
                        <button className="submit-button">
                            {formIsSubmited ? "Publishing..." : "Publish"}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
 
export default AddPortfolioForm;