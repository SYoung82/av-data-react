import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.js'
import axios from 'axios';

const username = process.env.REACT_APP_API_USERNAME;
const password = process.env.REACT_APP_API_PASSWORD;
const URI = process.env.REACT_APP_API_URI

export default class StateContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            airport: [],
            aircraft: []
        }
    }

    onSubmit(airport) {
        this.fetchAirport(airport);
        this.fetchAircraft(airport); 
    }

    fetchAirport(airport) {
        console.log(URI, username, password)
        const data = JSON.stringify({"airport_code": airport})

        axios({
            method: 'post',
            url: URI,
            headers: { "Content-Type": "application/json" },
            data: data
        })
        .then(resp => this.setState({airport: resp.data.wx_obs.WeatherConditionsResult.conditions[0]}))
        .catch(err => console.log(err))
    }

    fetchAircraft(airport) {
        console.log('Fetching aircraft');
    }

    render() {
        return (
        <div>    
            <div>
                <SearchBar onSubmit={ this.onSubmit.bind(this) } />
            </div>
            <div className="Main">
                <div className="Left MainChild">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="Right MainChild">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
        )
    }
}