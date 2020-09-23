import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderWorkCardItem({ example }) {
    return (
        <Card>
            <CardImg width="100%" src={example.image} alt={example.name} />
            <CardImgOverlay>
                <CardTitle>
                    <h3 className="text-center">{example.name}</h3>
                    <h5 className="text-center">{example.description}</h5>
                </CardTitle>
            </CardImgOverlay>
        </Card>
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