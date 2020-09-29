import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderWorkCardItem({ example }) {
    return (
        <React.Fragment>
            <Card>
            <Link to={`/work/${example.id}`}>
                <CardImg width="100%" src={example.image} alt={example.name} />
                <CardImgOverlay className="d-flex align-items-center">
                    <CardBody>
                        <h3 className="text-center">{example.name}</h3><hr className="line-width"></hr>
                        <h5 className="text-center">{example.software}</h5>
                    </CardBody>
                </CardImgOverlay>
                </Link>
            </Card>
        </React.Fragment>
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
        <div className="work_id container my-5">
            <div classname="row">
                <div className="col text-center pb-4">
                    <h1>WORK EXAMPLES</h1>
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

