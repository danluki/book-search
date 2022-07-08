import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import styles from "./FullBook.module.scss";
import axios from "../../axios";
import { Book, fetchBooksByParams } from "../../redux/slices/booksSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
const FullBook = () => {
  const { id } = useParams();
  const [book, setBook] = React.useState<Book>();

  

  React.useEffect(() => {
    axios
      .get<Book>(
        `books/v1/volumes/${id}?key=AIzaSyC9PnkUgkVtxsC8pAZmW01LL8tMhkOuF74`
      )
      .then((volume) => setBook(volume.data))
      .catch((e) => console.error(e));
  }, []);

  if (!book) return <></>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__left_container}>
        <img src={book.volumeInfo.imageLinks.thumbnail} />
      </div>

      <div className={styles.wrapper__right_container}>
        <h5>{book.volumeInfo.categories}</h5>
        <h2>{book.volumeInfo.title}</h2>
        <h6>
          <u>{book.volumeInfo.authors}</u>
        </h6>
        <div className={styles.wrapper__description_container}>
          <p>{book.volumeInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FullBook;
