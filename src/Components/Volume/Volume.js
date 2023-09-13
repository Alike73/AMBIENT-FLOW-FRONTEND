
import { useSelector } from 'react-redux';
import './Volume.css';
import { getVolume } from '../Redux/SoundsSlice';


const Volume = ({ value, onChange}) => {
    
    const sliderValue = useSelector(getVolume);
    const minValue = 0;
    const maxValue = 100;

    let volumeIcon;

    if (sliderValue === 0) {
        volumeIcon = <i className="bi bi-volume-mute fs-3" />;
    } else if (sliderValue > 0 && sliderValue <= 50) {
        volumeIcon = <i className="bi bi-volume-down fs-3" />;
    } else if (sliderValue > 50 && sliderValue <= 100) {
        volumeIcon = <i className="bi bi-volume-up fs-3" />;
    }
    

    return (
        <div className="soundVolumeBox">
            <span className='soundVolumeText'>
                VOL
                {volumeIcon}
            </span>
            <div className="slider-wrapper">
                <div className="slider-container">
                    <div className="slider-track">  
                    <div className="slider-track-fill" style={{ width: `${(sliderValue / (maxValue - minValue)) * 100}%` }}></div>
                    <div className="slider-thumb" style={{ left: `calc(${(sliderValue / (maxValue - minValue)) * (100 - 0.25)}% + 0.25em / 2)` }}></div>
                    <input
                        className="slider-input"
                        type="range"
                        min={minValue}
                        max={maxValue}
                        value={value}
                        onChange={onChange}
                    />
                    </div>
                </div>
            </div>
            <span className='soundVolume text-center ms-3'>{sliderValue}</span>
        </div>
    )
}
export default Volume;