import React, { useState, useCallback, useRef, useEffect } from "react";
import logo from "../../assets/img/logo.png";
import search_icon from "../../assets/img/search.png";
import chat_icon from "../../assets/img/chat.png";
import bell_icon from "../../assets/img/bell.png";
import menu_icon from "../../assets/img/menu.webp";
import user_icon from "../../assets/img/gambar.png";
import MenuExpanded from "../MenuExpanded/MenuExpanded";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { searchUser, fetchAllUserData } from "../../redux/actions/user";
import useWindowDimensions from "../../hooks/viewportHooks";
import { calculateColumn, typeNameSearchQuery } from "../../utils/helpers";
import { useHistory, Redirect } from "react-router-dom";

const Header = (props) => {
  const [menuDisplayed, setDisplayMenu] = useState(false);
  const [sort, setSort] = useState("first_name");
  const dispatch = useDispatch();
  const { id,firstName, lastName, corporateName, image, type_id } = useSelector(
    (state) => state.authState
  );
  const { pageInfo, apiRequest } = useSelector((state) => state.userState);
  const { height, width } = useWindowDimensions();
  let column = calculateColumn(width);
  const limit = Math.round(height / 106) + column;
  let history = useHistory();

  const onClickHandler = useCallback(() => {
    setDisplayMenu(!menuDisplayed);
  }, [menuDisplayed]);

  const homeOnClick = () => {
    const firstPage =
      history.location.pathname +
      `?type_name=${typeNameSearchQuery(type_id)}&page=1&limit=${limit}`;
    dispatch(fetchAllUserData(firstPage, apiRequest.currReq));
    history.push(firstPage);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const path = `?type_name=${typeNameSearchQuery(type_id)}&search=${
        e.target.value
      }&sort_by=${sort}&order=ASC&page=1&limit=${limit}`;
      history.push(path);
      dispatch(searchUser(path, "SEARCH_USERS"));
    }
  };

  return (
    <>
      <header>
        <div className="logo" onClick={homeOnClick}>
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
        <button className="home-button" onClick={homeOnClick}>
          Home
        </button>
        <div className="user-group">
          <div className="user-icon">
            <img src={image ? image : user_icon} alt="" />
          </div>
          <div className="name">
            <button
              onClick={() => {
                history.push(`/user/${id}`);
              }}
            >
              {firstName ? `${firstName} ${lastName}` : corporateName}
            </button>
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
