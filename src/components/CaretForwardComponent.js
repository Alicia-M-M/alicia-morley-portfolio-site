import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const forwardArrow = <FontAwesomeIcon icon={faCaretRight} size="2x" />

function CaretForward(props) {
    return (
        <>
            <button className="back-arrow" onClick={props.forward}>{forwardArrow}</button>
        </>
    )
}

export default CaretForward;