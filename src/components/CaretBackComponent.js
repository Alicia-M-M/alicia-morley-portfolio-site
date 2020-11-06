import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const backArrow = <FontAwesomeIcon icon={faCaretLeft} size="2x" />

function CaretBack(props) {
    return (
        <div className="col-md-1 my-auto"><button className="back-arrow" onClick={props.back}>{backArrow}</button></div>
    )
}

export default CaretBack;