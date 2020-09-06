import React, { useState, useEffect } from 'react';
import { getUserDetail } from "../../redux/actions/user";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
// components
import ModalHistory from '../ModalHistory/ModalHistory';
import ModalEdit from '../ModalEdit/ModalEdit';
// img & css
import './DetailUser.css';
import profilImg from '../../assets/img/gambar.png';
import starIcon from '../../assets/img/star.png';
import checkIcon from '../../assets/img/check.png';
import arrowIcon from '../../assets/img/Arrow.png';
import chatIcon from '../../assets/img/chat.png';
import locationIcon from '../../assets/img/location.png';
import logoutIcon from '../../assets/img/logout.png';

const DetailUser = (props) => {
   const { userDetail } = useSelector(
      (state) => state.userState
   );
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getUserDetail(props.location.pathname));
   }, []);

   const [showModalHistory, setShowModalHistory] = useState(false);
   const [showModalEdit, setShowModalEdit] = useState(false);
   const [user] = useState({ id: 1 })

   const handleShowModalHistory = () => setShowModalHistory(true);

   const handleCloseModalHistory = () => setShowModalHistory(false);

   const handleShowModalEdit = () => setShowModalEdit(true);

   const handleCloseModalEdit = () => setShowModalEdit(false);

   return (
      <>
         <div className="main-content mb-5">
            {/* Purple jumbotron */}
            <div className="row no-gutters">
               <div className="col">
                  <div className="top-jumbotron">
                     <Link to="/">
                        <img className="arrow-icon" src={arrowIcon} alt="" />
                     </Link>
                     <Link to="/">
                        <img className="logout-icon" src={logoutIcon} alt="" />
                     </Link>
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
                              {userDetail.image ? (
                                 <img src={userDetail.image} alt={`gambar ${userDetail.first_name}${userDetail.last_name}`} />
                              ) : (
                                    <img src={profilImg} alt={`gambar ${userDetail.first_name}${userDetail.last_name}`} />
                                 )}
                           </div>
                           <h5>@{(`${userDetail.first_name}${userDetail.last_name}`).toLowerCase()} <img src={chatIcon} alt="chatIcon" className="small-icon" /></h5>
                           <p><img src={starIcon} alt="" className="small-icon" /> {userDetail.rating}% Success Rate</p>
                           <p><img src={checkIcon} alt="" className="small-icon" /> {userDetail.total_project} Project</p>
                        </div>
                     </div>
                  </div>
                  {/* End of Profile photo */}

                  {/* Description */}
                  <div className="col-12 col-lg-9 px-lg-4 mt-lg-5">
                     <div className="row no-gutters mb-3 mt-lg-5">
                        <div className="col text-center text-lg-left">
                           <h2>{userDetail.first_name}&nbsp;{userDetail.last_name}</h2>
                           <h5>{userDetail.field}</h5>
                        </div>
                     </div>
                     <div className="row no-gutters mt-lg-5">
                        <div className="col px-5 px-lg-0">
                           <div className="text-justify">
                              <p>{userDetail.description}</p>
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
                        <h6>{userDetail.skill}</h6>
                     </div>
                  </div>
                  <div className="row no-gutters ml-lg-5 px-lg-4">
                     <div className="col offset-lg-2 text-center text-lg-left ">
                        <p><img src={locationIcon} alt="" className="small-icon" />&nbsp;&nbsp;{userDetail.location}</p>
                     </div>
                  </div>
                  <div className="row no-gutters mb-5 mb-lg-0 mt-3">
                     <div className="col-lg-2 ml-lg-5 order-lg-first order-2 text-center mb-2">
                        {userDetail.id !== user.id ? (
                           Number(userDetail.is_open) === 1 ? (
                              userDetail.type_name === "Engineer" ? (
                                 <button type="button" className="btn btn-hire"><h6>Hire Me</h6></button>
                              ) : (
                                    <button type="button" className="btn btn-hire"><h6>Apply</h6></button>
                                 )
                           ) : (
                                 <button type="button" className="btn btn-disable" disabled><h6>Not Available</h6></button>
                              )
                        ) : (
                              <button
                                 type="button"
                                 className="btn btn-hire"
                                 onClick={handleShowModalEdit}
                              ><h6>Edit</h6></button>
                           )}
                     </div>
                     <div className="col-lg-2 text-center text-lg-left mb-2 ">
                        <button
                           type="button"
                           className="btn btn-link btn-history"
                           onClick={handleShowModalHistory}
                        >
                           <h6>History</h6>
                        </button>
                     </div>
                  </div>
               </div>

            </div>
            {/* End of Body */}

         </div>

         <ModalHistory
            showModalHistory={showModalHistory}
            handleCloseModalHistory={handleCloseModalHistory}
         />
         <ModalEdit
            showModalEdit={showModalEdit}
            handleCloseModalEdit={handleCloseModalEdit}
         />
      </>
   );
   // }
}

export default DetailUser;