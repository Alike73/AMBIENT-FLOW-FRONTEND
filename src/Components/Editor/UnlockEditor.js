
import { useDispatch, useSelector } from "react-redux";
import { getInputCode, getInputWidth, 
    getShowEye, getShowPassword, getShowVinyl, setInputCode, 
    setInputWidth, setShowEye, setShowPassword, setShowVinyl } from "../Redux/SoundsSlice";

import vinylIcon from '../../Assets/vinylRecord.png';

const UnlockEditor = () => {

    const inputCode = useSelector(getInputCode);
    const inputWidth = useSelector(getInputWidth);
    const showPassword = useSelector(getShowPassword);
    const showEye = useSelector(getShowEye);
    const showVinyl = useSelector(getShowVinyl);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        dispatch(setInputCode(event.target.value)); 
    };

    const togglePasswordVisibility = () => {
        dispatch(setShowPassword(!showPassword));
    };

    const clearInput = () => {
        dispatch(setInputCode("")); // Clear the input code
    };

    const toggleInputWidth = () => {
        const newWidth = inputWidth === 0 ? 100 : 0;
        dispatch(setInputWidth(newWidth));
        dispatch(setShowEye(!showEye));
        dispatch(setShowVinyl(!showVinyl));
    };
    
    return (
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content firstModal">
                    <div className="modal-header">
                        <h2 className="modal-title mx-auto fs-5 editorTitle">
                            Enter password to open editor
                        </h2>
                        <i className="bi bi-x-circle fs-3 text-white" data-bs-dismiss="modal"/>
                    </div>
                    <div className="modal-body firstModalBody py-5">

                        <div className="d-flex align-items-end w-100 px-5 hiddenBox">
                            <span className="mx-3" onClick={togglePasswordVisibility}>
                                {showPassword ? (
                                    <i className={showEye ? 'bi bi-eye text-white' : ''}></i>
                                ) : (
                                    <i className={showEye ? 'bi bi-eye-slash text-white' : ''}></i>
                                )}
                            </span>

                            <input
                                className="form-control form-control-sm activeInput"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Editing? -> enter your password"
                                aria-label=".form-control-sm example"
                                style={{ width: `${inputWidth}%` }}
                                value={inputCode}
                                onChange={handleInputChange}
                            />
                            <i
                                className="bi bi-pen text-white fs-2 mt-2 activeNote"
                                onClick={() => {
                                    toggleInputWidth();
                                    clearInput();
                                }}
                            />
                        </div>
                                {/* vinylIcon */}
                    <img 
                    className={ showVinyl ? 'hiddenVinylIcon' : 'vinylIcon'} 
                    src={vinylIcon} 
                    alt="vinylIcon" 
                    onClick={toggleInputWidth} 

                    />
                    </div>

                    { inputCode === "K@ch@p20111" && (
                        <div className="modal-footer">
                            <button 
                                className="btn btn-primary editorBtn" 
                                data-bs-target="#exampleModalToggle2" 
                                data-bs-toggle="modal"
                                >
                                Open editor
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UnlockEditor;