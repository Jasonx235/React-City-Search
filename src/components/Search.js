import React from 'react';

class Search extends React.Component{
    state ={
        city: ""
    }

    onSubmit = (e) =>{
        e.preventDefault();
        let concat = this.state.city.split(" ").join("").toUpperCase();
        this.props.findCityData(concat);
        this.setState({city:""});
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <form onClick={this.onSubmit}>
                <input type='text' name="city" value={this.state.city} onChange={this.onChange} placeholder="Enter City..."/>
                <input type='button' value="submit"/>
                </form>
                
            </div>
        )
    }
}
export default Search;