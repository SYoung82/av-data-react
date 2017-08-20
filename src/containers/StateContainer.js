import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.js'

export default class StateContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
          searchTerm: '',
          airports: [],
          aircraft: []
        }
    }

    onSubmit(airport) {
        this.fetchAirport(airport);
        this.fetchAircraft(airport); 
    }

    fetchAirport(airport) {
        console.log('Fetching airport ' + airport);
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