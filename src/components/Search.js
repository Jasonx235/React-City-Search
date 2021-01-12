import React from 'react';

class Search extends React.Component{
    state ={
        city: "",
        isEmpty: true
    }

    //Arrow methods dont need to bind
    onSubmit = (e) =>{
        e.preventDefault();
        let concat = this.state.city.split(" ").join("").toUpperCase();
        this.props.findCityData(concat);
        if(this.state.city === ""){
            this.setState({isEmpty: true});
        }
        else{
             this.setState({isEmpty: false});
        }
    }

    onChange = (e) =>{
        //method to get all input from the onChange instead of typing all them individually
        this.setState({[e.target.name]: e.target.value, isEmpty: true});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input type='text' name="city" value={this.state.city} onChange={this.onChange} placeholder={this.state.isEmpty ? "Enter City..." : this.state.city}/>
                <input type='submit' value="Submit"/>
                </form>
                
            </div>
        )
    }
}
export default Search;