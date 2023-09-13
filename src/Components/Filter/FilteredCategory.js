import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getPlayVinylRecord, getSelectedCategory, setPlayVinylRecord } from "../Redux/SoundsSlice";



const FilteredCategory = ({ category }) => {

    const selectedCategory = useSelector(getSelectedCategory);
    const playVinylRecord = useSelector(getPlayVinylRecord);
    const dispatch = useDispatch();

    const handlePlayRecords = () => {
        dispatch(setPlayVinylRecord(!playVinylRecord))
        setTimeout(() => {
            dispatch(setPlayVinylRecord(playVinylRecord))
        }, 1200)
    }

    return (

        <button 
            className={selectedCategory === category 
            ? 'categoryBtn categoryBtnActive' 
            : 'categoryBtn'}
            onClick={() => {
                dispatch(filterCategory(category),
                handlePlayRecords()
                )}}
            >
            {category}
        </button>

    )
}
export default FilteredCategory;