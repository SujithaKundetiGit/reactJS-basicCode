

import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";
import { imgBaseUrl } from "../Utils/constants";

const RestaurantChildCategories = ({childItems, dummy}) => {
    const dispatch = useDispatch();
    const handleAddItems = (items) => {
        dispatch(addItem(items));
    };
    return(
        <div>
            {
                childItems.map(
                    items => 
                    <div className = "p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between " key={items.card.info.id}>
                        <div className = "w-9/12">
                            <div className = "py-2">
                            <span>{items.card.info.name}</span>
                            <span>{items.card.info.price}</span>
                            </div>
                            <p className = "text-xs">{items.card.info.description}</p>
                            
                        </div>
                        <div className = "w-3/12 p-4">
                            <div className = "absolute">
                            <button className = "p-2 m-16 bg-gray-100 rounded-lg bg-white shadow-lg absolute m-auto" onClick={() => {
                                handleAddItems(items);
                                console.log("Additems:: "+items);
                                }}>Add +</button>
                            </div>
                            
                            <img src={imgBaseUrl + items.card.info.imageId} className = "w-full"></img>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default RestaurantChildCategories;