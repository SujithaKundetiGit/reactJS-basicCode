
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./src/component/Header";
import BodyComp from "./src/component/Body";
import AboutUs from "./src/component/AboutUs";
import Error from "./src/component/error";
import ContactUs from "./src/component/ContactUs";
import RestaurantsMenu from "./src/component/RestaurantsMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 
import { Suspense, lazy } from "react";
import UserContext from "./src/Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/Utils/appStore";
import Cart from "./src/component/cart";
//import Grocery from "./src/component/Grocery";

const Grocery = lazy(() => import("./src/component/Grocery"));

const AppLayout = () => {

const [userName, setUserName] = useState();
useEffect(()=>{
   const data = {
      name: "Sujitha",
   };
   setUserName(data.name);
},[])

return(
   <Provider store={appStore}>
   <UserContext.Provider value={ {loggedInUser: userName, setUserName} }>
   <div>
   <Header />
   <Outlet />
   </div>
   </UserContext.Provider>
   </Provider>
)
};

const Router = createBrowserRouter(
   [
      { 
         path: "/", 
         element: <AppLayout/>,
         errorElement: <Error />,
         children: [
            {
               path: "/",
               element: <BodyComp/>
            },
            {
               path: "/aboutUs",
               element: <AboutUs/>
            },
            {
               path: "/contactUs",
               element: <ContactUs/>
            },
            {
               path: "/grocery",
               element: (
                  <Suspense fallback={<h1>Loading groceries...</h1>}> <Grocery/></Suspense>
               ),
            },
            {
               path: "/restaurant/:resId",
               element: <RestaurantsMenu />
            },
            {
               path: "/cart",
               element: <Cart />
            }
         ]
      }

   ]
);

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout/>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {Router}/>);