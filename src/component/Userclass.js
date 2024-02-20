import React from "react";

class Userclass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userinfo: {
                name: "Dummy",
                location: "Default"
            }
        }
    }

    async ComponentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = data.json();
        this.setState({userinfo: json})
    }

    render(){
        return(
            <div>
                <h1>UserComponent class based</h1>
                <h2>Hi {this.props.name}</h2>
                <button onClick={()=> 
                    this.setState ({count1: this.state.count1 + 1})
                }>Increase Count</button>
                <h3>Count1: {this.state.count1}</h3>
                
            </div>
        )
    }
}

export default Userclass;