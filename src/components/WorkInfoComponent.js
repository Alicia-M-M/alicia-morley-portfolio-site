import React from 'react';
import { CardHeader, CardText, Card, CardBody, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const github = <FontAwesomeIcon icon={faGithub} size="4x" />
const figma = <FontAwesomeIcon icon={faFigma} size="4x" />
const linkedin = <FontAwesomeIcon icon={faLinkedin} size="4x" />


function RenderInfoCard({ example }) {
    return (
        <div className="col-12" >
            <Card className="workInfoCard">
                <CardImg className="col-md-6" src={example.image} alt={example.name} />
                <CardBody className="col-md-6" >
                    <CardHeader>{example.name}{example.software}</CardHeader>
                    <CardText>{example.description}
                        <a href={example.github}>{github}</a>
                        <a href={example.figma}>{figma}</a>
                        <a href={example.linkedIn}>{linkedin}</a>
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
                    <div className="col-4 mx-auto">
                        <Breadcrumb>
                            <BreadcrumbItem className="mx-auto" ><Link to="/work">RETURN TO PREVIOUS PAGE</Link>
                                {/* <BreadcrumbItem active>{props.example.name}
                                </BreadcrumbItem> */}
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>

                <div className="row py-5">
                    <RenderInfoCard example={props.example} />
                </div>

            </div>
        );
    }

    return <div />;
}

export default WorkInfo;