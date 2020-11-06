import React, { Component } from 'react';
import { EXAMPLESBOOTSTRAP } from '../shared/examplesBootstrap';
import GenericCard from './GenericCard';
import CaretBack from './CaretBackComponent'
import CaretForward from './CaretForwardComponent'

class WorkGalleryTwo extends Component {
    constructor(props) {
        super(props);

        this.onClickBack = this.onClickBack.bind(this)
        this.onClickNext= this.onClickNext.bind(this)


        this.state = {
            activeIndex: 0,
            examplesBootstrap: EXAMPLESBOOTSTRAP,
            length: EXAMPLESBOOTSTRAP.length
        };
    }

    onClickBack() {
        let index = this.state.activeIndex;
        let length = this.state.length;
        if (index < 1) {
            index = length - 1;
        }
        else {
            index--;
        }
        this.setState({
            activeIndex: index
        });
    }
    onClickNext() {
        let index = this.state.activeIndex;
        let length = this.state.length;
        if (index === length - 1) {
            index = 0
        }
        else {
            index++;
        }
        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <div className="container-work-modal-card py-5">
                <div className="row">
                    <CaretBack
                        back={this.onClickBack}
                    />
                    <div className="col-md-10">
                        {this.state.examplesBootstrap.map((exampleBootstrap) =>
                            <div className={
                                exampleBootstrap.id === this.state.activeIndex ? 'active' : 'inactive'} key={exampleBootstrap.id} >
                                <GenericCard
                                    name={exampleBootstrap.name}
                                    image={exampleBootstrap.image}
                                    software={exampleBootstrap.software}
                                    description={exampleBootstrap.description}
                                    figma={exampleBootstrap.figma}
                                    github={exampleBootstrap.github}
                                    linkedIn={exampleBootstrap.linkedIn}
                                />
                            </div>
                        )}
                    </div>
                    <CaretForward
                        forward={this.onClickNext}
                    />
                </div>
            </div>
        );
    }
}

export default WorkGalleryTwo;


