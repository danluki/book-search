import React from "react";
import { useSelector } from "react-redux";
import booksSlice, {
  fetchBooksByParams,
  getBooksCount,
  setSelectedPage,
  Status,
} from "../../redux/slices/booksSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Paginate from "../Paginate";
import styles from "./Bookshelf.module.scss";
import Item from "./Item/Item";
import Skeleton from "./Item/Skeleton";

const Bookshelf: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    books,
    isBooksLoading,
    query,
    category,
    sortBy,
    selectedPage,
    totalItems,
  } = useAppSelector((state) => state.books);
  let totalLength = 0;
  const isMounted = React.useRef(false);
  const selectPage = (page: number) => {
    dispatch(setSelectedPage(page));
  };
  React.useEffect(() => {
    dispatch(
      fetchBooksByParams({
        query: query,
        startIndex: selectedPage,
        maxResults: 40,
        orderBy: sortBy,
        category: category,
      })
    );
  }, [query, category, sortBy, selectedPage]);

  const skeletons = [...new Array(20)].map((_, index) => (
    <Skeleton key={index} />
  ));
  
  if (!books) return <></>;

  return (
    <>
      <div className={styles.bookshelf__wrapper}>
        {
          isBooksLoading === Status.ERROR && (
            <h2>Ошибка при загрзуке книг!</h2>
          )
        }
        {isBooksLoading === Status.LOADING
          ? skeletons
          : books.map((book) => <Item book={book} key={book.id} />)}
      </div>
      {books.length > 0 && (
        <Paginate
          step={books.length}
          totalItems={1000}
          selectedPage={selectedPage}
          setSelectedPage={selectPage}
        />
      )}
    </>
  );
};

export default Bookshelf;
