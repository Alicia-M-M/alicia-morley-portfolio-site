import React from 'react';
import { Link } from 'react-router-dom';

function RenderWorkCardItem({ example }) {

    // withoutHoverState
    // return (
    //     <Card className="work-card">
    //         <Link to={`/work/${example.id}`}>
    //             <CardImg className="card-work-info-photo" src={example.image} alt={example.name} />
    //             <CardImgOverlay className="colour-overlay-container-yellow d-flex align-items-center">
    //                 <CardBody>
    //                     <h3 className="text-center ">{example.name}</h3><hr className="line-width mx-auto"></hr>
    //                     <h5 className="text-center">{example.software}</h5>
    //                 </CardBody>
    //             </CardImgOverlay>
    //         </Link>
    //     </Card>
    // )

    // hoverStateAdded
    // return (
    //     <Card className="work-card">
    //         <Link to={`/work/${example.id}`}>
    //             <CardImg className="card-work-info-photo" src={example.image} alt={example.name} />
    //             <CardImgOverlay className={`d-flex align-items-center${example.color ? ' colour-overlay-container-yellow' : ' colour-overlay-container-green'}`}>
    //                 <CardBody>
    //                     <h3 className="text-center">{example.name}</h3><hr className="line-width mx-auto"></hr>
    //                     <h5 className="text-center">{example.software}</h5>
    //                 </CardBody>
    //             </CardImgOverlay>
    //         </Link>
    //     </Card>
    // )

    return (
        <div className="work-card col">
            <Link to={`/work/${example.id}`}>
                <div className={example.color ? 'colour-overlay-container-yellow' : 'colour-overlay-container-green'}>
                    <img className="card-work-info-photo img-fluid" src={example.image} alt={example.name} />
                </div>
                <div className="d-flex align-items-center">
                    <div className="work-overlayed-text">
                        <h3 className="text-center work-project-info">{example.name}</h3><hr className="line-width mx-auto"></hr>
                        <h5 className="text-center work-project-software pt-1">{example.software}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}

function Work(props) {
    const work = props.examples.map(example => {
        return (
            <div key={example.id} className="col-md-6 pb-4">
                <RenderWorkCardItem example={example} />
            </div>
        )
    });

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-8 text-center pb-4 mx-auto">
                    <h2>WORK EXAMPLES</h2>
                    <p>Below are my most recent examples of work:</p>
                </div>
            </div>
            <div className="row">
                {work}
            </div>
        </div>
    );
}

export default Work;

