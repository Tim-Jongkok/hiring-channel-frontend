import React, { useState, useEffect } from "react";
import { getUserDetail, updateUserData } from "../../redux/actions/user";
import {logout} from "../../redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { addHistory } from "../../redux/actions/user";
// components
import ModalHistory from "../ModalHistory/ModalHistory";
import ModalEdit from "../ModalEdit/ModalEdit";
// img & css
import "./DetailUser.css";
import profilImg from "../../assets/img/gambar.png";
import starIcon from "../../assets/img/star.png";
import checkIcon from "../../assets/img/check.png";
import arrowIcon from "../../assets/img/Arrow.png";
import chatIcon from "../../assets/img/chat.png";
import locationIcon from "../../assets/img/location.png";
import logoutIcon from "../../assets/img/logout.png";

const DetailUser = (props) => {
  const { userDetail } = useSelector((state) => state.userState);
  const { id, type_name } = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUserDetail(props.location.pathname));
  }, []);

  const [showModalHistory, setShowModalHistory] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  // handle
  const handleShowModalHistory = () => setShowModalHistory(true);

  const handleCloseModalHistory = () => setShowModalHistory(false);

  const handleShowModalEdit = () => setShowModalEdit(true);

  const handleCloseModalEdit = () => setShowModalEdit(false);

  const handleHire = () => {
    const data = {
      user_id: userDetail.id,
      corporate_id: id,
      rating: 80,
    };
    dispatch(addHistory(data));
    // console.log(data);
    // update user
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        // "x-access-token": "Bearer " + this.props.token,
      },
    };
    let formData = new FormData();
    formData.append("is_open", 0);
    dispatch(
      updateUserData(
        history.location.pathname,
        "UPDATE_USER_DATA",
        formData,
        config
      )
    );
  };

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
              {Number(userDetail.id) === id ? (
                <Link to="/" onClick={()=>dispatch(logout())}>
                  <img className="logout-icon" src={logoutIcon} alt="" />
                </Link>
              ) : (
                ""
              )}
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
                      <img src={userDetail.image} alt="" />
                    ) : (
                      <img src={profilImg} alt="" />
                    )}
                  </div>
                  <h5 className="text-center h5-field">
                    @
                    {userDetail.corporate_name
                      ? userDetail.corporate_name.toLowerCase()
                      : `${userDetail.first_name}${userDetail.last_name}`.toLowerCase()}{" "}
                    <img src={chatIcon} alt="chatIcon" className="small-icon" />
                  </h5>
                  <p className="text-center">
                    <img src={starIcon} alt="" className="small-icon" />{" "}
                    {userDetail.rating}% Success Rate
                  </p>
                  {userDetail.type_name === "Engineer" ? (
                    <p className="text-center">
                      <img src={checkIcon} alt="" className="small-icon" />{" "}
                      {userDetail.total_project} Project
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            {/* End of Profile photo */}

            {/* Description */}
            <div className="col-12 col-lg-9 px-lg-4 mt-lg-5 padding-margin-custom">
              <div className="row no-gutters mb-3 mt-lg-5">
                <div className="col text-center text-lg-left">
                  {userDetail.corporate_name ? (
                    <h2 className="h2-name font-weight-bold">{userDetail.corporate_name}</h2>
                  ) : (
                    <h2 className="h2-name font-weight-bold">
                      {userDetail.first_name}&nbsp;{userDetail.last_name}
                    </h2>
                  )}
                  <h5 className="h5-field">{userDetail.field}</h5>
                </div>
              </div>
              <div className="row no-gutters mt-lg-5">
                <div className="col px-5 px-lg-0">
                  <div className="text-justify">
                    <p className="p-desc">{userDetail.description}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Description */}
          </div>

          <div className="content-bottom">
            <div className="row no-gutters ml-lg-5 px-lg-4">
              {userDetail.type_name === "Engineer" ? (
                <div className="col offset-lg-2 text-center text-lg-left">
                  <h6 className="h5-field">
                    Skills : <br />
                    {userDetail.skill}
                  </h6>
                </div>
              ) : null}
            </div>
            <div className="row no-gutters ml-lg-5 px-lg-4">
              <div className="col offset-lg-2 text-center text-lg-left ">
                <p className="p-desc">
                  <img src={locationIcon} alt="" className="small-icon" />
                  &nbsp;&nbsp;{userDetail.location}
                </p>
              </div>
            </div>
            <div className="row no-gutters mb-5 mb-lg-0 mt-3">
              <div className="col-lg-2 ml-lg-5 order-lg-first order-2 text-center mb-2">
                {type_name === "Admin" ? (
                  <button type="button" className="btn btn-hire">
                    <h6>Delete</h6>
                  </button>
                ) : userDetail.id !== id ? (
                  Number(userDetail.is_open) === 1 ? (
                    userDetail.type_name === "Engineer" ? (
                      <button
                        type="button"
                        className="btn btn-hire"
                        onClick={handleHire}
                      >
                        <h6>Hire Me</h6>
                      </button>
                    ) : (
                      <button type="button" className="btn btn-hire">
                        <h6>Apply</h6>
                      </button>
                    )
                  ) : (
                    <button type="button" className="btn btn-disable" disabled>
                      <h6>Not Available</h6>
                    </button>
                  )
                ) : (
                  <button
                    type="button"
                    className="btn btn-hire"
                    onClick={handleShowModalEdit}
                  >
                    <h6>Edit</h6>
                  </button>
                )}
              </div>
              {userDetail.type_name === "Engineer" ? (
                <div className="col-lg-2 text-center text-lg-left mb-2 ">
                  <button
                    type="button"
                    className="btn btn-link btn-history"
                    onClick={handleShowModalHistory}
                  >
                    <h6>History</h6>
                  </button>
                </div>
              ) : null}
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
};

export default DetailUser;
