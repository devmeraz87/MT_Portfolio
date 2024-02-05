import PortfolioListContextProvider from "../../../../contexts/portfolioListContext/portfolioListContext";
import AddPortfolioForm from "./components/addPortfolioForm";
import PortfolioList from "./components/portfoliosList";

const AddPortfolio = () => {
    
 
    return (
        <>
            <PortfolioListContextProvider>
                <div className="add-portfolio">
                    <div className="container">
                        <div className="add-portfolio-contexts">
                            <div className="add-portfolio-card">
                                <h1 className="section-heading">Add Portfolio</h1>
                                <AddPortfolioForm />
                            </div>
                        </div>
                        <PortfolioList />
                    </div>
                </div>
            </PortfolioListContextProvider>
        </>
    );
}
 
export default AddPortfolio;