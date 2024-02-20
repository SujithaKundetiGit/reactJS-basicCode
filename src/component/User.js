import { useState } from "react"; 
 
 const User = ({name}) => {
    const [count1] = useState([0]);
    const [count2] = useState([0]);
    return(
        <div className="functionCompExample">
            <h1>Hi {name}</h1>
            <h2>Hyderabad</h2>
            <h3>{count1}</h3>
            <h3>{count2}</h3>
        </div>
    );
};

export default User;
