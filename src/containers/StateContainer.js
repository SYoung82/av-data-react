import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.js';
import AirportInfo from '../components/AirportInfo.js';
import Aircraft from '../components/Aircraft.js';
import axios from 'axios';

/*const username = process.env.REACT_APP_API_USERNAME;*/
/*const password = process.env.REACT_APP_API_PASSWORD;*/
const URI = process.env.REACT_APP_API_URI

export default class StateContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            airport: [],
            aircraft: []
        };
    }

    componentDidMount() {
        this.fetchAirport('KIAH');
        this.fetchAircraft('KIAH');
    }

    onSubmit(airport) {
        this.fetchAirport(airport);
        this.fetchAircraft(airport); 
    }

    fetchAirport(airport) {
        const data = JSON.stringify({"airport_code": airport});

        axios({
            method: 'post',
            url: URI + 'wx_obs',
            headers: { "Content-Type": "application/json" },
            data: data
        })
        .then(resp => this.setState({airport: resp.data.wx.WeatherConditionsResult.conditions[0]}))
        .catch(err => console.log(err));
    }

    fetchAircraft(airport) {
        const data = JSON.stringify({"airport_code": airport});

        axios({
            method: 'post',
            url: URI + 'aircraft_enroute',
            headers: { "Content-Type": "application/json" },
            data: data
        })
        .then(resp => this.setState({aircraft: resp.data.aircraft.AirportBoardsResult.enroute.flights}))
        .catch(err => console.log(err));
    }

    render() {
        return (
        <div>    
            <div>
                <SearchBar onSubmit={ this.onSubmit.bind(this) } />
            </div>
            <div className="Main">
                <div className="Left MainChild">
                    <AirportInfo airport={this.state.airport} />
                </div>
                <div className="Right MainChild">
                    <Aircraft aircraft={this.state.aircraft} />
                </div>
            </div>
        </div>
        )
    }
}