import React from "react";
import { Link } from 'react-router-dom';

function RenderWorkCardItem({ example }) {

    const workOverlay = (example.color) ? 'colour-overlay-container-green' : 'colour-overlay-container-yellow';

    const workText = (example.textColor) ? ' white-info-text' : ' black-info-text';

    const boxBackground = (example.textColor) ? ' work-overlayed-text' : ' work-overlayed-text-2';
    return (
        <Link to={`/work/${example.id}`}>
            <div className="work-container-styles">
                <div className={`${workOverlay}`}>
                    <img className="card-work-info-photo img-fluid" src={example.image} alt={example.name} />
                </div>
                <div className="d-flex align-items-center">
                    <div className={`${boxBackground}`}>
                        <h3 className={`text-center ${workText}`}>{example.name}</h3>
                        <h5 className={`text-center pt-1 ${workText}`}>{example.software}</h5>
                    </div>
                </div>
            </div>
        </Link>
    )
}

function Work(props) {
    const work = props.examples.map(example => {
        return (
            <div key={example.id} className={`col-md-6 col-sm-12 pb-4 ${example.id === 2 ? ' order-last' : ' order-md-last'}`}>
                <RenderWorkCardItem example={example} />
            </div>
        )
    });

    return (
        <div className="container-fluid container-background-color container-height">
            <div className="row">
                <div className="col-md-8 col-12 text-center pb-5 mx-auto">
                    <h2 className="page-header-styling  mx-auto">WORK EXAMPLES</h2>
                    <p className="mx-auto pt-4">Below are my most recent examples of work:</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {work}
                </div>
            </div>
        </div>
    );
}

export default Work;

