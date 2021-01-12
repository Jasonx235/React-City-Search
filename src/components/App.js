import React from 'react';
import './../App.css';
import Search from './Search';
import CityDisplay from './CityDisplay';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
        cityData: []
    }

    
  }

  findCityData = (name) =>{
    //console.log(name);
    axios.get(`https://ctp-zip-api.herokuapp.com/city/${name}`)
    .then(res => { this.setState({cityData: res.data})
      this.goodRes();
    })
    .catch(err => {this.setState({cityData: []});
      this.badRes()
  })
  }




  goodRes= () =>{
    console.log(this.state.cityData);
    document.getElementById("error").style.display = "none";
  }

  badRes = () =>{
    document.getElementById("error").style.display = "block";
    setTimeout(this.goodRes, 2000);
  }
  
 

  render() {
  return (
    <div className="App">
      <div className="container"> 
      <img src="icons8-city-80-white.png" alt="City icon"/>
        <h1>City Search</h1>
        <p>Enter a city to view all the zip code!</p>
        <Search findCityData={this.findCityData}/>
        <p id="error">City Not Found!</p>
        <div className="zipContainer">
        <CityDisplay cityData={this.state.cityData}/>
        </div>
        
      </div>
        
    </div>
  );
  }
}

export default App;
