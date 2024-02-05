import {useState, useEffect, createContext, useContext } from "react";
import { collection, limit, orderBy, query, startAfter } from "firebase/firestore";
import { db } from "../../config/firebase/firebase.config";


import { useFecthFirstTime } from "../../hooks/useFetchFirstTime/useFetchFirstTime";
import { fetchDocuments } from "../../hooks/fetchDoc/fetchDoc";
import { deleteDocument } from "../../hooks/deleteDoc/deleteDoc";


/**
 * Create context
 */
const SkillListContext = createContext();


/**
 * use Context
 */
export const useSkillsListContext = () => {
    const context = useContext(SkillListContext);

    if(!context) {
        throw Error("Skills list context must be inside a skillsListContext Provider")
    }

    return context;
}


/**
 * Context Provider
 */
const SkillListContextProvider = ({children}) => {
    const [skills, setSkills] = useState([]);
    const [lastDoc, setLastDoc] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [noPosts, setNoPosts] = useState(false);


    /**
     * SkillPostRef
     */
    const skillPostRef = collection(db, "Skills");

    
    /**
     * FetchMore
     */
    const fetchMore = () => {
        const q = query(skillPostRef, orderBy("createdAt", "desc"), limit(5), startAfter(lastDoc))

        /**
         * FetchMore function
         */
        fetchDocuments(q, setIsLoading, setSkills, setLastDoc, setNoPosts)
    }


    /**
     * Delete Skill
     */
    const deletePost = (_id) => {
        deleteDocument(_id, "Skills", skills, setSkills, setNoPosts);
    }
    
    /**
     * Fetch FirstTime
     */
    useEffect(() => {

        const q = query(skillPostRef, orderBy("createdAt", "desc"), limit(5));

        /**
         * Fetch function
         */
        useFecthFirstTime(q, setIsLoading, setSkills, setLastDoc, setNoPosts)
    },[])
 
    return (
        <>
            <SkillListContext.Provider value={{skills, isLoading, fetchMore, deletePost, noPosts, setNoPosts}}>
                {children}
            </SkillListContext.Provider>
        </>
    );
}
 
export default SkillListContextProvider;