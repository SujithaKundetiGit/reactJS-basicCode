
import { useContext, useState } from "react";
import appLogo from "../Utils/constants";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderComp = () => {
    const [loginValue, setLoginValue] = useState("Login");
    const {loggedInUser} = useContext(UserContext);

    //Subscribing to the stored Redux

    const cartItems = useSelector((store) => store.cart.items);
    console.log("In Header: "+cartItems);

    return(
    <div className="ps-5 pe-5 pt-5">
        <div className=" flex justify-between border-2 border-rose-500 bg-blue-50">
        <img className= "w-20 h-20" src={appLogo}></img>
        <div>
            <ul className="flex p-5">
                <li className="p-5"><Link to="/">Home</Link></li>
                <li className="p-5"><Link to="/ContactUs">Contact Us</Link></li>
                <li className="p-5"><Link to="/AboutUs">About Us</Link></li>
                <li className="p-5 font-extrabold text-lg"><Link to="/Cart">Cart - {cartItems.length}  Items</Link></li>
                <li className="p-5"><button className="bg-red-500 hover:bg-violet-600" onClick={
                    () => {
                        loginValue === "Login" ? setLoginValue("Logout") : setLoginValue("Login");
                    }
                }>{loginValue}</button></li>
                <li className="p-5">{loggedInUser}</li>
                </ul>
        </div>
        </div>
    </div>
    )
}

export default HeaderComp;