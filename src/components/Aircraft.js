import React, { Component } from 'react';

export default class Aircraft extends Component {
    render() {
        const aircraft = this.props.aircraft;

        if(aircraft === undefined) {
            return (
                <div className="Aircraft">
                    <h1>Aircraft {this.props.aircraftType[0].toUpperCase() + this.props.aircraftType.substr(1)}</h1>
                    <p>Error retrieving flight information, try again or enter a different airport code.</p>
                </div>
            )
        }

        if(aircraft.length === 0) {
            return(
                <div className="Aircraft">
                    <h1>Aircraft {this.props.aircraftType[0].toUpperCase() + this.props.aircraftType.substr(1)}</h1>
                    <p>No aircraft listed as {this.props.aircraftType}.</p>
                </div>
            )
        }

        return (
            <div className="Aircraft">
                <h1>Aircraft {this.props.aircraftType[0].toUpperCase() + this.props.aircraftType.substr(1)}</h1>
                {aircraft.map( ac => {
                    return (
                        <div key={ac.tailnumber}>
                            {ac.airline ? <h3>{ac.airline}{ac.flightnumber}</h3> : <h3>{ac.tailnumber}</h3>}
                            <p>Route: {ac.route}</p>
                            <p>{this.props.aircraftType !== 'departures' ? 'ETA:' : 'ETD:'} {ac.estimated_arrival_time.dow} {ac.estimated_arrival_time.date} @ {ac.estimated_arrival_time.time} {ac.estimated_arrival_time.tz}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

/*
actual_arrival_time, actual_departure_time, adhoc, aircrafttype, airline, arrival_delay, blocked, cancelled, 
departure_delay, destination, display_filed_altitude, distance_filed, diverted, estimated_arrival_time, estimated_departure_time, 
faFlightID, filed_airspeed_kts, filed_altitude, filed_arrival_time, filed_departure_time, filed_ete, flightnumber, full_aircrafttype, 
ident, inbound_faFlightID, origin, progress_percent, route, status, tailnumber, type
*/