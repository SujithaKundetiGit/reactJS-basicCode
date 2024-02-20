

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import userRestaurantsMenu from "../Utils/userRestaurantsMenu";
import RestaurantCategory from "./RestaurantCategories";
import { useState } from "react";

const RestaurantsMenu = () => {
    //const [RestaurantsMenu, setRestaurantsMenu] = useState(null);
    const [showIndex, setShowIndex] = useState(0);
    const {resId} = useParams();
    const RestaurantsMenu = userRestaurantsMenu(resId);
    //console.log(RestaurantsMenu);
    //const categories = 
    

/*useEffect(() => {
   fetchData();
},[])

const fetchData = async () => {
   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.53196817025144&lng=78.29752273857594&restaurantId="+resId);
   const JSONData = await data.json();
   console.log(JSONData.data.cards[0]);
   setRestaurantsMenu(JSONData.data.cards[0]);
}*/

if(RestaurantsMenu === null) {return <Shimmer/>}
const data = RestaurantsMenu.cards[0].card.card.info;
//const categories = RestaurantsMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card;
//console.log(categories);
const categories = RestaurantsMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
    //c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    c => c.card?.card?.title ? c.card?.card?.title : null
)

return  (
        <div className="text-center">
             <h1 className="font-bold my-6 text-2xl">{data.name}</h1>
            <h3>{data.name}</h3>
            <h3>{data.avgRating}</h3>
            <h3>{data.costForTwoMessage}</h3>
            <h3>{data.cuisines}</h3>
            <h3>{data.locality}</h3> 
            {categories!==null ? categories.map(
                (catdata, index) => (<RestaurantCategory  key={catdata.card.card.id} data={catdata.card.card} 
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}/>)
            ) : ""}
        </div>
    )
}

export default RestaurantsMenu;