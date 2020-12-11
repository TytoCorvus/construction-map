import React, { Component } from "react";

class NavBar extends Component{

    render(){
        

        return(
            <div className="valign-wrapper orange" style={{width: '100%', height: '180px'}}>
                <div className="container">
                    <div className="row">
                        <button className="col s3 gray offset-s1"> Button 1</button>
                        <button className="col s3 gray offset-s1"> Button 2</button>
                        <button className="col s3 gray offset-s1"> Button 1</button>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default NavBar;