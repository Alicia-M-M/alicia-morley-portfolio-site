import React from 'react';
import { Button } from 'reactstrap';

function About(props) {

    return (
        <div id='about_id' className="container my-5">
            <div classname="row">
                <div className="col-8 text-center pb-4 mx-auto">
                    <h2>ABOUT ME</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 mx-auto text-center mx-auto">
                    <Button className="button-styling-green">DOWNLOAD MY RESUME</Button>
                </div>
            </div>
        </div>
    );
}

    export default About;