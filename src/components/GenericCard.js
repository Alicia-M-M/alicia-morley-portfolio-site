import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { CardTitle, CardText, Card, CardBody, CardImg, CardFooter, CardSubtitle } from 'reactstrap';

const github = <FontAwesomeIcon icon={faGithub} size="3x" />
const figma = <FontAwesomeIcon icon={faFigma} size="3x" />
const linkedin = <FontAwesomeIcon icon={faLinkedin} size="3x" />


function GenericCard(props) {
    return (
        <div>
            <Card className="workInfoCard row text-center">
                <CardImg width="100%" className="card-work-info-photo col-md-6 px-0" src={props.image} alt={props.name} />
                <CardBody className="col-md-6 align-self-center px-3" >
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle className="pb-3">{props.software}</CardSubtitle>
                    <CardText className="mx-auto">{props.description}
                    </CardText>
                    <CardFooter>
                        <div>
                            <a className="px-2" href={props.github}>{github}</a>
                            <a className="px-2" href={props.figma}>{figma}</a>
                            <a className="px-2" href={props.linkedIn}>{linkedin}</a>
                        </div>
                    </CardFooter>
                </CardBody>
            </Card>
        </div>
    )
}

export default GenericCard;



