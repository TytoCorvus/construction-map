import React, { Component, Fragment } from 'react';
import FilterTitle from './FilterTitle';

class ResetTool extends Component {
    render() {
        return (
            <div className="container center-align">
                <FilterTitle>Set All/None</FilterTitle>
                <div className="row" >
                    <div className="col s12">
                        <a className="btn flow-text" style={{ width: '100%', padding: '5px' }} onClick={() => { this.props.resetFiltersAndFocus(true) }}>ALL</a>
                    </div>
                    <div className="col s12" >
                        <a className="btn flow-text" style={{ width: '100%', padding: '5px' }} onClick={() => { this.props.resetFiltersAndFocus(false) }}>NONE</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResetTool;