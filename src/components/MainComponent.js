import React, { Component } from 'react';
import Header from './HeaderComponent';
import Graphic from './GraphicComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import Work from './WorkComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { fetchExamples, fetchAboutInfo, fetchHero, fetchPageLinks, fetchExamplesBackend, fetchExamplesReact, fetchExamplesBootstrap, fetchExamplesMisc } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        examples: state.examples,
        hero: state.hero,
        aboutInfo: state.aboutInfo,
        pageLinks: state.pageLinks,
        examplesBackend: state.examplesBackend,
        examplesReact: state.examplesReact,
        examplesBootstrap: state.examplesBootstrap,
        examplesMisc: state.examplesMisc,

    };
};

const mapDispatchToProps = {
    fetchExamples: () => (fetchExamples()),
    fetchAboutInfo: () => (fetchAboutInfo()),
    fetchHero: () => (fetchHero()),
    fetchPageLinks: () => (fetchPageLinks()),
    fetchExamplesBackend: () => (fetchExamplesBackend()),
    fetchExamplesReact: () => (fetchExamplesReact()),
    fetchExamplesBootstrap: () => (fetchExamplesBootstrap()),
    fetchExamplesMisc: () => (fetchExamplesMisc()),
    resetMessageForm: () => (actions.reset('messageForm'))
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchExamples();
        this.props.fetchAboutInfo();
        this.props.fetchHero();
        this.props.fetchPageLinks();
        this.props.fetchExamplesBackend();
        this.props.fetchExamplesReact();
        this.props.fetchExamplesBootstrap();
        this.props.fetchExamplesMisc();
    }

    render() {
        const MainPage = () => {
            return (
                <div>
                    <Graphic hero={this.props.hero} />
                    <About aboutInfo={this.props.aboutInfo} />
                </div>
            );
        };


        const WorkPage = () => {
            return (
                <div>
                    <Work
                        examples={this.props.examples}
                        examplesBackend={this.props.examplesBackend.examplesBackend}
                        examplesReact={this.props.examplesReact.examplesReact}
                        examplesBootstrap={this.props.examplesBootstrap.examplesBootstrap}
                        examplesMisc={this.props.examplesMisc.examplesMisc}
                    />
                </div>
            )
        };

        return (
            <>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/home' component={MainPage} />
                        <Route exact path='/work' component={WorkPage} />
                        <Route exact path='/contactme' render={() => <Contact resetMessageForm={this.props.resetMessageForm} />} />
                        <Redirect to='/home' />
                    </Switch>
                    <Footer pageLinks={this.props.pageLinks} />
                </div>

            </>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));