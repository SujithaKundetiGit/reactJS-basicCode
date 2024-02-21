
import { useState, useEffect, useContext } from "react";
import RestaurantComp from "./Restaurants";
import UserContext from "../Utils/UserContext";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import internetStatus from "../Utils/internetStatus";


const BodyComp = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    

    useEffect( () => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        //console.log("In Body"+jsonData.data);
        setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    const onlineStatus = internetStatus();

    if(onlineStatus){
        return (
            <h1>OOPs you are not connected to internet. Check your internet connection and try again.</h1>
        )
    }
    const {loggedInUser, setUserName} = useContext(UserContext);

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body-Container">
            <div className="search">
                <input type="text" className="searchInput" value = {searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}></input>
                <button onClick={()=>{
                    const constSearchResults = listOfRestaurants.filter(
                        (res) => res.info.name.includes(searchText)
                    );
                    setFilteredRestaurant(constSearchResults);
                }}>Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

            <button className="top-ratedBtn" onClick={ () =>{
                const filteredTopRestaurants = listOfRestaurants.filter(res => res.info.avgRating > 4.2);
                setListOfRestaurants(filteredTopRestaurants);
            }
            }>Top Rated Restaurants</button>
            <div className="res-container">
                {
                    filteredRestaurant.map(
                        restaurant =>  (
                            <Link
                            key={restaurant.info.id}
                            to={"/restaurant/"+restaurant.info.id}>
                        <RestaurantComp resData={restaurant}/>
                        </Link>
                        )
                        )
                }
            </div>
        </div>
    )
}

export default BodyComp;