import React, { Component } from 'react';

class FilterTool extends Component {
    constructor(props) {
        super(props)

        var defaultFilter = () => { return false; } //By default return none

    }

    createSumOfFilters = () => {



    }

    getFilterFromAllChildren() {

    }

    updateSingleFilter = (filterName) => (newFilter) => {
        this.setState({
            [filterName]: newFilter
        })
    }

    render() {
        return (
            <div className="red container">
                <div className="row" style={{ position: 'fixed', bottom: 0 }}>
                    <div className="s8 offset-s2 center-align" >
                        <button onClick={() => { this.props.filterUpdate((marker) => { return marker.category == 1 }) }}>ONLY CATEGORY 1</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterTool;