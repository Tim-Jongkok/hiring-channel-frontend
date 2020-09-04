import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import "./UserCardContainer.css";
import InfiniteScroll from "react-infinite-scroll-component";
import useWindowDimensions from "../../hooks/viewportHooks";
import Loading from "../Loading/Loading";
import { users } from "./DummyData";
import {Spinner} from "react-bootstrap";
import Axios from "axios";
import queryString from "query-string";

//function to separate array
const separateIt = (arr, size) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    let sliceIt = arr.slice(i, i + size);
    newArr.push(sliceIt);
  }
  return newArr;
};

//function to calculate column per viewport width
const calculateColumn = (width) => {
  let column;
  if (width <= 767) {
    column = 2;
  } else if (width <= 991) {
    column = 3;
  } else if (width <= 1199) {
    column = 4;
  } else {
    column = 6;
  }
  return column;
};

//render userCard
const renderUserCard = (users,props) => {
  return (
    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
      {users.map((user) => {
        return <UserCard key={user.id} user={user} {...props} />;
      })}
    </div>
  );
};

const UserCardContainer = (props) => {
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [userDummy, setUserDummy] = useState([]);
  const { height,width } = useWindowDimensions();
  let column = calculateColumn(width);
  const limit = Math.round(height/106)+column;
  let path = "";
  let params = queryString.parse(props.location.search);
  if (params.search === undefined) {
    path = `http://localhost:2300/users?page=${page}&limit=${limit}`;
  } else {
    path = `http://localhost:2300/users/search?search=${params.search}&page=${page}&limit=${limit}`;
  }
  const seperatedUsers = separateIt(userDummy, userDummy.length / column);

  const handleFetch = () => {
    Axios.get(path)
      .then((data) => {
        if (data.data.data.length === 0) {
          setHasMoreData(false);
        } else {
          setHasMoreData(true);
          let newArr = [];
          let _page = page;
          newArr = [...userDummy];
          newArr.push(...data.data.data);
          setUserDummy(newArr);
          _page++;
          setPage(_page);
          props.history.push(
            props.location.pathname + `?page=${page}&limit=${limit}`
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <>
      <InfiniteScroll
        scrollableTarget={document.getElementsByClassName("main-container")}
        dataLength={userDummy.length}
        next={handleFetch}
        hasMore={hasMoreData}
        loader={<Loading />}
        endMessage={
          <p style={{ textAlign: "center",fontSize:"1.75rem" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="row no-gutters">
          {seperatedUsers.map((seperatedUser) => {
            return renderUserCard(seperatedUser,props);
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default UserCardContainer;
