
import { useDispatch, useSelector } from "react-redux";
import RestaurantChildCategories from "./RestaurantChildCategorries";
import { clearCart, removeItem } from "../Utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    
    return(
        <div>
            <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            {cartItems.length > 0 ? <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear cart</button> : <h3>Your cart is empty. Please add items in your cart</h3>}
            <RestaurantChildCategories childItems={cartItems} />
            </div>
        </div>
    )
}


export default Cart;