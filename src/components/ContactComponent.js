import React, { Component } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Col
} from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    render() {
        return (
            <div id="contact_id" className="container">
                <div className="col-12">
                    <ContactInfo />
                </div>
                <div className="col-md-10 mx-auto">
                    <Form onSubmit={this.handleSubmit} >
                        <FormGroup row>
                            <Label htmlFor="firstName" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" id="firstName" name="firstName"
                                    placeholder="First Name"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastName" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lastName" name="lastName"
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="phoneNum" md={2}>Phone</Label>
                            <Col md={10}>
                                <Input type="tel" id="phoneNum" name="phoneNum"
                                    placeholder="Phone number"
                                    value={this.state.phoneNum}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email" id="email" name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="feedback" md={2}>Message</Label>
                            <Col md={10}>
                                <Input type="textarea" id="feedback" name="feedback"
                                    rows="12"
                                    value={this.state.feedback}
                                    onChange={this.handleInputChange}></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col className="text-center" md={{ size: 10, offset: 2 }}>
                                <Button type="submit">SUBMIT</Button>

                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>

        );
    }
};

function ContactInfo(props) {

    return (
        <div id="about_id" className="container my-5">
            <div classname="row">
                <div className="col text-center pb-4">
                    <h1>CONTACT ME</h1>
                    <p>Cemail@gmail.com
                    <br></br>or send me a message:</p>
                </div>
            </div>
            <div className="row">
            </div>
        </div>
    );
}

export default Contact;