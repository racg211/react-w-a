import React, { Component } from 'react';

import WeatherInfo from './components/WheaterInfo';
import WeatherForm from './components/WeatherForm';

export default class App extends Component{
    
    getWeather = e => {
        const { city, country } = e.target.elements;

        const cityValue = city.value;
        const countryValue = country.value;

        console.log(cityValue, countryValue)
        
        e.preventDefault();
        
    }

    render(){
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <WeatherForm getWeather={this.props.getWeather}/>
                        <WeatherInfo/>
                    </div>
                </div>
            </div>
        )
    }
}