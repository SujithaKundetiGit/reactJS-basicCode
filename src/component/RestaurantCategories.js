
import { useState } from "react";
import RestaurantChildCategories from "./RestaurantChildCategorries";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    const arrowIcon = "⬇️";
    const handleClick = () => {
        setShowIndex();
    }
    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick= {handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.categories ? data.categories[0].itemCards.length : data.itemCards.length})</span>
                <span>{data.categories ? null : arrowIcon}</span>
                </div>
                <div className="flex justify-between">
                <span className="font-bold text-sm">{
                    data.categories ? data.categories[0].title : null
                }</span>
                <span> { data.categories ? arrowIcon : null} </span>
                </div>
                { showItems && <RestaurantChildCategories childItems = {data.itemCards ? data.itemCards : data.categories[0].itemCards}/>}
            </div>
        </div>
    )
}
export default RestaurantCategory;