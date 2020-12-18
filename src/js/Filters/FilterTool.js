import React, { Component } from 'react';
import CompanyFilter from './CompanyFilter';
import FocusTool from './FocusTool';
import YearTool from './YearTool';

import M from 'materialize-css';

class FilterTool extends Component {
    static defaultProps = {
        filterButtonClassNames: "col s3",
        tempStorage: ""
    }
    
    constructor(props) {
        super(props)

        var defaultFilter = () => { return false; } //By default return none

    }

    createSumOfFilters = () => {

    }

    getFilterFromAllChildren() {

    }

    updateSingleFilter = (filterName) => (newFilter) => {
        this.props.filterUpdate({
                [filterName]: newFilter
            })
    }

    render() {
        var filterButtonClasses = this.props.filterButtonClassNames

        var containerStyle = {position: 'absolute', bottom: '0px', width: '100%', height: '0%', backgroundColor: 'transparent'}
        var sectionStyle = {border: '2px solid', borderColor: 'silver', borderRadius: '4px', margin: '5px'}

        return (
            <div className="valign-wrapper" style={containerStyle}>
                <div style={{position:'relative', left: '50%'}}>
                    <img className="responsive-img circle waves-effect waves-light waves-circle" 
                                    src="img/ui/arrow_single_step.png" 
                                    style={{width: '50px'}}>
                    </img>
                </div>
                <div className="container grey z-depth-2">
                    <div className="row valign-wrapper" style={{height: '100%'}}>
                        <div className="col s3 center-align" style={sectionStyle}><CompanyFilter filterUpdate={this.updateSingleFilter('company')}/></div>
                        <div className="col s3 center-align" style={sectionStyle}><YearTool filterUpdate={this.updateSingleFilter('year')} minYear={1990} maxYear={2020}/></div>
                        <div className="col s3 center-align" style={sectionStyle}><FocusTool focusUpdate={this.props.focusUpdate}/></div>
                        <div className="col s3 center-align" style={sectionStyle}>All / Clear</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterTool;