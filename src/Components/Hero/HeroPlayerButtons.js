import { useSelector } from "react-redux";
import { getIsPlaying } from "../Redux/SoundsSlice";


const HeroPlayerButtons = ({ handlePlayPause, handleStop }) => {

    const isPlaying = useSelector(getIsPlaying);

    return (
        <div className="w-100 d-flex gap-3 justify-content-center pb-4">
            <button 
                className="btn btn-outline-secondary rounded-circle p-2 lh-1 HeroPlayerBtn" 
                type="button"
                onClick={handlePlayPause}
            >
                {isPlaying ? (
                        <i className="bi bi-pause fs-5 text-white" />
                    ) : (
                        <i className="bi bi-play fs-5 text-white" />
                    )}
            </button>
            <button 
                className="btn btn-outline-secondary rounded-circle p-2 lh-1 HeroPlayerBtn" 
                type="button"
                onClick={handleStop}
            >
                <i className="bi bi-stop fs-5 text-white"></i>
            </button>
        </div>
    )
}

export default HeroPlayerButtons;