import React, { Component } from 'react';
import {
    Button, Label, Col, Row
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            message: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };


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

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
    }

    render() {

        return (
            <div className="container-fluid about-me-container">
                {/* <div className="col-12"> */}
                <ContactInfo />
                {/* </div> */}
                <div className="col-md-10 mx-auto">
                    <LocalForm onSubmit={values => this.handleSubmit(values)} >
                        <Row className="form-group">
                            <Col md={10} className="mx-auto">
                                <Label htmlFor="firstName" >FIRST NAME</Label>
                                <Control.text model=".firstName" id="firstName" name="firstName"
                                    placeholder="First Name"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".firstName"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={10} className="mx-auto">
                                <Label htmlFor="lastName">LAST NAME</Label>
                                <Control.text model=".lastName" id="lastName" name="lastName"
                                    placeholder="Last Name"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".firstName"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={10} className="mx-auto">
                                <Label htmlFor="phoneNum" >PHONE</Label>
                                <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                    placeholder="Phone number"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(10),
                                        maxLength: maxLength(15),
                                        isNumber
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".phoneNum"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 10 numbers',
                                        maxLength: 'Must be 15 numbers or less',
                                        isNumber: 'Must be a number'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={10} className="mx-auto">
                                <Label htmlfor="email">EMAIL</Label>
                                <Control.text model=".email" id="email" name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    validators={{
                                        required,
                                        validEmail
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".email"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        validEmail: 'Invalid email address'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={10} className="mx-auto">
                                <Label htmlFor="message" >MESSAGE</Label>
                                <Control.textarea model=".message" id="message" name="message"
                                    className="form-control"
                                    rows="12"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col className="text-center mx-auto" md={{ size: 10, offset: 2 }}>
                                <Button className="button-styling-green" type="submit">SUBMIT</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </div>
            </div>

        );
    }
};

function ContactInfo(props) {

    return (
        // <div className="container-fluid my-5 about-me-container">
        <>
            <div className="row">
                <div className="col text-center py-5">
                    <h2 className="about-me-header mx-auto">CONTACT ME</h2>
                    <p className="mx-auto pt-4">gmail@gmail.com
                    <br></br>or send me a message:</p>
                </div>
            </div>
            <div className="row">
            </div>
        </>
        // </div>
    );
}

export default Contact;