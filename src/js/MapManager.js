import React, { Component } from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

class MapManager extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            map: null
        }
    }

    onLoad = () => (map) => {
      const bounds = new window.google.maps.LatLngBounds();
      this.state.map.fitBounds(bounds);
      this.setMap(map)
    }
   
    onUnmount = () => (map) => {
      this.setMap(null)
    }

    setMap = (map) => {
        this.setState({map: map})
    }

    render(){
        return (
            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
            >
              <GoogleMap
                mapContainerStyle={{width: '100%', height: '100%'}}
                center={{lat: 10.745,
                         lng: 10.523}}
                zoom={10}
                onLoad={this.onLoad}
                onUnmount={this.onUnmount}
              >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
              </GoogleMap>
            </LoadScript>
          )
    }
}

export default MapManager;