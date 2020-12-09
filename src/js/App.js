import {Fragment} from "react"
import NavBar from "./NavBar.js"
import MapManager from "./MapManager.js"


function App() {

  //This should return two major sections - the navbar with the various navigation buttons along the top, and the space for the map down below.

  return (
    <Fragment>
      <NavBar></NavBar>
      <MapManager></MapManager>
    </Fragment>
  );
}

export default App;
