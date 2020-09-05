import React from "react";
import Header from "../components/Header/Header";
import UserCardContainer from "../components/UserCardContainer/UserCardContainer";
import "./Home.css";

const Home = (props) => {
  return (
    <>
      <Header/>
      <div className="main-container">
        <UserCardContainer key={1}/>
      </div>
    </>
  );
};

export default Home;
