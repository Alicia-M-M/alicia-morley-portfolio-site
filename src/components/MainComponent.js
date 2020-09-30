import React, { Component } from 'react';
import Header from './HeaderComponent';
import Graphic from './GraphicComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import Work from './WorkComponent';
import WorkInfo from './WorkInfoComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        examples: state.examples,
        hero: state.hero
    };
};

class Main extends Component {

    render() {

        const WorkMatchClick = ({ match }) => {
            return (
                <WorkInfo
                    example={this.props.examples.filter(examples => examples.id === +match.params.exampleId)[0]}
                />
            );
        }

        const MainPage = () => {
            return (
                <div>
                    <Graphic hero={this.props.hero} />
                    <About />
                </div>
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    {/* {/* <Route exact path='/home' component={MainPage} /> */}
                    <Route exact path='/home' component={MainPage} />
                    <Route exact path='/about' component={MainPage} />

                    {/* <Route exact path='/home' render={ () => <Graphic hero={this.state.hero} />} /> */}
                    <Route exact path='/work' render={() => <Work examples={this.props.examples} />} />
                    <Route path='/work/:exampleId' component={WorkMatchClick} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>

        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));