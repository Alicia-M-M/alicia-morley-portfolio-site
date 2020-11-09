import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const backArrow = <FontAwesomeIcon icon={faCaretLeft} size="2x" />

function CaretBack(props) {
    return (
        <>
            <button className="back-arrow" onClick={props.back}>{backArrow}</button>
        </>
    )
}

export default CaretBack;