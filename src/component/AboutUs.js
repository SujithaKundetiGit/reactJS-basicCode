import Userclass from "./Userclass";
import User from "./User";


const AboutUs = () => {
    return(
        <div>
            <h1>Welcome to new page About us</h1>
            <User name={"This is Sujitha - functional component"}/>
            <Userclass name = {"This is Vinod - class component"}/>
        </div>
    )
}

export default AboutUs;