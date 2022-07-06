import React from "react";
import Search from "../Search";
import Sort from "../Sort";
import styles from "./Header.module.scss";

const Header : React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Search for books</h1>
      <Search />
      <Sort />
    </div>
  );
};

export default Header;
