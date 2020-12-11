import React, { Component, Fragment } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

class MapManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      infoWindow: null,
      markers: [
        {
          name: `marker one`,
          position: { lat: 43.614754372451884, lng: -116.19987129466638 },
          category: 1
        },
        {
          name: `SBG Idaho`,
          position: { lat: 43.61876818474454, lng: -116.21621942141249 },
          category: 2
        },
        {
          name: `Goliath Games`,
          position: { lat: 43.594157468554116, lng: -116.21398689870419 }, 
          category: 1
        },
        {
          name: `Military Reserve`,
          position: { lat: 43.61951349534232, lng: -116.18068468572707 },
          category: 2
        }
      ]
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
    this.setState({ map: map })
  }

  render() {
    let infoWindow;

    if(this.state.infoWindow != null){
      var winState = this.state.infoWindow
      var windowOptions = {pixelOffset: {width: 0, height: -45}}

      infoWindow =  
        <InfoWindow position={winState.position} onCloseClick={() => {this.setState({infoWindow:null})}} options={windowOptions}>
          <div>
            <h1><b>Project: {winState.name}</b></h1>
          </div>
          
          
        </InfoWindow> ;
      } else {
        infoWindow = <></>
      }

    return (
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{
            lat: 43.614754372451884,
            lng: -116.19987129466638
          }}
          zoom={12}
          onLoad={this.onLoad}
          onUnmount={this.onUnmount}
        >
          {infoWindow}
          {
            this.state.markers.map(marker => {
              return <Marker position={marker.position}  onClick={() => {this.setState({infoWindow:{position:marker.position, name: marker.name}})}}> 
                      
                    </Marker>
            })
          }
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default MapManager;