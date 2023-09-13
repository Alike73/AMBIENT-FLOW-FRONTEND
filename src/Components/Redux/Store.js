
import { configureStore } from '@reduxjs/toolkit';
import soundsItems from './SoundsSlice';

export default configureStore({
    reducer: {
        soundsItems: soundsItems
    }
})