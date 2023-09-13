

import './Turntable.css';
import { 
    getActiveArm, getIsFlipped, getIsPlaying, 
    getResetAnimation, getSelectedRecord, getVolume, 
    setResetAnimation, setVolume } from '../Redux/SoundsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Screw from './Screw';
import Volume from '../Volume/Volume';
import EqualizerTwo from '../Equalizer/EqualizerTwo';
import Speakers from './Speakers';
import TurntableButtons from './TurntableButtons';

import melodyLogo from '../../Assets/melody.png';
import turntableArm from '../../Assets/turntableArm2.png';
import marshall from '../../Assets/marshall-wide1.png';
import marshallTwo from '../../Assets/marshall-wide2.png';
import homeMade from '../../Assets/homeMade.png';
import homeMadeTwo from '../../Assets/homeMade2.png';
import AudioDuration from '../AudioDuration/AudioDuration';



const Turntable = ({ handlePlayPause, handleStop, audioRef }) => {

    const selectedRecord = useSelector(getSelectedRecord);

    const isPlaying = useSelector(getIsPlaying);
    const resetAnimation = useSelector(getResetAnimation);
    const activeArm = useSelector(getActiveArm);
    const volume = useSelector(getVolume);
    const isFlipped = useSelector(getIsFlipped);

    const defaultImage = 'https://cdn.glitch.global/1645500e-0555-4845-826f-652a6810692a/Mozzart.jpg?v=1688865453060'; // Set the default image path
    const defaultSound = 'https://cdn.glitch.global/1645500e-0555-4845-826f-652a6810692a/Mozart.mp3?v=1694627782182'; // Set the default sound path
    const defaultTitle = ''; // Set the default vinyl title text path

    const vinylImage = {
        backgroundImage: `url(${selectedRecord?.image || defaultImage})`,
        backgroundSize: 'cover',
    };

    const mySoundLink = selectedRecord?.soundLink || defaultSound;
    const vinylTitle = selectedRecord?.title || defaultTitle;
    const dispatch = useDispatch();

    useEffect(() => {
        // Reset the resetAnimation state after a short delay
        const resetAnimationTimeout = setTimeout(() => {
            dispatch(setResetAnimation(false));
        }, 500);

        return () => {
            clearTimeout(resetAnimationTimeout);
        };
    }, [resetAnimation, dispatch]);

    // Set the volume of the audio element
    const handleVolumeChange = (event) => {
        const audio = audioRef.current;
        const volumeValue = parseInt(event.target.value, 10);
        dispatch(setVolume(volumeValue));
        audio.volume = volumeValue / 100; 
    };

    return (
        <div className="container">
            <div className="col-lg-10 pt-5 mx-auto Turntable">
                { isPlaying 
                    ? <img className='homeMade' src={homeMade} alt="homeMade" /> 
                    : <img className='homeMade' src={homeMadeTwo} alt="homeMade" />
                }

                {mySoundLink && <audio src={mySoundLink} ref={audioRef} loop />}

                <Screw />
                <Volume value={volume} onChange={handleVolumeChange} />
                <EqualizerTwo />
                {/* VinylOuter mx-auto container-fluid */}
                <div className={ isFlipped 
                    ? 'VinylOuter mx-auto container-fluid tilt-in-top-1' 
                    : 'VinylOuter mx-auto container-fluid'}
                >
                    <div 
                    className={
                    isPlaying
                    ? 'vinyl-spin Vinyl container-fluid'
                    : resetAnimation
                    ? 'vinyl-spin vinyl-spin-reset Vinyl container-fluid'
                    : 'vinyl-spin vinyl-spin-paused Vinyl container-fluid'
                    } 
                    style={vinylImage}

                    >
                        {vinylTitle && <h3 className='VinylText'>{vinylTitle}</h3>}
                        <div className="Spin"></div>
                        <img className='VinylImg' src={melodyLogo} alt="melodyLogo" />
                    </div>
                </div>
                
                <img 
                    className={ activeArm 
                        ? 'turntableArm turntableArm-active' 
                        : 'turntableArm turntableArm-reset'
                        } 
                    src={turntableArm} 
                    alt="turntableArm"  
                />

                { isPlaying 
                    ? <img className="marshall" src={marshall} alt="marshall" /> 
                    : <img className="marshall" src={marshallTwo} alt="marshall" />
                }
                
                <Speakers />
                <TurntableButtons 
                    handlePlayPause = {handlePlayPause} 
                    handleStop = {handleStop}
                />

                <AudioDuration audioRef={audioRef} />
            </div>
        </div>
    )
}

export default Turntable;