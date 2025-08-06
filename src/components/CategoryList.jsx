import { useEffect, useState } from "react";
import SingleCategory from "./SingleCategory";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    },[])
    return (
        <div className="max-w-7xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mx-auto">
            {
                categories.map( category => <SingleCategory 
                    key={category.id} 
                    category={category} /> )
            }
        </div>
    );
};

export default CategoryList;