import React, { useEffect } from "react";
import check_icon from "../../assets/img/check.png";
import star_icon from "../../assets/img/star.png";
import "./UserCard.css";
import { useHistory } from "react-router-dom";

const UserCard = ({ user }) => {
  let history = useHistory();
  const handleOnClick = () => {
    history.push(`/users/${user.id}`);
  };
  const style = {
    height: 0,
    width: 0,
  };
  style.height = (Math.round(Math.random() * 300) + 100).toString() + "px";
  style.width = (Math.round(Math.random() * 100) + 100).toString() + "px";
  return (
    <>
      <div className="row no-gutters justify-content-center">
        <div
          className="card-container nopadding"
          style={style}
          onClick={handleOnClick}
        >
          <div className="user-image">
            <img src={user.image} alt="" />
          </div>
          <div className="card-text">
            <h5>
              {user.first_name} {user.last_name}
            </h5>
            <p>{user.field}</p>
            {user.type_name === "engineer" ? (
              <>
                <div className="rating-project-container">
                  <div className="project">
                    <div className="project-image">
                      <img src={check_icon} alt="" />
                    </div>
                  </div>
                  <p>{user.project} project</p>
                  <div className="rating">
                    <div className="rating-image">
                      <img src={star_icon} alt="" />
                    </div>
                  </div>
                  <p>{user.rating}% success rate</p>
                </div>
              </>
            ) : (
              <>
                {" "}
                <div className="rating-project-container">
                  <div className="rating">
                    <div className="rating-image">
                      <img src={star_icon} alt="" />
                    </div>
                  </div>
                  <p>{user.rating}/100</p>
                </div>{" "}
              </>
            )}
            <p>{user.type_name === "engineer" ? "Skill" : "Location"}</p>
            <p>{user.type_name === "engineer" ? user.skill : user.location}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
