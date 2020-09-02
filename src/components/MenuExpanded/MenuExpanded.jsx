import React, { useEffect } from "react";
import chat_icon from "../../assets/img/chat.png";
import bell_icon from "../../assets/img/bell.png";
import "./MenuExpanded.css";
import { useSpring, animated } from "react-spring";

const MenuExpanded = (props) => {
  /** start of animation section */
  const [springProps, set, stop] = useSpring(() => ({
    transform: "translate(100%)",
  }));
  useEffect(() => {
    set({
      transform: props.displayed ? "translate(0%)" : "translate(100%)",
    });
  }, [props.displayed]);
  /** end of animation section */
  return (
    <>
      <animated.div className="menu-container-show" style={springProps}>
        <div className="user-group-menu">
          <div className="user-icon-menu">
            <p>T</p>
          </div>
          <h5>Taufiq</h5>
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
      </animated.div>
    </>
  );
};

export default MenuExpanded;
