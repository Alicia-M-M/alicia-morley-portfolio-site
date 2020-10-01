import React from 'react';
import { CardTitle, CardText, Card, CardBody, CardImg, CardFooter, CardSubtitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const github = <FontAwesomeIcon icon={faGithub} size="3x" />
const figma = <FontAwesomeIcon icon={faFigma} size="3x" />
const linkedin = <FontAwesomeIcon icon={faLinkedin} size="3x" />
const backArrow = <FontAwesomeIcon icon={faCaretLeft} size="3x" />

function RenderInfoCard({ example }) {
    return (
        <div className="col-lg-10 col-md-12 px-5 mx-auto" >
            <Card className="workInfoCard row text-center">
                <CardImg width="100%" className="card-work-info-photo col-md-6 px-0" src={example.image} alt={example.name} />
                <CardBody className="col-md-6 align-self-center px-2" >
                    <CardTitle>{example.name}</CardTitle><hr className="mx-auto"></hr>
                    <CardSubtitle className="py-3">{example.software}</CardSubtitle>
                    <CardText>{example.description}
                    </CardText>
                    <CardFooter>
                        <a className="px-2" href={example.github}>{github}</a>
                        <a className="px-2" href={example.figma}>{figma}</a>
                        <a className="px-2" href={example.linkedIn}>{linkedin}</a>
                    </CardFooter>
                </CardBody>
            </Card>
        </div>
    );
}

function WorkInfo(props) {
    if (props.example) {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 col-md-12 mx-auto">
                        <Breadcrumb >
                            <BreadcrumbItem><Link className="back-arrow d-flex align-items-center" to="/work"><div>{backArrow}</div><div className="pl-3">
                                BACK
                            </div></Link>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>

                <div className="row pb-5">
                    <RenderInfoCard example={props.example} />
                </div>

            </div>
        );
    }

    return <div />;
}

export default WorkInfo;

