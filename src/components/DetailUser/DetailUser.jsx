import React, { useState, useEffect } from 'react';
// components
import ModalHistory from '../ModalHistory/ModalHistory';
import ModalEdit from '../ModalEdit/ModalEdit';
// img & css
import './DetailUser.css';
import profilImg from '../../assets/img/gambar.png';
import starIcon from '../../assets/img/star.png';
import checkIcon from '../../assets/img/check.png';
import arrowIcon from '../../assets/img/Arrow.png';
import chatIcon from '../../assets/img/chat.png'
import { Link } from 'react-router-dom';
import { getUserDetail } from "../../redux/actions/user";
import { useSelector, useDispatch } from "react-redux";

const DetailUser = (props) => {
   const { allUsers, hasMoreData, userDetail, apiRequest, msg } = useSelector(
      (state) => state.userState
   );
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getUserDetail(props.location.pathname));
   }, [])

   const [showModalHistory, setShowModalHistory] = useState(false);
   const [showModalEdit, setShowModalEdit] = useState(false);
   const [user, setUser] = useState({ id: 1 })

   const handleShowModalHistory = () => setShowModalHistory(true);

   const handleCloseModalHistory = () => setShowModalHistory(false);

   const handleShowModalEdit = () => setShowModalEdit(true);

   const handleCloseModalEdit = () => setShowModalEdit(false);

   console.log(userDetail);
   return (
      <>
         <div className="main-content mb-5">
            {/* Purple jumbotron */}
            <div className="row no-gutters">
               <div className="col">
                  <div className="top-jumbotron">
                     <Link to="/">
                        <img src={arrowIcon} alt="" />
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
                              <img src={userDetail.image} alt={`gambar ${userDetail.first_name}${userDetail.last_name}`} />
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
                  <div className="row no-gutters mb-5 mb-lg-0 mt-3">
                     <div className="col-lg-2 ml-lg-5 order-lg-first order-2 text-center mb-2">
                        {userDetail.id !== user.id ? (
                           <button type="button" className="btn btn-hire"><h6>Hire Me</h6></button>
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