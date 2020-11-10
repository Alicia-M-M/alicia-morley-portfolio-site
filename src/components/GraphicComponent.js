import React from 'react';
import { FadeTransform } from 'react-animation-components';
import { Loading } from './LoadingComponent';

function Graphic(props) {
    const graphic = props.hero.hero.map(info => {
        return (
            <div key={info.id}>
                <RenderHeroGraphicItem info={info} />
            </div>
        )
    });

    if (props.hero.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.hero.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.hero.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div id="home_id" className="container-fluid">
            {graphic}
        </div>
    );
};

function RenderHeroGraphicItem({ info }) {
    return (
        <div className="row mx-auto">
            <div className="col-12 hero-graphic-photo mx-auto">
                <div className="colour-overlay">
                    <img width="100%" src={info.image} alt={info.title} />
                </div>
                <FadeTransform
                    in
                    transformProps={
                        { enterTransform: "translatey(-220px)" }
                    }
                >
                    <h1 className="overlayed-text mx-auto">{info.title}</h1>

                </FadeTransform>
                <FadeTransform
                    in
                    transformProps={{
                        enterTransform: "translatey(-120px)",
                    }}
                >
                    <h4 className="overlayed-text-2 mx-auto text-center">{info.intro}</h4>

                </FadeTransform>
            </div>
        </div>
    )
}

export default Graphic;