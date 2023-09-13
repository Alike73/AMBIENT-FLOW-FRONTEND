import { useSelector } from 'react-redux';
import './SoundTicker.css';
import { getSelectedRecord } from '../Redux/SoundsSlice';
import vinylRecord from '../../Assets/vinylRecord.png';
import assistant from '../../Assets/assistant.png';

const SoundTicker = () => {
    const selectedRecord = useSelector(getSelectedRecord);
    const defaultTitle = (
        <>
            To select the desired record, 
            go to the records list, 
            and click on the central circle of the record.
            <img className='ms-3' src={vinylRecord} alt="Vinyl Record" width={30} />
        </>
    );
    const soundName = selectedRecord?.title || defaultTitle;

    return (
        <div className="tcontainer fixed-top">
        <div className="ticker-wrap">
            <div className={selectedRecord ? 'ticker-move-record' : 'ticker-move'}>
            <div className="ticker">
                <div className="ticker__item">
                {selectedRecord ? (
                    <>
                        <img className='me-2 tickerAssistant' src={assistant} alt="assistant" width={30} />
                        <span className="selected-melody me-2">Selected melody:</span>  
                        <span className='glowSoundName'>{soundName}</span>
                    </>
                ) : (
                    soundName
                )}
                </div>
                <div className="ticker__item">
                {selectedRecord ? (
                    <>
                        <img className='me-2 tickerAssistant' src={assistant} alt="assistant" width={30} />
                        <span className="selected-melody me-2">Selected melody:</span>  
                        <span className='glowSoundName'>{soundName}</span>
                    </>
                ) : (
                    soundName
                )}
                </div>
                <div className="ticker__item">
                {selectedRecord ? (
                    <>
                        <img className='me-2 tickerAssistant' src={assistant} alt="assistant" width={30} />
                        <span className="selected-melody me-2">Selected melody:</span>  
                        <span className='glowSoundName'>{soundName}</span>
                    </>
                ) : (
                    soundName
                )}
                </div>
                <div className="ticker__item">
                {selectedRecord ? (
                    <>
                        <img className='me-2 tickerAssistant' src={assistant} alt="assistant" width={30} />
                        <span className="selected-melody me-2">Selected melody:</span>  
                        <span className='glowSoundName'>{soundName}</span>
                    </>
                ) : (
                    soundName
                )}
                </div>
                <div className="ticker__item">
                {selectedRecord ? (
                    <>
                        <img className='me-2 tickerAssistant' src={assistant} alt="assistant" width={30} />
                        <span className="selected-melody me-2">Selected melody:</span>  
                        <span className='glowSoundName'>{soundName}</span>
                    </>
                ) : (
                    soundName
                )}
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default SoundTicker;
