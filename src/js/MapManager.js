import React, { Fragment } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import markers_raw from '../markers'
import InfoWindowContent from './InfoWindowContent';
import FilterTool from './Filters/FilterTool'

class MapManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      mapFocus: {
        center: {
          lat: 43.84716537198397, 
          lng: -97.48872773398878
        },
        zoom: 4
      }, 
      infoWindow: null,
      markers_raw: markers_raw,
      markers_filtered: markers_raw,
      filters:{
        company: []
      }
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



  filterUpdate = (newFilters) => { this.setState({ filters: newFilters }) }

  focusUpdate = (newFocus) => {
    this.setState({mapFocus: newFocus})
  }


  render() {
    let {center, zoom} = this.state.mapFocus;
    let marker_path_base = './img/markers/'
    let marker_path_suffix = '-marker-20.png'

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

    const {filters} = this.state
    let filtered_markers = this.state.markers_raw.filter((marker) => {return filters.company.includes(marker.company)})

    return (
      <Fragment>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '95%' }}
            center={center}
            zoom={zoom}
            onLoad={this.onLoad}
            onUnmount={this.onUnmount}
          >
            {infoWindow}
            {
              filtered_markers.filter((item) => {return item.position.lat && item.position.lng}).map(marker => {
                var marker_path = marker.company != undefined && marker.company != null ? marker_path_base + marker.company + marker_path_suffix :  marker_path_base + 'default-marker-20.png'

                return <Marker icon={marker_path} options={{animation:'DROP'}} position={marker.position} onClick={() => { this.setState({ infoWindow: { position: marker.position, name: marker.name } }) }}>

                </Marker>
              })
            }

          </GoogleMap>
        </LoadScript>
        <FilterTool filterUpdate={this.filterUpdate} focusUpdate={this.focusUpdate}></FilterTool>
      </Fragment>
    )
  }
}

export default MapManager;