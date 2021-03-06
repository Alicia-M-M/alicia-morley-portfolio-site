import React, { useState } from 'react';
import { Loading } from './LoadingComponent';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import WorkGallery from './WorkGalleryComponent';
import { Fade } from 'react-animation-components';

function RenderWorkCardItem({ example, backEndObject, reactObject, bootStrapObject, miscObject }) {

    const DATA =
        (example.id === 0) ? reactObject
            : (example.id === 1) ? bootStrapObject
                : (example.id === 2) ? backEndObject
                    : miscObject;

    // modal
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    // styling
    const workOverlay = (example.color) ? 'colour-overlay-container-green' : 'colour-overlay-container-yellow';

    const workText = (example.textColor) ? ' white-info-text' : ' black-info-text';

    const boxBackground = (example.textColor) ? ' work-overlayed-text' : ' work-overlayed-text-2';

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
                    <ModalHeader className="modal-work-close" toggle={toggle}></ModalHeader>
                    <div>
                        <WorkGallery
                            id={example.id}
                            DATA={DATA}
                        // backEndObject={backEndObject}
                        // reactObject={reactObject}
                        // bootStrapObject={bootStrapObject}
                        // miscObject={miscObject}
                        />
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}

function Work(props) {
    const backEndObject = props.examplesBackend;
    const reactObject = props.examplesReact;
    const bootStrapObject = props.examplesBootstrap;
    const miscObject = props.examplesMisc;
    const work = props.examples.examples.map(example => {
        return (
            <div key={example.id} className={`col-md-6 col-sm-12 pb-4 ${example.id === 2 ? ' order-last' : ' order-md-last'}`}>
                <Fade in>
                    <RenderWorkCardItem
                        example={example}
                        backEndObject={backEndObject}
                        reactObject={reactObject}
                        bootStrapObject={bootStrapObject}
                        miscObject={miscObject}
                    />
                </Fade>
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

