import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(e) {
        this.props.handleSelect(e);
    }

    render() {
        return (
            <Nav bsStyle="tabs" onSelect={this.handleSelect}>
                <NavItem eventKey="enroute" title="Enroute">Enroute</NavItem>
                <NavItem eventKey="departures" title="Departures">Departures</NavItem>
                <NavItem eventKey="arrivals" title="Arrivals">Arrivals</NavItem>
            </Nav>
        )
    }
}