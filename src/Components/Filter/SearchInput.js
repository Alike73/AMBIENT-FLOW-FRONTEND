import { useDispatch, useSelector } from "react-redux";
import { getSearchTerm, setSearchTerm } from "../Redux/SoundsSlice";


const SearchInput = () => {

    const searchTerm = useSelector(getSearchTerm);
    const dispatch = useDispatch();

    const handleSearchTerm = (e) => {
        dispatch(setSearchTerm(e.target.value))
    }

    const placeholderItems = {
        placeholderTitle: 'Search melody by name...',
        space: ' ',
        placeholderIcon: '🎶 ❔ 👀'
    }

    return (
        <div className="container">
            <div className="searchInputOuter">
                <input 
                    className="form-control form-control-lg inputEditor" 
                    type="text" 
                    placeholder={`${placeholderItems.placeholderTitle} ${placeholderItems.space} ${placeholderItems.placeholderIcon}`} 

                    aria-label=".form-control-lg example"
                    value={searchTerm}
                    onChange={handleSearchTerm}
                />
            </div>
        </div>
    )
}

export default SearchInput;