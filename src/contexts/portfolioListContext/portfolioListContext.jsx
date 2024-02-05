import { useState, useEffect, useContext, createContext } from "react";
import { collection, onSnapshot, query, orderBy, limit, startAfter } from "firebase/firestore"
import { db } from "../../config/firebase/firebase.config";
import { deleteDocument } from "../../hooks/deleteDoc/deleteDoc"
import { useFecthFirstTime } from "../../hooks/useFetchFirstTime/useFetchFirstTime";



const PortfolioListContext = createContext();

export const usePortfolioListContext = () => {
    const context = useContext(PortfolioListContext);

    if(!context) {
        throw Error("Portfolio List context must be inside of a PortfolioListContext Provider");
    }

    return context;
}


const PortfolioListContextProvider = ({children}) => {
    const [portfolios, setPortfolios] = useState([]);
    const [lastDoc, setLastDoc] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [noPosts, setNoPosts] = useState(false);
    
    /**
     * ProfilePostRef
     */
    const portfolioListRef = collection(db, "Portfolio");


    /**
     * Delete Portfolio
     */
    const deletePortfolio = (_id) => {
        deleteDocument(_id, "Portfolio", portfolios, setPortfolios, setNoPosts);
    }


    /**
     * Fetch FirstTime
     */
    useEffect(() => {
        const q = query(portfolioListRef, orderBy("createdAt", 'desc'), limit(10));

        /**
         * Fetch function
         */
        useFecthFirstTime(q, setIsLoading, setPortfolios, setLastDoc, setNoPosts);
    },[])
 
    return (
        <PortfolioListContext.Provider value={{portfolios, isLoading, lastDoc, noPosts, deletePortfolio}}> 
            {children}
        </PortfolioListContext.Provider>
    );
}
 
export default PortfolioListContextProvider;