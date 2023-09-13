import { useSelector } from "react-redux";
import { getIsPlaying } from "../Redux/SoundsSlice";


const Speakers = () => {

    const isPlaying = useSelector(getIsPlaying);

    return (
        <div className="speakerBox px-5 py-4 mt-5">
            <div className={ isPlaying ? 'speaker mb-4 speaker-play-shadow' : 'speaker mb-4'}></div>
            <div className={ isPlaying ? 'speaker mb-4 speaker-play-shadow' : 'speaker mb-4'}></div>
        </div>
    )
}

export default Speakers;