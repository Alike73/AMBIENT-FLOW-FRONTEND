
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import UnlockEditor from './Editor/UnlockEditor';
import AllCategories from './Filter/AllCategories';
import Hero from './Hero/Hero';
import Records from './Records/Records';
import ScrollToTopAndBottom from './ScrollToTopAndBottom/ScrollToTopAndBottom';
import Turntable from './Turntable/Turntable';
import { getIsLoaded, getIsPlaying, setActiveArm, setCurrentTime, setIsLoaded, setIsPlaying, setPlayEqualizer, setResetAnimation, setShowHeroPlayer } from './Redux/SoundsSlice';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import Loader from './Loader/Loader';
import SearchInput from './Filter/SearchInput';
import Manual from './AppManual/Manual';
import ManualModal from './AppManual/ManualModal';
import SoundTicker from './SoundTicker/SoundTicker';
import Footer from './Footer/Footer';
import Progress from './Progress/Progress';

function App() {

  const isLoaded = useSelector(getIsLoaded);
  const isPlaying = useSelector(getIsPlaying);
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsLoaded(true));
    }, 1700); // Set isLoaded to true once the component is mounted
  }, [dispatch]);

  let tl = gsap.timeline();
  const playModalItems = () => {
    tl.fromTo(".assistant", { opacity: 0, x: -70 }, { duration: .5, opacity: 1, x: 0 })
    tl.fromTo("#manualModalLabel", { opacity: 0, x: '-100%' }, {duration: .8, opacity: 1, x: '0%'})
  }

  // ----------Play,Pause,Stop-Audio---------------------
  const handlePlayPause = () => {
    const audio = audioRef.current;
    const audios = document.getElementsByTagName('audio');

    if (isPlaying) {
        audio.pause();
        dispatch(setIsPlaying(false));
    
        let hasPlayingAudio = false;
        for (let i = 0; i < audios.length; i++) {
        if (!audios[i].paused) {
            hasPlayingAudio = true;
            break;
        }
        }
        dispatch(setPlayEqualizer(hasPlayingAudio));
    } else {
        setTimeout(() => {
            audio.play();
            dispatch(setIsPlaying(true));
            dispatch(setPlayEqualizer(true));
          }, 1100); // Delay of 2 seconds before playing the audio
    }
    dispatch(setActiveArm(true));

    audioRef.current.ontimeupdate = () => {
        // Dispatch the setCurrentTime action with the current audio time
        dispatch(setCurrentTime(audioRef.current.currentTime));
    };
    dispatch(setShowHeroPlayer(true));
  };

  const handleStop = () => {
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0;
    dispatch(setIsPlaying(false));
    dispatch(setResetAnimation(true));
    dispatch(setActiveArm(false));
    const audios = document.getElementsByTagName('audio');
    let hasPlayingAudio = false;
    for (let i = 0; i < audios.length; i++) {
        if (!audios[i].paused) {
        hasPlayingAudio = true;
        break;
        }
    }
    dispatch(setPlayEqualizer(hasPlayingAudio));
};
  // ----------------------------------------------------

  return (
    <div className="App">
    { isLoaded ? (
      <>
      <Progress />
      <SoundTicker />
      <UnlockEditor />
      <ScrollToTopAndBottom />
      <Hero
        handlePlayPause = { handlePlayPause } 
        handleStop = { handleStop } 
        audioRef={ audioRef } 

      />
      <ManualModal />
      <Manual playModalItems = { playModalItems } />
      <AllCategories />
      <SearchInput />
      <Records />
      <Turntable 
        handlePlayPause = { handlePlayPause } 
        handleStop = { handleStop } 
        audioRef = { audioRef } 

      />
      <Footer playModalItems = { playModalItems } />
      </>
    ) : (
      <Loader />
    )}
      
    </div>
  );
}

export default App;
