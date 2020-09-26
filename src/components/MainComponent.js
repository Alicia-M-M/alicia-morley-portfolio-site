import React, { Component } from 'react';
import Header from './HeaderComponent';
import Graphic from './GraphicComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
// import PopUp from './PopUpComponent';
// import PopOut from './Modal';
import Work from './WorkComponent';
// import TesterApp from './testerApp';
// import Modal from './Modal';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
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

        const MainPage = () => {
            return (
                <div>
                    <Graphic hero={this.state.hero} />
                    <About />
                    <Work examples={this.state.examples} />
                    {/* <Modal examples={this.state.examples} /> */}
                    {/* <PopUp /> */}
                    {/* <TesterApp /> */}
                    {/* <PopOut examples={this.state.examples}/> */}
                </div>
            );
        };

        return (
            <div>
                <Header />
                {/* <Graphic hero={this.state.hero} />
                <Work examples={this.state.examples} />
                <PopUp /> */}
                <Switch>
                    <Route exact path='/home' component={MainPage} />
                    <Route exact path='/about' component={MainPage} />
                    <Route exact path='/work' component={MainPage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>

        )
    }
}

export default Main;