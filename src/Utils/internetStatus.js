
import { useState } from "react";

const internetStatus = () => {
    const [useInternetStatus, setUseInternetStatus] = useState(false);
    window.addEventListener("online", function() {
        console.log("I am connected to the internet")
        setUseInternetStatus(true);
      })
      
      window.addEventListener("offline", function() {
        console.log("Disconnected...so sad!!!")
        setUseInternetStatus(false);
      })
    return useInternetStatus;
}

export default internetStatus;
