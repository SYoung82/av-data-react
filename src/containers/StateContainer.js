import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.js';
import AirportInfo from '../components/AirportInfo.js';
import Aircraft from '../components/Aircraft.js';
import AirportDiagram from '../components/AirportDiagram.js';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';

/*const username = process.env.REACT_APP_API_USERNAME;*/
/*const password = process.env.REACT_APP_API_PASSWORD;*/
const URI = 'https://av-data-api.herokuapp.com/av-data/api/v1.0/'

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
            url: 'https://av-data-api.herokuapp.com/av-data/api/v1.0/wx_obs',
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
            url: 'https://av-data-api.herokuapp.com/av-data/api/v1.0/aircraft_enroute',
            headers: { "Content-Type": "application/json" },
            data: data
        })
        .then(resp => this.setState({aircraft: resp.data.aircraft.AirportBoardsResult.enroute.flights}))
        .catch(err => console.log(err));
    }

    render() {
        return (
        <Grid>    
            <Row>
                <SearchBar onSubmit={ this.onSubmit.bind(this) } />
            </Row>
            <Row className="Main">
                <Col md={4} className="Left MainChild">
                    <Row>
                        <AirportInfo airport={this.state.airport} />
                    </Row>
                    <Row>
                        <AirportDiagram airport={this.state.airport} />
                    </Row>
                </Col>
                <Col md={8} className="Right MainChild">
                    <Aircraft aircraft={this.state.aircraft} />
                </Col>
            </Row>
        </Grid>
        )
    }
}