import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const copyright = <FontAwesomeIcon icon={faCopyright} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} size="4x" />
const github = <FontAwesomeIcon icon={faGithub} size="4x" />

function Footer(props) {

    return (
        <footer className="site-footer d-flex align-items-center">
            <div className="container text-center">
            {props.pageLinks.map(pageLink => 
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