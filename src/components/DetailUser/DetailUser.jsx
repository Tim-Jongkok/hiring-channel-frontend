import React, { Component } from 'react';

import './DetailUser.css';

import profilImg from '../../assets/img/gambar.png';
import starIcon from '../../assets/img/star.png';
import checkIcon from '../../assets/img/check.png';

class DetailUser extends Component {
   state = {}
   render() {
      return (
         <>
            <div className="main-content mb-5">
               {/* Purple jumbotron */}
               <div className="row no-gutters">
                  <div className="col">
                     <div className="top-jumbotron">
                     </div>
                  </div>
               </div>
               {/* End of Purple jumbotron */}

               {/* Body */}
               <div className="body-content">
                  <div className="row row-cols-1 row-cols-lg-2 no-gutters ml-lg-5">
                     {/* Profile photo */}
                     <div className="col-12 col-lg-2">
                        <div className="row no-gutters">
                           <div className="col text-center text-lg-left">
                              <div className="profil-pict">
                                 <img src={profilImg} alt="..." />
                              </div>
                              <h5>@budiramadhan</h5>
                              <p><img src={starIcon} alt="" className="small-icon" /> 97% Success Rate</p>
                              <p><img src={checkIcon} alt="" className="small-icon" /> 47 Project</p>
                           </div>
                        </div>
                     </div>
                     {/* End of Profile photo */}

                     {/* Description */}
                     <div className="col-12 col-lg-9 mx-lg-4 mt-lg-4">
                        <div className="row no-gutters mb-3 mt-lg-5">
                           <div className="col text-center text-lg-left">
                              <h2>Budi Ramadhan</h2>
                              <h5>Frontend Developer</h5>
                           </div>
                        </div>
                        <div className="row no-gutters mt-lg-5">
                           <div className="col px-3 px-lg-0">
                              <div className="text-justify">
                                 <p>I worked more than 8 years in Software Industry. Widely recognized as the most comprehensive and rigorous full-stack developer in the country;<br /> <br />
                                 I work as Virtual Interim CTO and Full Stack Lead developer, seeking for a new opportunities.</p>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque aliquam praesentium aspernatur recusandae quaerat optio nisi ipsam eveniet similique, facere quae repellendus, quia officiis? Sint, excepturi? Architecto, nemo consequatur.</p>
                              </div>
                           </div>
                        </div>
                        <div className="row no-gutters skill-parent">
                           <div className="col text-center text-lg-left">
                              <h6>Skills : </h6>
                              <h6>NodeJs, React, React Native, Binomo</h6>
                           </div>
                        </div>
                     </div>
                     {/* End of Description */}

                  </div>
                  <div className="row no-gutters ml-lg-5 mb-5 mb-lg-0 mt-3 mt-lg-0 btn-hire-parent">
                     <div className="col-lg-2 order-lg-first order-2 text-center mb-2">
                        <button type="button" className="btn btn-hire">Hire Me</button>
                     </div>
                     <div className="col-lg-2 text-center text-lg-left ml-lg-2 mb-2">
                        <button type="button" className="btn btn-link btn-history"><h6>History</h6></button>
                     </div>
                     <div className="col-lg-auto ml-lg-auto text-center order-last mr-lg-5 mb-2">
                        <button type="button" className="btn btn-light">Edit</button>
                     </div>
                  </div>
               </div>
               {/* End of Body */}

            </div>
         </>
      );
   }
}

export default DetailUser;