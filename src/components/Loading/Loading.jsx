import React from "react";
import loading_gif from "../../assets/img/loading.gif";
import "./Loading.css";

const Loading = (props) => {
  return (
    <div className="loading">
      <img src={loading_gif} alt="" />
    </div>
  );
};

export default Loading;
