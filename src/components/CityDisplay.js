import React from 'react';
import DisplayZipCode from './DisplayZipCode';




class CityDisplay extends React.Component{
    render(){
        return(
            this.props.cityData.map((city) => (
            <DisplayZipCode 
            key = {city}
            cityData = {city} 
            />)
        )
        )
    }
}

export default CityDisplay;