import React, { useEffect } from "react";
import chat_icon from "../../assets/img/chat.png";
import bell_icon from "../../assets/img/bell.png";
import "./MenuExpanded.css";
import { useSpring, animated } from "react-spring";
import user_icon from "../../assets/img/gambar.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { logout } from "../../redux/actions/auth";

const MenuExpanded = (props) => {
  const { firstName, lastName, corporateName, image, id } = useSelector(
    (state) => state.authState
  );
  const history = useHistory();
  const dispatch = useDispatch();
  /** start of animation section */
  const [springProps, set] = useSpring(() => ({
    transform: "translate(100%)",
  }));
  useEffect(() => {
    set({
      transform: props.displayed ? "translate(0%)" : "translate(100%)",
    });
  }, [props.displayed, set]);
  /** end of animation section */
  return (
    <>
      <animated.div className="menu-container-show" style={springProps}>
        <div className="user-group-menu">
          <div className="user-icon-menu">
            {/* <p>T</p> */}
            <img src={image ? image : user_icon} alt="" />
          </div>
          <h5
            onClick={() => {
              history.push(`/user/${id}`);
            }}
          >
            {firstName ? `${firstName} ${lastName}` : corporateName}
          </h5>
        </div>
        <div className="message-menu">
          <div className="message-icon">
            <img src={chat_icon} alt="" />
          </div>
          <h5>Message</h5>
        </div>
        <div className="notification-menu">
          <div className="notification-icon">
            <img src={bell_icon} alt="" />
          </div>
          <h5>Notification</h5>
        </div>
        <Button
          className="logout-btn"
          variant="danger"
          onClick={() => {
            dispatch(logout());
          }}
        >
          Log Out
        </Button>
      </animated.div>
    </>
  );
};

export default MenuExpanded;
