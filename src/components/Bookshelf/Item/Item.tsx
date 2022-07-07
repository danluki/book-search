import React from "react";
import booksSlice, { Book } from "../../../redux/slices/booksSlice";
import styles from "./Item.module.scss";

interface ItemProps {
  book: Book;
}

const Item: React.FC<ItemProps> = ({ book }) => {
  return (
    <div className={styles.bookshelf__item} key={book.id}>
      <img src={book.volumeInfo?.imageLinks?.smallThumbnail} alt="error" />
      {book.volumeInfo?.categories?.map((category) => (
        <p
          style={{ color: "gray", marginLeft: "10px", marginBottom: "10px" }}
          key={book.id}
        >
          <u>{category}</u>
        </p>
      ))}
      <p style={{ marginLeft: "10px", marginBottom: "10px" }}>
        <b>{book.volumeInfo.title}</b>
      </p>
      {book.volumeInfo?.authors?.map((author) => (
        <p
          style={{ marginLeft: "10px", float: "inline-end" }}
          key={Math.random()}
        >
          {author}
        </p>
      ))}
    </div>
  );
};

export default Item;
