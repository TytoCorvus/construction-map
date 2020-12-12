import React, { Component, Fragment } from "react";

function InfoWindowContent(props){
    return(
        <div>
            <h1><b>Project: {props.name}</b></h1>
        </div>
    )
}

export default InfoWindowContent;