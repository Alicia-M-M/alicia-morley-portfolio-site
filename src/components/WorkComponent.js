import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Button } from 'reactstrap';
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

// export default Work;


// function Work(props) {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     return (
//         <React.Fragment>
//             <h1>WORK EXAMPLES</h1>
//             {props.examples.map(example =>
//                 <div key={example.id}>
//                     <h2>{example.name}</h2>
//                     <Button variant="primary" onClick={handleShow}>
//                         Launch </Button>
//                     <Modal show={show} onHide={handleClose}>
//                         <ModalHeader closeButton>
//                         </ModalHeader>
//                         <ModalBody>Woohoo, you're reading this text in a modal!</ModalBody>
//                         <ModalFooter>
//                             <Button variant="secondary" onClick={handleClose}>
//                                 Close</Button>
//                         </ModalFooter>
//                     </Modal>
//                 </div>
//             )}
//         </React.Fragment>

//     );
// }

export default Work;