import React, { Component } from 'react';
import CompanyFilter from './CompanyFilter';
import FocusTool from './FocusTool';
import ResetTool from './ResetTool';

class FilterTool extends Component {
    static defaultProps = {
        filterButtonClassNames: "col s3"
    }

    constructor(props) {
        super(props)

        var defaultFilter = () => { return false; } //By default return none
        this.state = {
            windowEnabled: false
        }
    }

    flipEnabled = () => () => {
        console.log(this.state.windowEnabled)
        this.setState({ windowEnabled: !this.state.windowEnabled })
    }

    updateSingleFilter = (filterName) => (newFilter) => {
        this.props.filterUpdate({
            [filterName]: newFilter
        })
    }

    render() {
        var filterButtonClasses = this.props.filterButtonClassNames

        var containerStyle = { position: 'absolute', bottom: '10px', width: '100%', height: '30%', backgroundColor: 'transparent' }
        var sectionStyle = { border: '2px solid', borderColor: 'silver', borderRadius: '4px', margin: '5px' }
        var iconClasses = "btn-floating btn-large red darken-1"
        var iconName = "close"


        if (!this.state.windowEnabled) {
            containerStyle.pointerEvents = 'none'
            containerStyle.opacity = 0
            iconClasses = "btn-floating btn-large black"
            iconName = "list"
        }

        return (
            <div>
                <div className="valign-wrapper" style={containerStyle}>
                    <div className="container grey z-depth-2">
                        <div className="row valign-wrapper" style={{ height: '100%' }}>
                            <div className="col s4 center-align" style={sectionStyle}><CompanyFilter filterUpdate={this.updateSingleFilter('company')} /></div>
                            <div className="col s4 center-align" style={sectionStyle}><FocusTool focusUpdate={this.props.focusUpdate} /></div>
                            <div className="col s4 center-align" style={sectionStyle}><ResetTool resetFiltersAndFocus={this.props.resetFiltersAndFocus} /></div>
                        </div>
                    </div>
                </div>
                <div className={iconClasses} style={{ position: 'absolute', left: '5%', bottom: '5%' }}>
                    <i className="material-icons large" onClick={this.flipEnabled()}>{iconName}</i>
                </div>
            </div>
        )
    }
}

export default FilterTool;