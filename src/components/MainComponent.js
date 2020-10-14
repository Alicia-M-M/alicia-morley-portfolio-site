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
import { actions } from 'react-redux-form';
import { fetchExamples, fetchAboutInfo, fetchHero, fetchPageLinks } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        examples: state.examples,
        hero: state.hero,
        aboutInfo: state.aboutInfo,
        pageLinks: state.pageLinks
    };
};

const mapDispatchToProps = {
    fetchExamples: () => (fetchExamples()),
    fetchAboutInfo: () => (fetchAboutInfo()),
    fetchHero: () => (fetchHero()),
    fetchPageLinks: () => (fetchPageLinks()),
    resetMessageForm: () => (actions.reset('messageForm'))
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchExamples();
        this.props.fetchAboutInfo();
        this.props.fetchHero();
        this.props.fetchPageLinks();
    }

    render() {

        const WorkMatchClick = ({ match }) => {
            return (
                <WorkInfo
                    example={this.props.examples.examples.filter(example => example.id === +match.params.exampleId)[0]}
                    isLoading={this.props.examples.isLoading}
                    errMess={this.props.examples.errMess}
                />
            );
        }

        const MainPage = () => {
            return (
                <div>
                    <Graphic hero={this.props.hero} />
                    <About aboutInfo={this.props.aboutInfo} />
                </div>
            );
        };


        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route exact path='/home' component={MainPage} />
                            <Route exact path='/work' render={() => <Work examples={this.props.examples} />} />
                            <Route path='/work/:exampleId' component={WorkMatchClick} />
                            <Route exact path='/contactme' render={() => <Contact resetMessageForm={this.props.resetMessageForm} />} />
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer pageLinks={this.props.pageLinks} />
            </div>

        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));