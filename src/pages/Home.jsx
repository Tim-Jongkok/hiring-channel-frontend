import React from "react";
import Header from "../components/Header/Header";
import UserCardContainer from "../components/UserCardContainer/UserCardContainer";
import "./Home.css";

const Home = (props) => {
  return (
    <>
      <Header {...props}/>
      <div className="main-container">
        <UserCardContainer props={props}/>
      </div>
    </>
  );
};

export default Home;
