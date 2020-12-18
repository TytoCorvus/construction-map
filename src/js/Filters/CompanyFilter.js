import React, { Component, Fragment } from 'react';
import FilterTitle from './FilterTitle';
import M from 'materialize-css';

class CompanyFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companies: [
                { name: 'Panattoni', 
                  ref: React.createRef()},
                { name: 'El Dorado County', 
                  shortName: 'El Dorado',
                ref: React.createRef() },
                { name: 'Catalyst Construction', 
                shortName: 'Catalyst',
                ref: React.createRef() },
                { name: 'Hensel Phelps',
                shortName: 'HP', 
                ref: React.createRef() }
            ]
        }
    }

    componentDidMount(){
        var element = document.querySelectorAll('#company-filter')
        M.FloatingActionButton.init(element, {direction: 'top', hoverEnabled: true})
    }
    
    updateFilters(){
        const {companies} = this.state;
        const companiesActive = companies.filter(company => {return company.ref.current.checked}).map(company => company.name)

        this.props.filterUpdate(companiesActive)
    }

    render() {
        var {companies, buttonHeight} = this.state
        return (
            <div className="container">
                <FilterTitle>Company Filter</FilterTitle>
               <div className="row">
                   {
                       companies.map(company => {
                           return   <Fragment>
                                        <div className="col s2" style={{width: '20%'}}>
                                            <label class="switch">
                                                <input ref={company.ref} type="checkbox" onChange={() => this.updateFilters()}/>
                                                <span class="slider"></span>
                                            </label>
                                        </div>
                                        <div className="col s10" style={{width: '80%'}}>
                                            <div className="btn" style={{width: '100%'}}>{company.name}</div>
                                        </div>
                                    </Fragment>
                       })
                   }
               </div>
            </div>
        )
    }
}

export default CompanyFilter;