import React, { Component } from 'react';
import M from 'materialize-css';

class YearTool extends Component{
    constructor(props){
        super(props)

        this.setState({
            startYear:props.minYear,
            endYear:props.maxYear,
            startElem: null,
            endElem: null
        })
    }

    componentDidMount = () => {
        // var slider = document.getElementById('test-slider');
        // noUiSlider.create(slider, {
        // start: [20, 80],
        // connect: true,
        // step: 1,
        // orientation: 'horizontal', // 'horizontal' or 'vertical'
        // range: {
        //     'min': 0,
        //     'max': 100
        // }
        // });
    }

    render(){
        return(
            <div id='year-slider'></div>
        )
    }
}

export default YearTool;