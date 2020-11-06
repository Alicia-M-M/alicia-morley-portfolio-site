import React, { Component } from 'react';
import { EXAMPLESREACT } from '../shared/examplesReact';
import GenericCard from './GenericCard';
import CaretBack from './CaretBackComponent'
import CaretForward from './CaretForwardComponent'

class WorkGallery extends Component {
    constructor(props) {
        super(props);

        this.onClickBack = this.onClickBack.bind(this)
        this.onClickNext = this.onClickNext.bind(this)


        this.state = {
            activeIndex: 0,
            examplesReact: EXAMPLESREACT,
            length: EXAMPLESREACT.length


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
                        {this.state.examplesReact.map((exampleReact) =>
                            <div className={
                                exampleReact.id === this.state.activeIndex ? 'active' : 'inactive'} key={exampleReact.id} >
                                <GenericCard
                                    name={exampleReact.name}
                                    image={exampleReact.image}
                                    software={exampleReact.software}
                                    description={exampleReact.description}
                                    figma={exampleReact.figma}
                                    github={exampleReact.github}
                                    linkedIn={exampleReact.linkedIn}
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

export default WorkGallery;


