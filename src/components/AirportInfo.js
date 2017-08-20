import React, { Component } from 'react';

export default class AirportInfo extends Component {
    render() {
        const airport = this.props.airport;
        
        return (
            <div className="AirportInfo">
                <h1>{airport.airport_code}</h1>
                <p>{airport.raw_data}</p>
            </div>
        )
    }
}