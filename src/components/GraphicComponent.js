import React from 'react';
import About from './AboutComponent';

function Graphic(props) {
    const graphic = props.hero.map(info => {
        return (
            <>
            <div key={info.id}>
                <RenderHeroGraphicItem info={info} />
            </div>
            <div>
                <About />
            </div>
            </>
        )
    });

    return (
        <div className="container-fluid">
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
                <div className="overlayed-text text-center ">
                    <h1>{info.title}</h1>
                    <h4 className="graphic-intro-text mx-auto">{info.intro}</h4>
                </div>
            </div>
        </div>
    )

}








export default Graphic;