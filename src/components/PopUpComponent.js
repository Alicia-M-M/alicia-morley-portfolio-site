import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

class PopUp extends Component {
    constructor(props) {
        super(props);

        this.state = {

            isModalOpen: false
        };


        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    render() {
        return (
            <React.Fragment>
                <Button outline onClick={this.props.toggleModal}>Login
        </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default PopUp;