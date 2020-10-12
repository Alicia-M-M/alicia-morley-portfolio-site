import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { FadeTransform } from 'react-animation-components';


function About(props) {
    const aboutCards = props.aboutInfo.map(aboutInfos => {
        return (
            <div key={aboutInfos.id}>
                <RenderAboutCards aboutInfos={aboutInfos} />
            </div>
        )
    });

    return (
        <>
            <div className="container-fluid my-5 about-me-container pb-5">
                <div className="row">
                    <div className="col-12 col-md-8 text-center pb-5 mx-auto">
                        <h2 className="about-me-header mx-auto mb-4">ABOUT ME</h2>
                        <p className="px-4 mx-auto">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                    </div>
                </div>
                {aboutCards}
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 mx-auto text-center py-5">
                        <Button className="button-styling-green "><a href={"/assets/images/resume.pdf"}>DOWNLOAD MY RESUME</a></Button>
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
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(50%)'
                }}>
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
            </FadeTransform>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody className="mx-auto" >
                    <ModalHeader toggle={toggle}></ModalHeader>
                    <img width="100%" src={aboutInfos.img} alt={aboutInfos.imgheader} />
                    <h3 className="py-4 text-center">{aboutInfos.imgheader}</h3>
                    <p className="px-4 mx-auto">
                        {aboutInfos.modalText}
                    </p>
                </ModalBody>
                <ModalFooter className="text-center py-4 mt-2">
                    <Button className="button-styling-green mx-auto" onClick={handleClick}>{aboutInfos.button}</Button>{' '}
                </ModalFooter>
            </Modal>
        </>
    );
}

export default About;