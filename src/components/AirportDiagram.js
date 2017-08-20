import React, { Component } from 'react';

export default class AirportDiagram extends Component {
    render() {
        console.log(this.props.airport)
        const image_source = 'https://flightaware.com/resources/airport/'+ this.props.airport.airport_code + '/APD/AIRPORT+DIAGRAM/png/1'
        return (
            <div className="AirportDiagram">
                <img src={image_source} alt="airport diagram" />
            </div>
        )
    }
}