
import { useDispatch, useSelector } from "react-redux";
import Equalizer from "../Equalizer/Equalizer";
import { getCurrentTime, getDuration, getIsPlaying, getSelectedRecord, getShowHeroPlayer, getWindowWidth, setWindowWidth } from "../Redux/SoundsSlice";
import HeroRange from "./HeroRange";
import HeroPlayerButtons from "./HeroPlayerButtons";
import blob from '../../Assets/blobanimation.svg';
import { useEffect } from "react";

const Hero = ({ handlePlayPause, handleStop, audioRef }) => {

    // State variable to keep track of the screen size
    const windowWidth = useSelector(getWindowWidth);
    const dispatch = useDispatch();

    const currentTime = useSelector(getCurrentTime);
    const showHeroPlayer = useSelector(getShowHeroPlayer);
    const isPlaying = useSelector(getIsPlaying);
    const duration = useSelector(getDuration);
    const selectedRecord = useSelector(getSelectedRecord);

    const defaultTitle = `Mozart the best`;
    const soundName = selectedRecord?.title || defaultTitle;

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    // Event listener to update the screen size on window resize
    useEffect(() => {
        const handleResize = () => {
            dispatch(setWindowWidth(window.innerWidth));
        };
            window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [dispatch]);

    // Function to check if the screen size is less than 800px
    const isSmallScreen = windowWidth < 800;


    return (
        <header className="SoundsHeader">
            <div className="container col-xxl-8 px-4 pt-5">
                <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 pt-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <Equalizer />
                        { !isSmallScreen && (
                            <p className="fs-3 pt-5">
                                Explore a world of tranquility and motivation, <br /> 
                                and unlock the power of music to elevate your mind, 
                                body, and spirit.
                            </p>
                        )}
                    </div>
                    <div className="col-lg-6 pb-5 mb-5">
                        <h1 className="display-1 fw-bold lh-1 ">
                            Ambient Flow
                        </h1>
                    </div>
                    <div className="pt-5">
                        { isSmallScreen && (
                            <p className="fs-3">
                                Explore a world of tranquility and motivation, <br /> 
                                and unlock the power of music to elevate your mind, 
                                body, and spirit.
                            </p>
                        )}
                    </div>
                    <div className="m-0 pt-3 heroEditBtnBox">
                    { isPlaying ? (
                        <img className="BlobAnimationSvg" src={blob} alt="blobAnimation" />
                        ) : (
                            <button 
                                className="btn btn-outline-primary rounded-circle p-3 lh-1 cloudBtn" 
                                type="button"
                                data-bs-target="#exampleModalToggle" 
                                data-bs-toggle="modal"
                                >
                                <i className="bi bi-cloud-plus fs-2" />
                            </button>
                        )}
                    </div>
                    
                    { showHeroPlayer && (
                        <>
                            <h3 className="text-center heroSoundName">{ soundName }</h3>
                            <div className="w-100 d-flex justify-content-between mt-0">
                                <p className="px-3 mb-0 heroIndicator">{ formatTime(currentTime) }</p>
                                <p className="px-3 mb-0 heroIndicator">{ formatTime(duration) }</p>
                            </div>
                            <HeroRange audioRef={audioRef} />
                            <HeroPlayerButtons 
                                handlePlayPause = { handlePlayPause } 
                                handleStop = { handleStop } 
                            />
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Hero;