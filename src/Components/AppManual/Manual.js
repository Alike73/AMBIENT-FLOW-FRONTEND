
import './AppManual.css';

const Manual = ({ playModalItems }) => {

    return (
        <div className="container pt-5">
            <button 
                className="btn btn-link rounded-pill px-3 mx-auto editorBtn" 
                type="button"
                data-bs-toggle="modal" 
                data-bs-target="#manualModal"
                onClick={playModalItems}
                >
                How to use the App ❔
            </button>
        </div>
    )
}

export default Manual;