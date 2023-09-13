
import { createSlice } from '@reduxjs/toolkit';

export const soundsSlice = createSlice({

    name: 'soundsItems',

    initialState: {
        selectedCategory: 'ALL',
        selectedRecord: null,
        inputCode: '',
        playEqualizer: false,
        isPlaying: false,
        resetAnimation: false,
        activeArm: false,
        volume: 50,
        currentTime: 0,
        duration: 0,
        isSeeking: false,
        isLoaded: false,
        inputWidth: 0,
        showPassword: false,
        showEye: false,
        showVinyl: false,
        isFlipped: false,
        searchTerm: '',
        accordionItems: [],
        year: '',
        playVinylRecord: false,
        showHeroPlayer: false,
        windowWidth: window.innerWidth,
        hovered: false,
    },

    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        selectRecord: (state, action) => {
            state.selectedRecord = action.payload;
        },
        setInputCode: (state, action) => {
            state.inputCode = action.payload;
        },
        setPlayEqualizer: (state, action) => {
            state.playEqualizer = action.payload;
        },

        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },
        setResetAnimation: (state, action) => {
            state.resetAnimation = action.payload;
        },
        setActiveArm: (state, action) => {
            state.activeArm = action.payload;
        },
        setVolume: (state, action) => {
            state.volume = action.payload;
        },
        setCurrentTime: (state, action) => {
            state.currentTime = action.payload;
        },
        setDuration: (state, action) => {
            state.duration = action.payload;
        },
        setIsSeeking: (state, action) => {
            state.isSeeking = action.payload;
        },
        setIsLoaded: (state, action) => {
            state.isLoaded = action.payload;
        },
        setInputWidth: (state, action) => {
            state.inputWidth = action.payload;
        },
        setShowPassword: (state, action) => {
            state.showPassword = action.payload;
        },
        setShowEye: (state, action) => {
            state.showEye = action.payload;
        },
        setShowVinyl: (state, action) => {
            state.showVinyl = action.payload;
        },
        setIsFlipped: (state, action) => {
            state.isFlipped = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setAccordionItems: (state, action) => {
            state.accordionItems = action.payload;
        },
        setYear: (state, action) => {
            state.year = action.payload;
        },
        setPlayVinylRecord: (state, action) => {
            state.playVinylRecord = action.payload;
        },
        setShowHeroPlayer: (state, action) => {
            state.showHeroPlayer = action.payload;
        },
        setWindowWidth: (state, action) => {
            state.windowWidth = action.payload;
        },
        setHovered: (state, action) => {
            state.hovered = action.payload;
        },
    },
    
});

export const getWindowWidth = state => state.soundsItems.windowWidth;
export const getSelectedCategory = state => state.soundsItems.selectedCategory;
export const getSelectedRecord = state => state.soundsItems.selectedRecord;
export const getInputCode = state => state.soundsItems.inputCode;
export const getPlayEqualizer = state => state.soundsItems.playEqualizer;
export const getIsPlaying = state => state.soundsItems.isPlaying;
export const getResetAnimation = state => state.soundsItems.resetAnimation;
export const getActiveArm = state => state.soundsItems.activeArm;
export const getVolume = state => state.soundsItems.volume;
export const getCurrentTime = state => state.soundsItems.currentTime;
export const getDuration = state => state.soundsItems.duration;
export const getIsSeeking = state => state.soundsItems.isSeeking;
export const getIsLoaded = state => state.soundsItems.isLoaded;
export const getInputWidth = state => state.soundsItems.inputWidth;
export const getShowPassword = state => state.soundsItems.showPassword;
export const getShowEye = state => state.soundsItems.showEye;
export const getShowVinyl = state => state.soundsItems.showVinyl;
export const getIsFlipped = state => state.soundsItems.isFlipped;
export const getSearchTerm = state => state.soundsItems.searchTerm;
export const getAccordionItems = state => state.soundsItems.accordionItems;
export const getYear = state => state.soundsItems.year;
export const getPlayVinylRecord = state => state.soundsItems.playVinylRecord;
export const getShowHeroPlayer = state => state.soundsItems.showHeroPlayer;
export const getHovered = state => state.soundsItems.hovered;



export const { 
    setWindowWidth, filterCategory, setInputCode, selectRecord, 
    setPlayEqualizer, setIsPlaying, setResetAnimation, 
    setActiveArm, setVolume, setCurrentTime, setDuration, setIsSeeking, 
    setIsLoaded, setInputWidth, setShowPassword, setShowEye, setShowVinyl, 
    setIsFlipped, setSearchTerm, setAccordionItems, 
    setYear, setPlayVinylRecord, setShowHeroPlayer, setHovered
} = soundsSlice.actions;

export default soundsSlice.reducer;