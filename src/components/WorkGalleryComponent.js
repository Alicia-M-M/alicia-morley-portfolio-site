import React, { Component } from 'react';
import { EXAMPLESREACT } from '../shared/examplesReact';
import { EXAMPLESBOOTSTRAP } from '../shared/examplesBootstrap';
import { EXAMPLESMISC } from '../shared/examplesMisc';
import { EXAMPLESBACKEND } from '../shared/examplesBackend';
import GenericCard from './GenericCard';
import CaretBack from './CaretBackComponent'
import CaretForward from './CaretForwardComponent'

class WorkGallery extends Component {
    constructor(props) {
        super(props);

        this.onClickBack = this.onClickBack.bind(this)
        this.onClickNext = this.onClickNext.bind(this)

        const DATA =
            (props.id === 0) ? EXAMPLESREACT
                : (props.id === 1) ? EXAMPLESBOOTSTRAP
                    : (props.id === 2) ? EXAMPLESBACKEND
                        : EXAMPLESMISC;

        this.state = {
            activeIndex: 0,
            data: DATA,
            length: DATA.length

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
                <div className="row align-items-center mx-auto">
                    <div className="col-6 col-md-1 order-2 order-md-1 mx-auto">
                        <CaretBack
                            back={this.onClickBack}
                        />
                    </div>
                    <div className="col-md-10 order-1 order-md-2">
                        {this.state.data.map((dataInfo) =>
                            <div className={
                                dataInfo.id === this.state.activeIndex ? 'active' : 'inactive'} key={dataInfo.id} >
                                <GenericCard
                                    name={dataInfo.name}
                                    image={dataInfo.image}
                                    software={dataInfo.software}
                                    description={dataInfo.description}
                                    figma={dataInfo.figma}
                                    github={dataInfo.github}
                                    linkedIn={dataInfo.linkedIn}
                                />
                            </div>
                        )}
                    </div>
                    <div className="col-6 col-md-1 order-3 order-md-3 mx-auto">
                        <CaretForward
                            forward={this.onClickNext}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkGallery;


