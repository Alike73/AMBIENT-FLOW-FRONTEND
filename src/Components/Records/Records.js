import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSound, getSounds } from "./FetchRecords";

import { 
    getIsPlaying, getSearchTerm, getSelectedCategory, 
    getSelectedRecord, selectRecord, 
    setActiveArm, setIsFlipped, setIsPlaying, 
    setPlayEqualizer, setResetAnimation, setShowHeroPlayer 
} from "../Redux/SoundsSlice";

import RecordItems from "./RecordItems";
import Editor from "../Editor/Editor";


const Records = () => {

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [soundLink, setSoundLink] = useState('');
    const [editing, setEditing] = useState(false);
    const [itemId, setItemId] = useState('');
    const [showWarning, setShowWarning] = useState(false);

    const [sounds, setSounds] = useState([]);
    const selectedCategory = useSelector(getSelectedCategory);
    const isPlaying = useSelector(getIsPlaying);
    const selectedRecord = useSelector(getSelectedRecord);
    const searchTerm = useSelector(getSearchTerm);
    const dispatch = useDispatch()
    

    useEffect(() => {
        getSounds(setSounds)
    }, [])

    const updatingInInput = (_id, image, title, category, soundLink) => {
        setEditing(true)
        setImage(image)
        setTitle(title)
        setCategory(category)
        setSoundLink(soundLink)
        setItemId(_id)
    }

    const handleRecordClick = (record) => {
        dispatch(setShowHeroPlayer(true));

        if (record === selectedRecord && isPlaying) {

            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });

            return; // Do nothing if the selected record is already playing
        }

        dispatch(selectRecord(record));
        dispatch(setIsPlaying(false));
        dispatch(setResetAnimation(true));
        dispatch(setActiveArm(false));
        dispatch(setPlayEqualizer(false));
        dispatch(setIsFlipped(true));
        setTimeout(() => {
            dispatch(setIsFlipped(false)); // Stop the VinylOuter animation after a certain duration
        }, 1000); // Duration in milliseconds (adjust as needed)
        
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Editor 
                image = {image} 
                setImage = {setImage} 
                title = {title}
                setTitle = {setTitle}
                category = {category}
                setCategory = {setCategory}
                soundLink = {soundLink}
                setSoundLink = {setSoundLink}
                showWarning = {showWarning}
                setShowWarning = {setShowWarning}
                editing = {editing}
                setEditing = {setEditing}
                setSounds = {setSounds}
                itemId = {itemId}
            />
            <div className="d-flex flex-wrap gap-4 justify-content-center align-items-center py-5">
                { sounds
                    .filter((item) => {
                        if(selectedCategory === 'ALL') return true;
                        return selectedCategory === item.category;
                    })
                    .filter((item) => {
                        if (searchTerm === '') return true;
                        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
                    })
                    .map((item) => <RecordItems
                        item = {item} 
                        image = {item.image} 
                        title = {item.title} 
                        soundLink = {item.soundLink}
                        key={item._id} 
                        updatingInInput = {() => updatingInInput(item._id, item.image, item.title, item.category, item.soundLink )}
                        deleteSound={() => deleteSound(item._id, setSounds)}
                        onClick={() => handleRecordClick(item)}
                    />)
                }
            </div>
        </>
    )
}

export default Records;