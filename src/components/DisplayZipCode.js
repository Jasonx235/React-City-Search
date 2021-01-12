import React, { Component } from "react";

class DisplayZipCode extends Component{
    render(){
        
        return(
            <div className="zip">
                <li>Zip code: {this.props.cityData}</li>
            </div>
        )

    }
}

export default DisplayZipCode;