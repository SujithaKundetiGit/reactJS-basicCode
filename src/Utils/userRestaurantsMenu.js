
import { useEffect, useState } from "react";

const userRestaurantsMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() =>  {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.53196817025144&lng=78.29752273857594&restaurantId="+resId);
        const JSONData = await data.json();
        console.log(JSONData.data);
        setResInfo(JSONData.data);
    }
    return resInfo;
};

export default userRestaurantsMenu;