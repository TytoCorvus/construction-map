import React, { Component } from 'react';
import M from 'materialize-css';

class CompanyFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companies: [
                { name: 'Panattoni' },
                { name: 'El Dorado County' },
                { name: 'Catalyst' },
                { name: 'Hensel Phelps' },
                { name: 'Erickson Enterprises' }
            ]
        }
    }

    componentDidMount(){
        var element = document.querySelectorAll('#company-filter')
        M.FloatingActionButton.init(element, {direction: 'top', hoverEnabled: true})
    }
    

    render() {
        var {companies, buttonHeight} = this.state
        return (
            <div id="company-filter">

            </div>
        )
    }
}

export default CompanyFilter;