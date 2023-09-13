
import { gsap } from "gsap";

const ManualModalAccordion = ({ title, content, idAccordion }) => {

    const playModalAccordion = () => {
        const accordionBody = document.querySelector(`#${idAccordion} .accordion-body`);
        gsap.fromTo(accordionBody, { opacity: 0, y: 40 }, { duration: .5, opacity: 1, y: 0 })
    }

    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button 
                        className="accordion-button collapsed fs-5 mb-2 mt-4" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#${idAccordion}`} 
                        aria-expanded="false" 
                        aria-controls={idAccordion}
                        onClick={playModalAccordion}
                        >
                        <span className="accordionTitle">{title}</span>
                    </button>
                </h2>
                <div 
                    id={idAccordion} 
                    className="accordion-collapse collapse" 
                    data-bs-parent="#accordionFlushExample"
                    >
                    <div className="accordion-body mt-2">
                        <p className="accordion-content">
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManualModalAccordion;