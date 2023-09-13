import { useSelector } from 'react-redux';
import './Equalizer.css';
import { getIsPlaying } from '../Redux/SoundsSlice';

const EqualizerTwo = () => {

    const isPlaying = useSelector(getIsPlaying);

    return (
        <div className={ isPlaying 
            ? 'equalizer_2 play-equalizer_2' 
            : 'equalizer_2' 
        }>
            { isPlaying && (
                <>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </>
            )}
        </div>
    )
}

export default EqualizerTwo