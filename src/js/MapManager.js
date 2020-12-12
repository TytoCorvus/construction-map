import React, { Fragment } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import markers_raw from '../markers'
import InfoWindowContent from './InfoWindowContent';
import FilterTool from './FilterTool'

class MapManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      infoWindow: null,
      markers_raw: markers_raw,
      markers_filtered: markers_raw,
      filter: (marker) => { return true; }
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

  filterUpdate = (newFilter) => { this.setState({ filter: newFilter }) }

  render() {
    let infoWindow;

    if (this.state.infoWindow != null) {
      var winState = this.state.infoWindow
      var windowOptions = { pixelOffset: { width: 0, height: -45 } }

      infoWindow =
        <InfoWindow position={winState.position} onCloseClick={() => { this.setState({ infoWindow: null }) }} options={windowOptions}>
          <InfoWindowContent name={winState.name}></InfoWindowContent>
        </InfoWindow>;
    } else {
      infoWindow = <></>
    }


    return (
      <Fragment>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '90%' }}
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
              this.state.markers_filtered.filter(this.state.filter).map(marker => {
                return <Marker position={marker.position} onClick={() => { this.setState({ infoWindow: { position: marker.position, name: marker.name } }) }}>

                </Marker>
              })
            }

          </GoogleMap>
        </LoadScript>
        <FilterTool filterUpdate={this.filterUpdate}></FilterTool>
      </Fragment>
    )
  }
}

export default MapManager;