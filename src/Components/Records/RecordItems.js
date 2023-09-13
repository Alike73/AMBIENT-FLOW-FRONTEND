import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInputCode, getPlayVinylRecord, getSearchTerm, getSelectedRecord, setInputCode } from "../Redux/SoundsSlice";

import melodyLogo from '../../Assets/melody.png';
import envelopVinyl from '../../Assets/background63.jpg';
import trebleClef from '../../Assets/trebleClef.png';
import vinylIcon from '../../Assets/vinylRecord.png';


const RecordItems = ({ item, image, title, soundLink, updatingInInput, deleteSound, onClick }) => {

    const [isActive, setIsActive] = useState(false);
    const [isTextHidden, setIsTextHidden] = useState(false);

    const inputCode = useSelector(getInputCode);
    const selectedRecord = useSelector(getSelectedRecord);
    const searchTerm = useSelector(getSearchTerm);
    const playVinylRecord = useSelector(getPlayVinylRecord);

    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        dispatch(setInputCode(event.target.value)); 
    };

    const handleToggle = () => {
        setIsActive(!isActive);
        setIsTextHidden(!isTextHidden);
        dispatch(setInputCode(''));
    };

    const vinylStyle = {
        backgroundImage: `url(${image})`, // Setting the background image
        backgroundSize: 'cover',
    };

    const vinylCaseStyle = {
        backgroundImage: `url(${envelopVinyl})`, // Setting the background image
        backgroundSize: '50%',
        backgroundRepeat: 'repeat'
    }

    const shouldDisplay = searchTerm === '' || title.toLowerCase().includes(searchTerm.toLowerCase());

// VinylRecordPillow px-3 py-4 rounded-4
    return (
        <div className={ playVinylRecord 
            ? 'VinylRecordPillow px-3 py-4 rounded-4 flip-in-diag-2-tl' 
            : 'VinylRecordPillow px-3 py-4 rounded-4'} style={vinylCaseStyle}
            >
            { selectedRecord === item && (
                <img className="trebleClef" src={trebleClef} alt="trebleClefIcon" width={50} />
            )}
            { shouldDisplay && (
                <>
                    <p className={`textTwo ${isTextHidden ? 'hide' : ''}`}>
                        <span className={ selectedRecord === item ? 'textUnderline' : ''}>
                            {title}
                        </span>
                    </p>
                    <div className={ selectedRecord === item ? 'recordActiveShadow' : ''}>
                        <ul className={`${playVinylRecord ? 'menu roll-in-left' : 'menu'} ${isActive ? 'active' : ''}`} style={vinylStyle}>
                            <audio src={soundLink} loop />
                            <div className="toggle" onClick={handleToggle}>
                                <img className="melodyLogo" src={melodyLogo} alt="melodyLogo" width={80} />
                                <div className="Spin"></div>
                            </div>

                            <li style={{ "--i": 1, "--clr": "#1877f2" }}>
                                <input 
                                    className="form-control form-control-sm vinylInput" 
                                    type="text" 
                                    placeholder="To edit enter password" 
                                    aria-label=".form-control-sm example"
                                    value={inputCode}
                                    onChange={handleInputChange}
                                />
                            </li>
                            <li style={{ "--i": 3, "--clr": "#1877f2" }}>
                                <button 
                                    className="btn btn-secondary rounded-pill px-3 setVinylBtn" 
                                    type="button"
                                    onClick={() => {
                                        handleToggle();
                                        onClick();
                                    }}
                                    >
                                    Set This Vinyl
                                    <img className="chooseVinyl ms-2" src={vinylIcon} alt="VinylIcon" />
                                </button>
                            </li>
                        </ul>
                    </div>

                    { inputCode === "K@ch@p20111" && (

                        <div className={ isActive ? 'btn-group px-1 w-100 activeBtnGroup' : 'btn-group px-1 w-100 editing-btn-group'}>
                            <button 
                                type="button" 
                                className="btn btn-danger rounded-pill me-5"
                                onClick={deleteSound}
                                >
                                <i className="bi bi-trash3"></i>
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-success rounded-pill ms-5"
                                data-bs-target="#exampleModalToggle2" 
                                data-bs-toggle="modal"
                                onClick={updatingInInput}
                                >
                                <i className="bi bi-pen"></i>
                            </button>
                        </div>
                    )}
                </>
            )}
            
        </div>
    )
}

export default RecordItems;