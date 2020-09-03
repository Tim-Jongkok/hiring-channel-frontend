import React from "react";
import UserCard from "../UserCard/UserCard";
import "./UserCardContainer.css";
import user_image from "../../assets/img/user.jpg";
import InfiniteScroll from "react-infinite-scroll-component";
import useWindowDimensions from "../../hooks/viewportHooks";
import Loading from "../Loading/Loading";

const users = [
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
  {
    id: 1,
    name: "Taufiq Widi",
    image: user_image,
    field: "Fullstack Developer",
    skill: "C/C++, Javascript, ReactJS",
    rating: 99,
    project: 99,
  },
];

//function to separate array
const separateIt = (arr, size) => {
  var newArr = [];
  for (var i = 0; i < arr.length; i += size) {
    var sliceIt = arr.slice(i, i + size);
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

const UserCardContainer = (props) => {
  const { height, width } = useWindowDimensions();
  let column = calculateColumn(width);
  const seperatedUsers = separateIt(users, users.length / column);

  const renderUserCard = (users) => {
    return (
      <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </div>
    );
  };

  return (
    <>
      <InfiniteScroll
        dataLength={users.length}
        next={() => {
          console.log("fetching");
        }}
        hasMore={false}
        loader={<Loading/>}
        endMessage={
          // <p style={{ textAlign: "center" }}>
          //   <b>Yay! You have seen it all</b>
          // </p>
          <Loading/>
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
