
import './AudioDuration.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { 
    getCurrentTime, getDuration, 
    getIsSeeking, setCurrentTime, 
    setDuration, setIsSeeking 
} from '../Redux/SoundsSlice';

const AudioDuration = ({ audioRef }) => {

    const currentTime = useSelector(getCurrentTime);
    const duration = useSelector(getDuration);
    const isSeeking = useSelector(getIsSeeking);
    const dispatch = useDispatch();

    useEffect(() => {
        const audioElement = audioRef.current;

        const handleTimeUpdate = () => {
            if (!isSeeking) {
                dispatch(setCurrentTime(audioElement.currentTime));
            }
        };

        const handleLoadedMetadata = () => {
            dispatch(setDuration(audioElement.duration));
        };

        audioElement.addEventListener('timeupdate', handleTimeUpdate);
        audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
            audioElement.removeEventListener('timeupdate', handleTimeUpdate);
            audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, [audioRef, isSeeking, dispatch]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleSeek = (event) => {
        const seekTime = parseFloat(event.target.value);
        setCurrentTime(seekTime);
        audioRef.current.currentTime = seekTime;
    };

    const handleSeekStart = () => {
        dispatch(setIsSeeking(true));
    };

    const handleSeekEnd = () => {
        dispatch(setIsSeeking(false));
    };

    return (
        
        <>
            <div className="audio-duration">
                <span className='durationCount me-3'>{formatTime(currentTime)}</span>
                <div className="slider-wrapper-2">
                    <div className="slider-container-2">
                        <div className="slider-track-2">  
                        <div className="slider-track-fill-2" style={{ width: `${(currentTime / (duration - 0)) * 100}%` }}></div>
                        <div className="slider-thumb-2" style={{ left: `calc(${(currentTime / (duration - 0)) * (100 - 0.25)}% + 0.25em / 2)` }}></div>
                        <input
                            className="slider-input-2"
                            type="range"
                            min={0}
                            max={duration}
                            value={currentTime}
                            onChange={handleSeek}
                            onMouseDown={handleSeekStart}
                            onMouseUp={handleSeekEnd}
                            onTouchStart={handleSeekStart}
                            onTouchEnd={handleSeekEnd}
                        />
                        </div>
                    </div>
                </div>
                <span className='durationCount ms-3'>{formatTime(duration)}</span>
            </div>
        </>
    );
};

export default AudioDuration;
