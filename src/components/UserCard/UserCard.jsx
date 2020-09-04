import React, { useEffect } from "react";
import check_icon from "../../assets/img/check.png";
import star_icon from "../../assets/img/star.png";
import "./UserCard.css";
import { useSpring, animated } from "react-spring";

const UserCard = ({ user, ...rest }) => {
  const handleOnClick = () => {
    rest.history.push(`/users/${user.id}`);
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
        <div className="card-container nopadding" style={style}>
          <div className="user-image">
            <img src={user.image} alt="" />
          </div>
          <div className="card-text">
            <h5>
              {user.first_name} {user.last_name}
            </h5>
            <p>{user.field}</p>
            <div className="rating-project-container">
              <div className="project">
                <div className="project-image">
                  <img src={check_icon} alt="" />
                </div>
                <p>{user.project}% project</p>
              </div>
              <div className="rating">
                <div className="rating-image">
                  <img src={star_icon} alt="" />
                </div>
                <p>{user.rating}% success rate</p>
              </div>
            </div>
            <p>
              Skills:
              <br />
              {user.skill}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
