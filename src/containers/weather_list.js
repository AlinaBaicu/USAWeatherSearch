import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData){
        //cityData = a snapshop of the city's complete data
        const {name} = cityData.city;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon,lat} = cityData.city.coord;
        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td>
                    <Chart data={temps} color='orange' units='K' />
                </td>
                <td>
                    <Chart data={pressures} color='black' units='hPa' />
                </td>
                <td>
                <Chart data={humidities} color='blue' units='%' />
                </td>
            </tr>
        )
    }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
            <tr className='measurements'>
                <th>City</th>
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Humidity</th>
            </tr>
        </thead>
        <tbody>
            {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

//possible refactor -> possibly a bit confusing for me now lol :))
// function mapStateToProps({weather}){
//     return {weather}
// }

function mapStateToProps(state){
    return {
        weather: state.weather
    }
}


export default connect(mapStateToProps)(WeatherList);
