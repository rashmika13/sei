import React, { Component } from 'react';
import './App.css';
import Map from '../../components/Map/Map';
import { getCurrentLatLng } from '../../services/geolocation';
import { getCurWeatherByLatLng } from '../../services/weather-api';

class App extends Component {
  state = {
    loading: true,
    lat: null,
    lng: null,
    temp: null,
    icon: '',
    errorMessage: '',
  };

  async componentDidMount() {
    try {
      const { lat, lng } = await getCurrentLatLng();
      console.log(lat, lng);
      const weatherData = await getCurWeatherByLatLng(lat, lng);
      console.log(weatherData);
      this.setState({
        lat,
        lng,
        temp: Math.round(weatherData.main.temp),
        icon: weatherData.weather[0].icon,
        loading: false,
      });
    } catch (err) {
      this.setState({ errorMessage: 'Uh oh, broken :(', loading: false });
    }
  }

  render() {
    if (this.state.loading) {
      return <h1>DATA LOADING</h1>;
    }

    if (this.state.errorMessage) {
      return <h1>{this.state.errorMessage}</h1>;
    }

    return (
      <div className="App">
        <Map lat={this.state.lat} lng={this.state.lng} />
        <header className="App-header">
          <div>{this.state.temp}&deg;</div>
          REACT WEATHER
          {this.state.icon && (
            <img
              src={`https://openweathermap.org/img/w/${this.state.icon}.png`}
              alt="Current Conditions"
            />
          )}
        </header>
      </div>
    );
  }
}

export default App;
