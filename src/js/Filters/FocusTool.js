import React, { Component } from 'react';
import FilterTitle from './FilterTitle';
import M from 'materialize-css';

class FocusTool extends Component{
    static defaultProps = {
        positions: [
            {
                title: "North America",
                position:{
                    lat: 43.84716537198397, 
                    lng: -97.48872773398878
                },
                zoom: 4
            },
            {
                title: "California",
                position:{
                    lat: 37.560856762150735, 
                    lng: -120.19728785990019
                },
                zoom: 6
            },
            {
                title: "Sacramento Area",
                position:{
                    lat: 38.58254842185882,  
                    lng: -121.483400850858
                },
                zoom: 9
            },
            {
                title: "El Dorado County",
                position:{
                    lat: 38.72894447146784,  
                    lng: -120.80352179352778
                },
                zoom: 13
            }
        ]
    }


    render(){
        let {focusUpdate, positions} = this.props;

        return(
            <div className="container">
                <FilterTitle>Map Focus</FilterTitle>
               <div className="row">
                   {
                       positions.map(position => {
                           return   <div className="col s12">
                                        <a className="btn flow-text" style={{padding: '5px', fontSize: 'x-small', width: '100%'}} onClick={() => {focusUpdate({center: position.position, zoom: position.zoom})}}>{position.title}</a>
                                    </div>
                       })
                   }
               </div>
            </div>
        )
    }

}


export default FocusTool;