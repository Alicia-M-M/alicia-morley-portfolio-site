import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Loading } from './LoadingComponent';


const copyright = <FontAwesomeIcon icon={faCopyright} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} size="4x" />
const github = <FontAwesomeIcon icon={faGithub} size="4x" />

function Footer(props) {

    if (props.pageLinks.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.pageLinks.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.pageLinks.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <footer className="site-footer d-flex align-items-center">
            <div className="container text-center">
            {props.pageLinks.pageLinks.map(pageLink => 
                <div key={pageLink.id} className="row">
                    <div className="mx-auto d-flex justify-content-center social-media-wrap-footer text-center">
                        <div className="col-6"><a href={pageLink.gitHubMain}>{github}</a>
                        </div>
                        <div className="col-6"><a href={pageLink.linkedInMain}>{linkedin}</a>
                        </div>
                    </div>
                </div>)}
                <div className="row">
                    <div className="col-md-4 col-sm-6 mx-auto pt-3">
                        <h4>{copyright}{" "}{new Date().getFullYear()} ALICIA MORLEY</h4>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;