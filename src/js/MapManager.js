import React, { Component } from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function MapManager() {
    const [map, setMap] = React.useState(null)
   
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map)
    }, [])
   
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
   
    return (
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={{width: '800px', height: '800px'}}
          center={{lat: 10.745,
                   lng: 10.523}}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }

export default MapManager;