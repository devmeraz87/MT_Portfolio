import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase/firebase.config";
import toast from "react-hot-toast"

export const deleteDocument = async (_id, _ref, docs, setDocs, setNoDocs) => {

    const newDocs = docs.filter((doc) => {
        return doc.id !== _id;
    })
    
    setDocs(newDocs);

    if(newDocs.length === 0) {
        setNoDocs(true);
    }
    
    await deleteDoc(doc(db, _ref, _id)).then(() => {
        toast.success("Deleted Sucessfully", {position: "top-right"});
    })
    .catch(err => {
        toast.error(`${err.message} \ Faild to delete posted ${_ref}`, {position: "top-right"})
    })
}
