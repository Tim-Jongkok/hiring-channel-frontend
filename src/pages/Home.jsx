import React from "react";
import Header from "../components/Header/Header";
import UserCardContainer from "../components/UserCardContainer/UserCardContainer";
import "./Home.css";

const Home = () =>{
    return (
        <>
        <Header />
        <div className="main-container">
        <UserCardContainer/>
        </div>
        
        </>
    )
}

export default Home;