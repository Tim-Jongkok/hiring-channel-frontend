import React, { useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import "./UserCardContainer.css";
import InfiniteScroll from "react-infinite-scroll-component";
import useWindowDimensions from "../../hooks/viewportHooks";
import Loading from "../Loading/Loading";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUserData } from "../../redux/actions/user";
import {
  separateArray,
  calculateColumn,
  typeNameSearchQuery,
} from "../../utils/helpers";

//render userCard
const renderUserCard = (users) => {
  return (
    <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
      {users.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </div>
  );
};

const UserCardContainer = (props) => {
  const { allUsers, hasMoreData, pageInfo, apiRequest, msg } = useSelector(
    (state) => state.userState
  );
  const { type_id } = useSelector((state) => state.authState);
  let history = useHistory();
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch();

  const handleFetch = () => {
    dispatch(fetchAllUserData(pageInfo.nextPage, apiRequest.currReq));
  };

  let column = calculateColumn(width);
  const limit = Math.round(height / 106) + column;
  const seperatedUsers = separateArray(
    allUsers,
    allUsers.length / column < 1 ? 1 : allUsers.length / column
  );

  useEffect(() => {
    const firstPage =
      history.location.pathname +
      `?type_name=${typeNameSearchQuery(type_id)}&page=${
        pageInfo.currentPage
      }&limit=${limit}`;
    dispatch(fetchAllUserData(firstPage, apiRequest.currReq));
    history.push(firstPage);
  }, []);

  useEffect(() => {
    if (pageInfo.nextPage) history.push(pageInfo.nextPage);
  }, [pageInfo]);

  return (
    <>
      <InfiniteScroll
        scrollableTarget={document.getElementsByClassName("main-container")}
        dataLength={allUsers.length}
        next={handleFetch}
        hasMore={hasMoreData}
        loader={<Loading />}
        endMessage={
          <p
            style={{
              marginTop: "10px",
              textAlign: "center",
              fontSize: "1.75rem",
            }}
          >
            <b>{msg}</b>
          </p>
        }
      >
        <div className="row no-gutters">
          {seperatedUsers.map((seperatedUser) => {
            return renderUserCard(seperatedUser);
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default UserCardContainer;
