

import { useEffect } from 'react';
import './HeroRange.css';
import { useDispatch, useSelector } from 'react-redux';
import { 
  getCurrentTime, 
  getDuration, 
  setIsSeeking, 
  setCurrentTime, 
  getHovered, 
  setHovered 
} from '../Redux/SoundsSlice';

const HeroRange = ({ audioRef }) => {

  const hovered = useSelector(getHovered);
  const currentTime = useSelector(getCurrentTime);
  const duration = useSelector(getDuration);
  const dispatch = useDispatch();
  
  const handleSeek = (event) => {
    const seekTime = parseFloat(event.target.value);
    setCurrentTime(seekTime);
    audioRef.current.currentTime = seekTime;
  };

  useEffect(() => {
    if (hovered) {
      const handleMouseMove = (event) => {
        const rect = event.target.getBoundingClientRect();
        const seekTime = ((event.clientX - rect.left) / rect.width) * duration;
        dispatch(setCurrentTime(seekTime));
      };

      document.addEventListener('mousemove', handleMouseMove);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [hovered, duration, dispatch]);
  
  // Calculate the progress of the audio playback
  const progress = duration === 0 ? 0 : currentTime / duration;
  // Create a dynamic inline style to adjust the background of the range slider
  const rangeStyle = {
    background: `linear-gradient(to right, #cc181e 0%, #cc181e ${progress * 100}%, #777 ${progress * 100}%, #777 100%)`
  };

  const handleMouseEnter = () => {
    dispatch(setHovered(true));
  };

  const handleMouseLeave = () => {
    dispatch(setHovered(false));
  };

  const handleMouseUp = () => {
    setTimeout(() => {
      if (!hovered) {
        dispatch(setIsSeeking(false));
      }
    }, 1000);
  };

  const handleMouseDown = () => {
    dispatch(setIsSeeking(true));
  };

  return (
    <div
      className={`wrap${hovered ? ' hover' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
    >
      <div className="range-wrapper">
        <div
          className="range-fill"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          className="range"
          onChange={handleSeek}
          style={rangeStyle} // Apply the dynamic rangeStyle
        />
      </div>
    </div>
  );
};

export default HeroRange;




