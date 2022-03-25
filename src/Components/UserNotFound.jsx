import React from "react";
import styles from "./userCard.module.css";
import GitImg from '../Images/gitImg.png';

const UserNotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={GitImg} alt="" />
      <h1>USER NOT FOUND</h1>
    </div>
  );
};

export default UserNotFound;