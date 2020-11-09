import React, { Component } from 'react';
import {
    Button, Label, Col, Row
} from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

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
        this.props.resetMessageForm();
    }

    render() {

        return (
            <div className="container-fluid container-background-color container-height">
                <ContactInfo />
                <div className="col-md-6 mx-auto">
                    <Form model="messageForm" onSubmit={values => this.handleSubmit(values)} >
                        <Row className="form-group column-stacked">
                            <Col className="mx-auto pb-2">
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
                            <Col className="mx-auto">
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
                        <Row className="form-group column-stacked">
                            <Col className="mx-auto pb-2">
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
                            <Col className="mx-auto">
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
                            <Col className="mx-auto col-md-12">
                                <Label htmlFor="message" >MESSAGE</Label>
                                <Control.textarea model=".message" id="message" name="message"
                                    className="form-control"
                                    rows="12"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group ">
                            <Col className="text-center mx-auto cream-background">
                                <div className="button-background-submit mx-auto" >
                                    <Button className="" type="submit"><div className="button-text">SUBMIT</div></Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>


        );
    }
};

function ContactInfo() {
    return (
        <div className="row">
            <div className="col text-center">
                <h2 className="page-header-styling mx-auto">CONTACT ME</h2>
                <p className="mx-auto pt-4 pb-3">gmail@gmail.com
                    <br></br>or send me a message:</p>
            </div>
        </div>
    );
}

export default Contact;