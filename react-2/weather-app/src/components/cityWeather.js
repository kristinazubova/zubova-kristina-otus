import React from 'react';
import citiesData from './../citiesData';

class CityWeather extends React.Component {
  constructor(props) {
    super(props)
    let currentCity = citiesData.find(city => city.name == props.match.params.name)
    console.log(currentCity)
    this.state = currentCity
  }

  componentDidUpdate(prevProps) {
    console.log('prev', prevProps.match.params.name)
    console.log('current', this.props.match.params.name)

    if (prevProps.match.params.name != this.props.match.params.name) {
      let currentCity = citiesData.find(city => city.name == this.props.match.params.name)

      this.setState(currentCity)
    }
  }

  render() {
    return <div className="Widget__Content">
      <h3>{this.state.name}</h3>
      <table className="Widget__Table">
        <tbody>
          <tr className="Widget__Table-row">
            <th className="Widget__Table-cell">Температура</th>
            <th className="Widget__Table-cell">Ветер</th>
            <th className="Widget__Table-cell">Давление</th>
            <th className="Widget__Table-cell">Влажность</th>
          </tr>
          <tr className="Widget__Table-row">
            <td className="Widget__Table-cell">{this.state.main.temp}</td>
            <td className="Widget__Table-cell">{this.state.wind.speed}</td>
            <td className="Widget__Table-cell">{this.state.main.pressure}</td>
            <td className="Widget__Table-cell">{this.state.main.humidity}</td>
          </tr>
        </tbody>
      </table>
    </div>;
  }
}

export default CityWeather;