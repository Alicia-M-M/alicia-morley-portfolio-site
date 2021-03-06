import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Loading } from './LoadingComponent';
import { Fade } from 'react-animation-components';

function About(props) {
    const aboutCards = props.aboutInfo.aboutInfo.map(aboutInfos => {
        return (
            <div key={aboutInfos.id}>
                <RenderAboutCards aboutInfos={aboutInfos} />
            </div>
        )
    });

    if (props.aboutInfo.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.aboutInfo.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.aboutInfo.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="container-fluid about-container-height container-background-color pb-5">
                <div className="row">
                    <div id="about_id" className="col-12 col-md-8 text-center pb-5 mx-auto">
                        <h2 className="page-header-styling  mx-auto mb-4">ABOUT ME</h2>
                        <p className="px-4 mx-auto">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                    </div>
                </div>
                <Fade in>
                    {aboutCards}
                </Fade>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 mx-auto text-center py-5">
                        <div className="button-background mx-auto">
                            <Button><a href={"/assets/images/resume.pdf"}>DOWNLOAD MY RESUME</a></Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function RenderAboutCards({ aboutInfos }) {
    // navigation

    const history = useHistory();

    const handleClick = () => { (aboutInfos.id === 0) ? history.push("/contactme") : history.push("/work"); }

    // styling

    const color =
        (aboutInfos.id === 0) ? 'colour-overlay-container-green' : 'colour-overlay-container-yellow';

    const aboutText = (aboutInfos.id === 1) ? ' black-info-text' : ' white-info-text';

    // order
    const order =
        (aboutInfos.id % 2 === 0) ? 'order-md-first' : 'order-md-last';

    // modal

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    return (
        <>
            <div className="row about-info-styling mx-auto mb-5">
                <div className={`work-container-styles col-md-6 col-12 about-image-styling  ${order}`}>
                    <div className={`${color}`} onClick={toggle}>
                        <img className="about-image-styling-direct" width="100%" src={aboutInfos.img} alt={aboutInfos.imgheader} />
                        <div className="about-overlayed-text">
                            <h3 className={`text-center${aboutText}`}>{aboutInfos.title}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12 text-center align-self-center">
                    <h3 className="py-4">
                        {aboutInfos.imgheader}
                    </h3>
                    <p className="card-text px-4 pb-4">
                        {aboutInfos.imgtext}
                    </p>
                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} centered>
                <ModalBody className="mx-auto text-center" >
                    <ModalHeader toggle={toggle}></ModalHeader>
                    <video className="about-image-styling-modal" width="100%" autoPlay loop muted>
                        <source
                            src={aboutInfos.video}
                            type="video/mp4" />
                    </video>

                    <h3 className="py-4 text-center">{aboutInfos.imgheader}</h3>
                    <p className="px-4 mx-auto">
                        {aboutInfos.modalText}
                    </p>
                </ModalBody>
                <ModalFooter className="text-center py-4 mt-2">
                    <div className="button-background mx-auto">
                        <Button onClick={handleClick}><div className="button-text">{aboutInfos.button}</div></Button>{' '}
                    </div>
                </ModalFooter>
            </Modal>
        </>
    );
}


export default About;