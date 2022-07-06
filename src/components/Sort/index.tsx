import React from "react";
import { setCategory, setSortBy } from "../../redux/slices/booksSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import styles from "./Sort.module.scss";

const Sort = () => {
  const { sortBy, category } = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.sort_wrapper}>
      <div>
        <span>Categories</span>
        <select
          defaultValue="all"
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          <option value="all">all</option>
          <option value="art">art</option>
          <option value="biography">biography</option>
          <option value="computers">computers</option>
          <option value="history">history</option>
          <option value="medical">medical</option>
          <option value="poetry">poetry</option>
        </select>
      </div>
      <div>
        <span>Sorting by</span>
        <select
          defaultValue="relevance"
          onChange={(e) => dispatch(setSortBy(e.target.value))}
        >
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
