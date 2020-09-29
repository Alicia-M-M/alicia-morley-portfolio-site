import React from 'react';
// import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardTitle,  Button } from 'reactstrap';
// import './stylesb.css';
// import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import "./styley.css";
import Modal from "./Modal";
import useModal from "./useModal";

function RenderWorkCardItem({ example }) {
    const { isShowing, toggle } = useModal();
    return (
        <React.Fragment>
            <Card>
            
                <CardImg width="100%" src={example.image} alt={example.name} />
                <CardImgOverlay>
                
                    <Button className="button-default" onClick={toggle}>Show Modal</Button>
                    <Modal isShowing={isShowing} hide={toggle} />
                    <CardTitle>
                        <h3 className="text-center">{example.name}</h3>
                        <h5 className="text-center">{example.description}</h5>
                    </CardTitle>
                </CardImgOverlay>
            </Card>
        </React.Fragment>
    )
}

function Work(props) {

    const work = props.examples.map(example => {
        return (
            <div key={example.id} className="col-md-6 pb-4">
                {/* <RenderModal example={example} /> */}
                <RenderWorkCardItem example={example} />
            </div>
        )
    });

    return (
        <div className="work_id container my-5">
            <div classname="row">
                <div className="col text-center pb-4">
                    <h1>WORK EXAMPLES</h1>
                    <p>Below are my most recent examples of work:</p>
                </div>
            </div>
            <div className="row">
                {work}
            </div>
        </div>
    );
}

// function RenderModal({ example }) {

//     const [modalState, setModalState] = useState(false);

//     const toggleModalState = () => {
//         setModalState(!modalState)
//     }

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-4">
//                     {/* <div className="md"> */}
//                         <div className={`modalBackground modalShowing-${modalState}`}>
//                             <div className="modalInner">
//                                 <div clasName="modalImage">
//                                     <img src={example.image} alt={example.name}></img>
//                                 </div>
//                                 <div className="modalText">
//                                     <h2>This is a modal header{example.name}</h2>
//                                     {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p> */}
//                                     <form action="">
//                                         <button>Join Now!</button>
//                                     </form>
//                                     <button className="exitButton" onClick={() => toggleModalState()}>Exit</button>
//                                 </div>

//                             </div>
//                         </div>
//                         <button onClick={() => toggleModalState()}>Open modal</button>
//                     {/* </div> */}
//                 </div>
//             </div>
//         </div>
//     );
// }

// function RenderModal({ example }) {

//     const [modalState, setModalState] = useState(false);

//     const toggleModalState = () => {
//         setModalState(!modalState)
//     }

//     return (
//         <React.Fragment>
//             <Card>
//                 <CardImg width="100%" src={example.image} alt={example.name} />
//                 <CardImgOverlay>
                    {/* <Button className="button-default" onClick={toggle}>Show Modal</Button>
                    <Modal isShowing={isShowing} hide={toggle} /> */}
                    {/* <CardTitle>
                        <button onClick={() => toggleModalState()}>{example.name}</button>
                        <h3 className="text-center">{example.name}</h3>
                        <h5 className="text-center">{example.description}</h5>
                    </CardTitle>
                </CardImgOverlay>
            </Card> */}

            {/* <div className="container">
                <div className="row">
                    <div className="col-4"> */}
            {/* <div className="md"> */}
            {/* <div className={`modalBackground modalShowing-${modalState}`}>
                <Modal>
                    <ModalBody>
                        <img src={example.image} alt={example.name}></img>

                        <ModalHeader>
                            <h2>This is a modal header{example.name}</h2> */}
                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p> */}
                            {/* <form action="">
                                <button>Join Now!</button>
                            </form>
                            <button className="exitButton" onClick={() => toggleModalState()}>Exit</button>
                        </ModalHeader>
                    </ModalBody>
                </Modal>
            </div> */}

            {/* </div> */}
            {/* </div>
                </div>
            </div> */}
        {/* </React.Fragment>
    );
} */}


export default Work;

// export default Work;


// function RenderModal({ example }) {
// const [show, setShow] = useState(false);

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

// const [modalState, setModalState] = useState(false);

// const toggleModalState = () => {
//     setModalState(!modalState)
// }
// return (
// <React.Fragment>
{/* <h1>WORK EXAMPLES</h1> */ }
{/* <Button variant="primary" onClick={handleShow}>
                        Launch </Button> */}
{/* <button onClick={() => toggleModalState()}>Open modal</button> */ }
{/* <Modal show={show} onHide={handleClose}> */ }
// <Modal>
//     <ModalHeader closeButton>
//     </ModalHeader>
//     <ModalBody>Woohoo, you're reading this text in a modal!</ModalBody>
//     <ModalFooter>
{/* <Button variant="secondary" onClick={handleClose}>
                                Close</Button> */}
//             <button className="exitButton" onClick={() => toggleModalState()}>
//                 Exit
//     </button>
//         </ModalFooter>
//     </Modal>
//     )}
// </React.Fragment>

//     );
// }