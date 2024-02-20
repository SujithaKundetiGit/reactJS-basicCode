

import { imgBaseUrl } from "../Utils/constants";

const RestaurantComp = (props) => {
    const {resData} = props;
    return (
    //console.log(props),
    <div className="res-card">
        <img className = "res-logo" src={imgBaseUrl+resData.info.cloudinaryImageId}></img>
    <h2>{resData.info.name}</h2>
    <h3>{resData.info.avgRating}</h3>
    <h3>{resData.info.slaString}</h3>
    <h4>{resData.info.cuisines}</h4>
    <h4>{resData.info.areaName}</h4>
    </div>
  );
  };

  export default RestaurantComp;