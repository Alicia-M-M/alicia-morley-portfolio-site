import React from "react";
import ReactDOM from "react-dom";


const Modal = ({isShowing, hide }) =>

    isShowing
        ? ReactDOM.createPortal(
            <React.Fragment>
                <div className="modal-overlay" />
                <div
                    className="modal-wrapper"
                    aria-modal
                    aria-hidden
                    tabIndex={-1}
                    role="dialog"
                >
                    <div className="modala">
                    {/* <img src="assets/images/project-2-image.png" alt="project"></img> */}
                        <div className="modal-header">
                            <button
                                type="button"
                                className="modal-close-button"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={hide}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div>
                        <p>Hello, I'm a modal.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>,
            document.body
        )
        : null;


export default Modal;

// import React, { useState } from 'react';
// import './stylesb.css';

// function PopOut() {

//     const [modalState, setModalState] = useState(false);

//     const toggleModalState = () => {
//         setModalState(!modalState)
//     }

//     return (
//         <div className="md">
//             <div className={`modalBackground modalShowing-${modalState}`}>
//                 <div className="modalInner">
//                     <div clasName="modalImage">
//                         <img src="assets/images/project-1-image.png" alt="modal pic"></img>
//                     </div>
//                     <div className="modalText">
//                         <h2>This is a modal header</h2>
//                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
//                         <form action="">
//                             <button>Join Now!</button>
//                         </form>
//                         <button className="exitButton" onClick={() => toggleModalState()}>
//                             Exit
//             </button>
//                     </div>
//                 </div>
//             </div>
//             <button onClick={() => toggleModalState()}>Open modal</button>
//         </div>
//     );
// }

// export default PopOut;