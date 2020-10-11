// import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState } from 'react';

function About(props) {
    const aboutCards = props.aboutInfo.map(aboutInfos => {
        return (
            <div key={aboutInfos.id}>
                <RenderAboutCards aboutInfos={aboutInfos} />
            </div>
        )
    });

    return (
        <div className="container-fluid my-5 about-me-container pb-5">
            <div className="row">
                <div className="col-12 col-md-8 text-center pb-4 mx-auto">
                    <h2 className="about-me-header mx-auto mb-4">ABOUT ME</h2>
                    <p className="px-4 mx-auto">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                </div>
            </div>
            {aboutCards}
            <div className="row">
                <div className="col-12 mx-auto text-center pt-3">
                    <Button className="button-styling-green ">DOWNLOAD MY RESUME</Button>
                </div>
            </div>
        </div>
    );
}

// without-modal
// function RenderAboutCards({ aboutInfos }) {

//     return (
//         <div className="row about-info-styling mx-auto pb-4">

//             <div className={`col-md-6 text-center${aboutInfos.id % 2 === 0 ? ' order-md-last' : ' order-sm-first'}`}>

//                 <img width="100%" src={aboutInfos.img} alt={aboutInfos.imgheader} />
//             </div>
//             <div className="col-md-6 text-center align-self-center">
//                 <h3 className="pt-3">
//                     {aboutInfos.imgheader}
//                 </h3>
//                 <h6 className="card-text py-3">
//                     {aboutInfos.imgtext}
//                 </h6>
//             </div>
//         </div>
//     );
// }

function RenderAboutCards({ aboutInfos }) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <>
            <div className="row about-info-styling mx-auto mb-4">
                <div className={`col-md-6 col-12 about-image-styling ${aboutInfos.id % 2 === 0 ? ' order-md-last' : ' order-xs-last'}`}>
                    <img className="about-image-styling-direct" width="100%"onClick={toggle} src={aboutInfos.img} alt={aboutInfos.imgheader} />
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
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody className="mx-auto">
                    <img width="100%" src={aboutInfos.img} alt={aboutInfos.imgheader} />
                    <h3 className="py-4 text-center">{aboutInfos.imgheader}</h3>
                    <p className="px-4 mx-auto">
                        {aboutInfos.modalText}
                    </p>
                </ModalBody>
                <ModalFooter className="text-center py-4 ">
                    <Button className="button-styling-green" onClick={toggle}>BROWSE MY WORK</Button>{' '}
                </ModalFooter>
            </Modal>
        </>
    );
}



export default About;