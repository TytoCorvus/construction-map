import React, {Component} from 'react'

function FilterTitle(props){

    return (
        <b className="black-text">
            {props.children}
        </b> 
    )
}

export default FilterTitle