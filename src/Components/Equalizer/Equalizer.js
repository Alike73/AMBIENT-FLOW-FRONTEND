
import { useSelector } from 'react-redux';
import './Equalizer.css';
import { getPlayEqualizer } from '../Redux/SoundsSlice';

const Equalizer = () => {


    const playEqualizer = useSelector(getPlayEqualizer);

    return (
        <div id="box" className="animated fadeIn mx-auto">
            <div className='square'>
            <i className={ playEqualizer ? 'activeLine' : 'passiveLine'} style={{ '--clr': '#00ff0a' }}></i>
            <i className={ playEqualizer ? 'activeLine' : 'passiveLine'} style={{ '--clr': '#ff0057' }}></i>
            <i className={ playEqualizer ? 'activeLine' : 'passiveLine'} style={{ '--clr': '#fffd44' }}></i>
                <div id="circle">
                    <div id="square">
                        <span id="bar" className={playEqualizer ? 'bar2 b1' : 'bar2'}></span>
                        <span id="bar" className={playEqualizer ? 'bar1 b2' : 'bar1'}></span>
                        <span id="bar" className={playEqualizer ? 'bar2 b3' : 'bar2'}></span>
                        <span id="bar" className={playEqualizer ? 'bar1 b4' : 'bar1'}></span>
                        <span id="bar" className={playEqualizer ? 'bar2 b5' : 'bar2'}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Equalizer;