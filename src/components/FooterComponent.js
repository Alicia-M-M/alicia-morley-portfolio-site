import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const copyright = <FontAwesomeIcon icon={faCopyright} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} size="4x" />
const github = <FontAwesomeIcon icon={faGithub} size="4x" />

function Footer() {

    return (
        <footer className="site-footer d-flex align-items-center">
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-3 col-md-4 mx-auto d-flex social-media-wrap-footer ">
                        <div className="col-6 px-0">
                            {github}
                        </div>
                        <div className="col-6 px-0">
                            {linkedin}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 mx-auto pt-3">
                        <h4>{copyright}{" "}2020 ALICIA MORLEY</h4>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;