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
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        examples: state.examples,
        hero: state.hero,
        aboutInfo: state.aboutInfo
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
                    <About aboutInfo={this.props.aboutInfo}/>
                </div>
            );
        };


        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                        {/* <Route exact path='/home' render={() => <Graphic hero={this.props.hero} />} /> */}
                            {/* <Route exact path='/about' component={MainPage} /> */}
                            <Route exact path='/home' component={MainPage} />
                            <Route exact path='/work' render={() => <Work examples={this.props.examples} />} />
                            <Route path='/work/:exampleId' component={WorkMatchClick} />
                            <Route exact path='/contactus' component={Contact} />
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>

        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));