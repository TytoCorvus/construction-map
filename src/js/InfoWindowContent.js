import React, { Component, Fragment } from "react";

function InfoWindowContent(props) {

    let { yearComplete, name, address, company, streetView } = props.marker;

    let addressString = "";
    if (addressString.street_address) {
        addressString = `${address.street_address}\n${address.city}, ${address.state} ${address.postal_code}`;
    }

    var streetViewButton = !streetView ? <></> : <a className="btn-large blue lighten-2"
        style={{ width: '100%' }}
        href={streetView}
        target="_blank">Take me there</a>

    return (

        <div className="gray lighten-4" style={{}}>
            <h5><b>{name}</b></h5>
            <p>
                <b>Year completed: </b>{yearComplete}<br />
                <b>Built with: </b> {company}<br />
                <b>Address: </b>{addressString}
            </p>
            {streetViewButton}
        </div>
    )
}

export default InfoWindowContent;