
import './CategoryBtn.css';
import { useState } from "react";
import FilteredRecord from "./FilteredCategory";


const AllCategories = () => {

    const [categories] = useState([
        'ALL',
        'SOUNDS OF NATURE', 
        'MUSIC FOR WORK',
        'CLASSICAL MUSIC', 
        'RELAX', 
        ]);

    return (
        <div className="d-flex flex-wrap gap-2 justify-content-center py-5">
            {categories.map((category) => <FilteredRecord 
                category = {category}
                key={category}
            />)}
        </div>
    )
}
export default AllCategories;