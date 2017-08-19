import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: '' }
    }

    render() {
        return (
            <div className="SearchBar">
                <input 
                    onChange={ event => {
                      console.log(event.target.value);
                      this.setState({term: event.target.value}) 
                    }}
                    value={this.state.term}
                />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
}