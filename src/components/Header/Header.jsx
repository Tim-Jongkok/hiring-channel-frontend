import React, { useState, useCallback, useRef, useEffect } from "react";
import logo from "../../assets/img/logo.png";
import search_icon from "../../assets/img/search.png";
import chat_icon from "../../assets/img/chat.png";
import bell_icon from "../../assets/img/bell.png";
import menu_icon from "../../assets/img/menu.webp";
import user_icon from "../../assets/img/user.jpg";
import MenuExpanded from "../MenuExpanded/MenuExpanded";
import "./Header.css";
import { useDispatch } from "react-redux";
import { searchUser } from "../../redux/actions/user";
import useWindowDimensions from "../../hooks/viewportHooks";
import { calculateColumn } from "../../utils/helpers";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const [menuDisplayed, setDisplayMenu] = useState(false);
  const [sort, setSort] = useState("first_name");
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  let column = calculateColumn(width);
  const limit = Math.round(height / 106) + column;
  let history = useHistory();
  const onClickHandler = useCallback(() => {
    setDisplayMenu(!menuDisplayed);
  }, [menuDisplayed]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const path = `?type_name=engineer&search=${e.target.value}&sort_by=${sort}&order=ASC&page=1&limit=${limit}`;
      history.push(path);
      dispatch(searchUser(path, "SEARCH_USERS"));
    }
  };

  return (
    <>
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
            defaultValue="name"
            name="filter"
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value="none" disabled hidden>
              Sort
            </option>
            <option value="first_name">Name</option>
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
          <div class="name">
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
