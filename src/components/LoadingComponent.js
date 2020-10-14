import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

const spinner = <FontAwesomeIcon icon={faCog} className="fa-spin fa-1x"/>

const spinnerStyle = {
color:'grey',
fontSize:100,
padding:'50px 50px'
};

export const Loading = () => {
    return (
        <div className="col-2 mx-auto">
            <h1 style={spinnerStyle}>{spinner}</h1>
            <p>Loading...</p>
        </div>
    );
};