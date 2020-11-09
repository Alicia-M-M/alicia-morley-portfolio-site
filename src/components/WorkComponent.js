import React, { useState } from 'react';
import { Loading } from './LoadingComponent';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import WorkGallery from './WorkGalleryComponent';
import WorkGalleryTwo from './WorkGalleryComponentTwo';
import WorkGalleryThree from './WorkGalleryComponentThree';
import WorkGalleryFour from './WorkGalleryComponentFour';

function RenderWorkCardItem({ example }) {
    // modal
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    // styling
    const workOverlay = (example.color) ? 'colour-overlay-container-green' : 'colour-overlay-container-yellow';

    const workText = (example.textColor) ? ' white-info-text' : ' black-info-text';

    const boxBackground = (example.textColor) ? ' work-overlayed-text' : ' work-overlayed-text-2';

    // show correct component
    const imageGallery =
        (example.id === 0) ?
            <WorkGallery />
            : (example.id === 1) ?
                <WorkGalleryTwo />
                : (example.id === 2) ?
                    <WorkGalleryThree />
                    :
                    <WorkGalleryFour />
        ;

    return (
        <>
            <div className="work-container-styles" onClick={toggle}>
                <div className={`${workOverlay}`}>
                    <img className="card-work-info-photo img-fluid" src={example.image} alt={example.name} />
                </div>
                <div className="d-flex align-items-center">
                    <div className={`${boxBackground}`}>
                        <h3 className={`text-center ${workText}`}>{example.name}</h3>
                        <h5 className={`text-center pt-1 ${workText}`}>{example.software}</h5>
                    </div>
                </div>
            </div>
            <Modal centered isOpen={modal} toggle={toggle} contentClassName="gallery-card-modal" >
                <ModalBody className="mx-auto text-center" >
                    <ModalHeader className="modal-close" toggle={toggle}></ModalHeader>
                    <div>
                        {imageGallery}
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}

function Work(props) {
    const work = props.examples.examples.map(example => {
        return (
            <div key={example.id} className={`col-md-6 col-sm-12 pb-4 ${example.id === 2 ? ' order-last' : ' order-md-last'}`}>
                <RenderWorkCardItem example={example} />
            </div>
        )
    });


    if (props.examples.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.examples.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.examples.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid container-background-color container-height">
            <div className="row">
                <div className="col-md-8 col-12 text-center pb-5 mx-auto">
                    <h2 className="page-header-styling  mx-auto">WORK EXAMPLES</h2>
                    <p className="mx-auto pt-4">Below are my most recent examples of work:</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {work}
                </div>
            </div>
        </div>
    );
}

export default Work;

