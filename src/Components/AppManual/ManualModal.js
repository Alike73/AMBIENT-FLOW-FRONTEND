import { useDispatch, useSelector } from "react-redux";
import { getAccordionItems, setAccordionItems } from "../Redux/SoundsSlice";
import { useEffect } from "react";
import dataManual from "./dataManual";
import ManualModalAccordion from "./ManualModalAccordion";
import assistant from "../../Assets/assistant.png";

const ManualModal = () => {

    const accordionItems = useSelector(getAccordionItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAccordionItems(dataManual));
    }, [dispatch])
        
    
    return (
        <div className="modal fade" id="manualModal" tabIndex="-1" aria-labelledby="manualModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content manualModalBox">
                    <div className="modal-header">
                    <img className="assistant" src={assistant} alt="assistant" />
                        <h2 className="modal-title fs-4 ms-auto" id="manualModalLabel">Application Guide (FAQs)</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        { accordionItems.map((item) => <ManualModalAccordion 
                            title = {item.title} 
                            content = {item.content}
                            idAccordion = {item.idAccordion} 
                            key={item.id} 

                            />)}
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-secondary" 
                            data-bs-dismiss="modal" 
                            >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManualModal;