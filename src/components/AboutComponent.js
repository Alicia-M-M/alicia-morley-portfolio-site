import React from 'react';
import { Button } from 'reactstrap';

function About(props) {

    return (
        <div id="about_id" className="container my-5">
            <div classname="row">
                <div className="col text-center pb-4">
                    <h1>ABOUT ME</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                </div>
            </div>
            <div className="row">
                <div className="col-4 mx-auto text-center">
                    <Button>DOWNLOAD MY RESUME</Button>
                </div>
            </div>
        </div>
    );
}


export default About;