import React from 'react';

function Graphic(props) {
    const graphic = props.hero.map(info => {
        return (
            <div key={info.id} className="col-12">
                <RenderHeroGraphicItem info={info} />
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                {graphic}
            </div>
        </div>
    );

};

function RenderHeroGraphicItem({ info }) {
    return (
        <div className="container hero-graphic-container pb-5">
            <div className="row hero-graphic-photo">
                <div className="col">
                    <img width="100%" src={info.image} alt={info.title} />
                </div>
            </div>
            <div className="row">
                <div className="col-4 overlayed-text text-center mx-auto">
                    <h1>{info.title}</h1>
                    <h4>{info.intro}</h4>
                </div>
            </div>
        </div>
    )

}








export default Graphic;