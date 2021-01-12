import React from 'react';

class Search extends React.Component{
    state ={
        city: "",
        firstTime: true
    }

    //Arrow methods dont need to bind
    onSubmit = (e) =>{
        e.preventDefault();
        let concat = this.state.city.split(" ").join("").toUpperCase();
        this.props.findCityData(concat);
        this.setState({firstTime: false});
        //this.setState({city:""});
    }

    onChange = (e) =>{
        //method to get all input from the onChange instead of typing all them individually
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input type='text' name="city" value={this.state.city} onChange={this.onChange} placeholder={this.state.firstTime ? "Enter City..." : this.state.city}/>
                <input type='submit' value="Submit"/>
                </form>
                
            </div>
        )
    }
}
export default Search;