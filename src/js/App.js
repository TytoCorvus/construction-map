import {Fragment} from "react"
import NavBar from "./NavBar.js"
import MapManager from "./MapManager.js"


function App() {

  //This should return two major sections - the navbar with the various navigation buttons along the top, and the space for the map down below.

  return (
    <div style={{height: '100vh'}}>
      <div className="blue"> Nav bar, I guess?</div>
      <MapManager></MapManager>
    </div>
  );
}

export default App;
