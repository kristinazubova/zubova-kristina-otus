import React from 'react';

class CityWeather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }



  render() {
    return <div className="Widget__Content">{this.props.city.name}
      <table className="Widget__Table">
        <tbody>
          <tr className="Widget__Table-row">
            <th className="Widget__Table-cell">Температура</th>
            <th className="Widget__Table-cell">Ветер</th>
            <th className="Widget__Table-cell">Давление</th>
            <th className="Widget__Table-cell">Влажность</th>
          </tr>
          <tr className="Widget__Table-row">
            <td className="Widget__Table-cell">{this.props.city.main.temp}</td>
            <td className="Widget__Table-cell">{this.props.city.wind.speed}</td>
            <td className="Widget__Table-cell">{this.props.city.main.pressure}</td>
            <td className="Widget__Table-cell">{this.props.city.main.humidity}</td>
          </tr>
        </tbody>
      </table>
    </div>;
  }
}

export default CityWeather;