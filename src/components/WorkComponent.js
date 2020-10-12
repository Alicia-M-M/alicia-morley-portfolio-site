import React from "react";
import { Link } from 'react-router-dom';

function RenderWorkCardItem({ example }) {

    // styling 

    // const workOverlay = (example.color) ? 'colour-overlay-container-yellow' : 'colour-overlay-container-green';

    // const workText = (example.textColor) ? ' black-info-text' : ' white-info-text';

    // const workSoftware = (example.textColor) ? ' black-info-text' : ' white-info-text';

    // const workHorizontalLine = (example.textColor) ? ' black-info-text' : ' white-info-text';

    // return (
    //     <Link to={`/work/${example.id}`}>
    //         <div className={`${workOverlay}`}>
    //             <img className="card-work-info-photo img-fluid" src={example.image} alt={example.name} />
    //         </div>
    //         <div className="d-flex align-items-center">
    //             <div className="work-overlayed-text">
    //                 <h3 className={`text-center ${workText}`}>{example.name}</h3><hr className={`mx-auto ${example.textColor ? ' line-width-black' : ' line-width-white'}`}></hr>
    //                 <h5 className={`text-center pt-1 ${workHorizontalLine}`}>{example.software}</h5>
    //             </div>
    //         </div>
    //     </Link>

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
        <div className="container my-5">
            <div className="row">
                <div className="col-8 text-center py-5 mx-auto">
                    <h2 className="about-me-header mx-auto">WORK EXAMPLES</h2>
                    <p className="mx-auto pt-4">Below are my most recent examples of work:</p>
                </div>
            </div>
            <div className="row">
                {work}
            </div>
        </div>
    );
}

export default Work;

