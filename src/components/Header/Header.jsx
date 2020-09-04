import React, { useState, useCallback, useRef, useEffect } from "react";
import logo from "../../assets/img/logo.png";
import search_icon from "../../assets/img/search.png";
import chat_icon from "../../assets/img/chat.png";
import bell_icon from "../../assets/img/bell.png";
import menu_icon from "../../assets/img/menu.webp";
import user_icon from "../../assets/img/user.jpg";
import MenuExpanded from "../MenuExpanded/MenuExpanded";
import FilterModal from "../FilterModal/FilterModal";
import "./Header.css";

const Header = (props) => {
  const [menuDisplayed, setDisplayMenu] = useState(false);
  const filterModalRef = useRef();

  const onClickHandler = useCallback(() => {
    setDisplayMenu(!menuDisplayed);
  }, [menuDisplayed]);

  const getSort = (sort)=>{
    console.log(sort);
  }

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      props.history.push(`/?search=${e.target.value}`);
    }
  };

  return (
    <>
      <FilterModal ref={filterModalRef} onSort={getSort}/>
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search-group">
          <div className="search-icon">
            <img src={search_icon} alt="" />
          </div>
          <input
            type="text"
            name="search"
            placeholder="Search"
            onKeyPress={handleSearch}
          />
          <select
            name="filter"
          >
            <option value="none" selected disabled hidden> 
            Sort</option>  
            <option value="name">Name</option>
            <option value="rating">Rating</option>
            <option value="total_project">Project</option>
          </select>
        </div>
        <div className="menu-icon" onClick={onClickHandler}>
          <img src={menu_icon} alt="" />
        </div>
        <button className="home-button">Home</button>
        <div className="user-group">
          <div className="user-icon">
            <img src={user_icon} alt="" />
          </div>
          <div id="name">
            <p>Taufiq Widi Nugroho</p>
          </div>
        </div>
        <div className="icon-group">
          <div className="box"></div>
          <div className="chat">
            <img src={chat_icon} alt="" />
          </div>
          <div className="notification">
            <img src={bell_icon} alt="" />
          </div>
        </div>
      </header>
      <MenuExpanded displayed={menuDisplayed} />
    </>
  );
};

export default Header;
