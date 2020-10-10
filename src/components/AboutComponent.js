import React from 'react';
import { Button } from 'reactstrap';

function About(props) {
    const aboutCards = props.aboutInfo.map(aboutInfos => {
        return (
            <div key={aboutInfos.id}>
                <RenderAboutCards aboutInfos={aboutInfos} />
            </div>
        )
    });

    return (
        <div className="container-fluid my-5">
            <div className="row about-me-container">
                <div className="col-12 col-md-8 text-center pb-4 mx-auto ">
                    <h2 className="about-me-header mx-auto mb-4">ABOUT ME</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                </div>
            </div>
            {aboutCards}
            <div className="row">
                <div className="col-6 mx-auto text-center mx-auto">
                    <Button className="button-styling-green">DOWNLOAD MY RESUME</Button>
                </div>
            </div>
        </div>
    );
}

function RenderAboutCards({ aboutInfos }) {

    return (
        <div className="row about-info-styling mx-auto pb-4">

            <div className={`col-md-6 text-center${aboutInfos.id % 2 === 0 ? ' order-md-last' : ' order-sm-first'}`}>

                <img width="100%" src={aboutInfos.img} alt={aboutInfos.imgheader} />
            </div>
            <div className="col-md-6 text-center align-self-center">
                <h3 className="pt-3">
                    {aboutInfos.imgheader}
                </h3>
                <h6 className="card-text py-3">
                    {aboutInfos.imgtext}
                </h6>
            </div>
        </div>
    );
}

export default About;