import React, { Component } from 'react';
import { Nav, NavItem, MenuItem } from 'react-bootstrap';

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
            <Nav bsStyle="tabs" activeKey="enroute" onSelect={this.handleSelect}>
                <NavItem eventKey="enroute" title="Enroute">Enroute</NavItem>
                <NavItem eventKey="departures" title="Departures">Departures</NavItem>
            </Nav>
        )
    }
}