import React, { Component } from 'react';
import Header from './HeaderComponent';
import Graphic from './GraphicComponent';
// import About from './AboutComponent';
import Footer from './FooterComponent';
import Work from './WorkComponent';
import WorkInfo from './WorkInfoComponent';
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

        const WorkMatchClick = ({ match }) => {
            return (
                <WorkInfo
                    example={this.state.examples.filter(example => example.id === +match.params.exampleId)[0]}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    {/* <Route exact path='/home' component={MainPage} />
                    <Route exact path='/about' component={MainPage} /> */}
                    <Route exact path='/home' render={ () => <Graphic hero={this.state.hero} />} />
                    <Route exact path='/work' render={ () => <Work examples={this.state.examples} />} />
                    <Route path='/work/:exampleId' component={WorkMatchClick} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>

        )
    }
}

export default Main;