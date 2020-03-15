import React from 'react';
import CityWeather from './cityWeather';

class Widget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      citiesList: [...props.cities],
      favorites: [],
      showFavorites: false
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.addToFavorites = this.addToFavorites.bind(this)
    this.showFavorites = this.showFavorites.bind(this)
  }

  handleSearch(event) {
    if (event.target.value == '')
      this.setState({
        ...this.state,
        citiesList: this.props.cities
      })
    else
      this.setState({
        ...this.state,
        citiesList: this.props.cities.map((city) => {
          if (city && city.name && city.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
            return city
        })
      })
  }

  addToFavorites(city) {
    if(this.state.favorites.indexOf(city) === -1) {
    this.state.favorites.push(city)
    console.log(this.state)
    }
  }

  showFavorites() {
    this.setState({
      ...this.state,
      showFavorites: !this.state.showFavorites
    })
  }

  showCities() {
    
  }

  render() {
    let citiesDivs

    if (!this.state.showFavorites) {
      citiesDivs = this.state.citiesList.map(city => {
        if (city)
          return <div key={city.id} className="Widget__CityBox">
            <button className="Widget__Button" onClick={(e) => this.addToFavorites(city)}>В избранное</button>
            <CityWeather city={city} />
           </div>
      })    
    }
    else {
      citiesDivs = this.state.favorites.map(city => {
        if (city)
          return <div key={city.id} className="Widget__CityBox">
             <button className="Widget__Button" onClick={(e) => this.addToFavorites(city)}>В избранное</button>
            <CityWeather city={city} />
           </div>
      })    
    }

    return <div className="Widget">
      <input
        type="text"
        className="Widget__Search"
        placeholder="Введите название города"
        onChange={this.handleSearch}
      ></input>
      <button className="Widget__Favorites" onClick={this.showFavorites}>Избранное</button>
      {citiesDivs}
    </div>
  }
}

export default Widget;