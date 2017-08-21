import React, { Component } from 'react';
import { Button, FormControl, FormGroup, Grid, Row, Col } from 'react-bootstrap';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.value)
    }

    render() {
        return (
            <Grid  className="SearchBar">
            <Row>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                    <Col md={10}>
                        <FormControl
                            type='text'
                            placeholder="Enter ICAO airport code i.e. KSDF or SDF  or sdf"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </Col>
                    <Col md={2}>
                        <Button 
                            type='button'
                            block 
                            onClick={this.handleSubmit}>Submit</Button>
                    </Col>
                    </FormGroup>
                </form>
            </Row>
            </Grid>
        )
    }

}