import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Work from './WorkComponent';
// import Home from './HomeComponent';
// import Contact from './ContactComponent';
// import { Switch, Route, Redirect } from 'react-router-dom';
import { EXAMPLES } from '../shared/examples';
import { HERO } from '../shared/hero';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            examples: EXAMPLES,
            hero: HERO,
        };
    }

    render() {
        return (
            <div>
                <Header />
                {/* <MainGraphic hero={this.state.hero}/> */}
                <Work examples={this.state.examples} />
                <Footer />
            </div>

        )
    }
}

export default Main;