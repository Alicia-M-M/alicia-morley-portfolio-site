import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
// import Home from './HomeComponent';
// import Contact from './ContactComponent';
// import { Switch, Route, Redirect } from 'react-router-dom';
import { WORK } from '../shared/work';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            work: WORK,
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>

        )
    }
}

export default Main;