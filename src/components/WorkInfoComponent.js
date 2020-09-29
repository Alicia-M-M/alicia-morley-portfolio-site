import React from 'react';
import { CardHeader, CardText, Card, CardBody, CardImg } from 'reactstrap';
// import { Link } from 'react-router-dom';

function RenderInfoCard({ example }) {
    return (
        <div className="col-md-5">
            <Card>
            <CardImg width="100%" src={example.image} alt={example.name} />
                <CardBody>
                    <CardHeader>{example.name}{example.software}</CardHeader>
                    <CardText>{example.description}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function WorkInfo(props) {
    if (props.example) {
        return (
            <div className="container">
                <div className="row">
                    <RenderInfoCard example={props.example} />
                </div>
            </div>
        );
    }

    return <div/>
}

export default WorkInfo;