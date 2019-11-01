import React, { Component } from 'react';

import WeatherInfo from './components/WheaterInfo';
import WeatherForm from './components/WeatherForm';

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange(e){
        this.setState({value: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        
    }
    
    
    // getWeather = e => {
    //     const { city, country } = e.target.elements;

    //     const cityValue = city.value;
    //     const countryValue = country.value;

    //     console.log(cityValue, countryValue)

    //     alert("hola")
        
    //     e.preventDefault();
        
    // }

    render(){
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeatherInfo/>
                    </div>
                </div>
            </div>
        )
    }
}