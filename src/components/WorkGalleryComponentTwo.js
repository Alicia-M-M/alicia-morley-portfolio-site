// import React, { Component } from 'react';
// import { EXAMPLESBOOTSTRAP } from '../shared/examplesBootstrap';
// import GenericCard from './GenericCard';
// import CaretBack from './CaretBackComponent'
// import CaretForward from './CaretForwardComponent'

// class WorkGalleryTwo extends Component {
//     constructor(props) {
//         super(props);

//         this.onClickBack = this.onClickBack.bind(this)
//         this.onClickNext = this.onClickNext.bind(this)


//         this.state = {
//             activeIndex: 0,
//             examplesBootstrap: EXAMPLESBOOTSTRAP,
//             length: EXAMPLESBOOTSTRAP.length
//         };
//     }

//     onClickBack() {
//         let index = this.state.activeIndex;
//         let length = this.state.length;
//         if (index < 1) {
//             index = length - 1;
//         }
//         else {
//             index--;
//         }
//         this.setState({
//             activeIndex: index
//         });
//     }
//     onClickNext() {
//         let index = this.state.activeIndex;
//         let length = this.state.length;
//         if (index === length - 1) {
//             index = 0
//         }
//         else {
//             index++;
//         }
//         this.setState({
//             activeIndex: index
//         });
//     }

//     render() {
//         return (
//             <div className="container-work-modal-card py-5">
//                 <div className="row align-items-center mx-auto">
//                     <div className="col-6 col-md-1 order-2 order-md-1 mx-auto">
//                         <CaretBack
//                             back={this.onClickBack}
//                         />
//                     </div>
//                     <div className="col-md-10 order-1 order-md-2">
//                         {this.state.examplesBootstrap.map((exampleBootstrap) =>
//                             <div className={
//                                 exampleBootstrap.id === this.state.activeIndex ? 'active' : 'inactive'} key={exampleBootstrap.id} >
//                                 <GenericCard
//                                     name={exampleBootstrap.name}
//                                     image={exampleBootstrap.image}
//                                     software={exampleBootstrap.software}
//                                     description={exampleBootstrap.description}
//                                     figma={exampleBootstrap.figma}
//                                     github={exampleBootstrap.github}
//                                     linkedIn={exampleBootstrap.linkedIn}
//                                 />
//                             </div>
//                         )}
//                     </div>
//                     <div className="col-6 col-md-1 order-3 order-md-3 mx-auto">
//                         <CaretForward
//                             forward={this.onClickNext}
//                         />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default WorkGalleryTwo;


