import React, { Component } from 'react';
// components
import ModalHistory from '../ModalHistory/ModalHistory';
// img & css
import './DetailUser.css';
import profilImg from '../../assets/img/gambar.png';
import starIcon from '../../assets/img/star.png';
import checkIcon from '../../assets/img/check.png';

class DetailUser extends Component {
   state = {
      // profile for page
      profile: {
         id: 1,
         firstName: "Budi",
         lastName: "Ramadhan",
         field: "Frontend Developer",
         rate: 97,
         project: 47,
         description: "I worked more than 8 years in Software Industry. Widely recognized as the most comprehensive and rigorous full-stack developer in the country; I work as Virtual Interim CTO and Full Stack Lead developer, seeking for a new opportunities.",
         skill: "NodeJs, React, React Native, Binomo",
         image: profilImg,
      },
      // current user
      user: {
         id: 1,
      },
      // temp
      showModalHistory: false,
   };

   handleShowModalHistory = () => {
      this.setState({ showModalHistory: true })
   };

   handleCloseModalHistory = () => {
      this.setState({ showModalHistory: false })
   };

   // const[show, setShow] = useState(false);
   // const handleClose = () => setShow(false);
   // const handleShow = () => setShow(true);

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
                                 <img src={this.state.profile.image} alt={`gambar ${this.state.profile.firstName}${this.state.profile.lastName}`} />
                              </div>
                              <h5>@{(`${this.state.profile.firstName}${this.state.profile.lastName}`).toLowerCase()}</h5>
                              <p><img src={starIcon} alt="" className="small-icon" /> {this.state.profile.rate}% Success Rate</p>
                              <p><img src={checkIcon} alt="" className="small-icon" /> {this.state.profile.project} Project</p>
                           </div>
                        </div>
                     </div>
                     {/* End of Profile photo */}

                     {/* Description */}
                     <div className="col-12 col-lg-9 px-lg-4 mt-lg-4 ">
                        <div className="row no-gutters mb-3 mt-lg-5">
                           <div className="col text-center text-lg-left">
                              <h2>{this.state.profile.firstName}&nbsp;{this.state.profile.lastName}</h2>
                              <h5>{this.state.profile.field}</h5>
                           </div>
                        </div>
                        <div className="row no-gutters mt-lg-5">
                           <div className="col px-3 px-lg-0">
                              <div className="text-justify">
                                 <p>{this.state.profile.description}</p>
                              </div>
                           </div>
                        </div>

                     </div>
                     {/* End of Description */}

                  </div>

                  <div className="content-bottom">
                     <div className="row no-gutters ml-lg-5 px-lg-4">
                        <div className="col offset-lg-2 text-center text-lg-left ">
                           <h6>Skills : </h6>
                           <h6>{this.state.profile.skill}</h6>
                        </div>
                     </div>
                     <div className="row no-gutters mb-5 mb-lg-0 mt-3">
                        <div className="col-lg-2 ml-lg-5 order-lg-first order-2 text-center mb-2">
                           {this.state.profile.id !== this.state.user.id ? (
                              <button type="button" className="btn btn-hire">Hire Me</button>
                           ) : (
                                 <button type="button" className="btn btn-hire">Edit</button>
                              )}
                        </div>
                        <div className="col-lg-2 text-center text-lg-left mb-2 ">
                           <button
                              type="button"
                              className="btn btn-link btn-history"
                              onClick={this.handleShowModalHistory}
                           >
                              <h6>History</h6>
                           </button>
                        </div>
                        {/* <div className="col-lg-auto ml-lg-auto text-center order-last mr-lg-5 mb-2">
                           {this.state.profile.id === this.state.user.id ? (
                              <button type="button" className="btn btn-warning text-white">Edit</button>
                           ) : ("")}
                        </div> */}
                     </div>
                  </div>

               </div>
               {/* End of Body */}

            </div>
            <ModalHistory
               showModalHistory={this.state.showModalHistory}
               handleCloseModalHistory={this.handleCloseModalHistory}
            />
         </>
      );
   }
}

export default DetailUser;