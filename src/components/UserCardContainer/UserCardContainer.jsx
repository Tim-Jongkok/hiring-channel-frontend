import React from "react";
import UserCard from "../UserCard/UserCard";
import "./UserCardContainer.css";
import user_image from "../../assets/img/user.jpg";

const user = [
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

const UserCardContainer = () => {
  const arrs = separateIt(user, 3);
  const renderUserCard = (users) => {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        {users.map((user) => {
          return <UserCard user={user} />;
        })}
      </div>
    );
  };
  return (
    <div className="row no-gutters">
      {arrs.map((arr) => {
        return renderUserCard(arr);
      })}
    </div>
  );
};

export default UserCardContainer;
