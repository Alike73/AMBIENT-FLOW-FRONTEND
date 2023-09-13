import { useSelector } from "react-redux";
import { getIsPlaying } from "../Redux/SoundsSlice";


const TurntableButtons = ({ handlePlayPause, handleStop }) => {
    
    const isPlaying = useSelector(getIsPlaying);

    return (
        <div className="btnBox w-100 d-flex justify-content-center align-items-center">
            <button className="button" onClick={handlePlayPause}> 
                {isPlaying ? (
                        <i className="bi bi-pause fs-5 text-white" />
                    ) : (
                        <i className="bi bi-play fs-5 text-white" />
                    )}
            </button>
            
            <button className="button" onClick={handleStop}> 
                <i className="bi bi-stop fs-5" />
            </button>
        </div>
    );
};

export default TurntableButtons;
