import React from "react";
import { useSelector } from "react-redux";
import booksSlice, { fetchBooksByParams } from "../../redux/slices/booksSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Paginate from "../Paginate";
import styles from "./Bookshelf.module.scss";
import Item from "./Item/Item";

const Bookshelf: React.FC = () => {
  const dispatch = useAppDispatch();
  const { books, isBooksLoading, query, category, sortBy } = useAppSelector(
    (state) => state.books
  );
  React.useEffect(() => {
    //if(!isMounted.current){
    dispatch(
      fetchBooksByParams({
        query: query,
        startIndex: 0,
        maxResults: 40,
        orderBy: sortBy,
        category: category,
      })
    );
    //}
  }, [query, category, sortBy]);
  return (
    <>
      <div className={styles.bookshelf__wrapper}>
        {books.map((book) => (
          <Item book={book} />
        ))}
      </div>
      {books.length > 0 && <Paginate step={10} totalItems={books.length} />}
    </>
  );
};

export default Bookshelf;
