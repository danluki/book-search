import React from "react";
import styles from "./Search.module.scss";
import { setQuery } from "../../redux/slices/booksSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import debounce from "lodash.debounce";

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const { query } = useAppSelector((state) => state.books);
  const [value, setValue] = React.useState("");

  const updateSearchValue = React.useCallback(
    debounce((value: string) => {
      dispatch(setQuery(value));
    }, 1000),
    []
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };
  return (
    <div className={styles.search_wrapper}>
      <input
        placeholder="Введите книгу..."
        onChange={(e) => onChangeInput(e)}
        className={styles.search_wrapper__input}
        value={value}
      />
      <svg viewBox="0 0 32 32">
        <title />
        <g data-name="Layer 3" id="Layer_3">
          <path
            className="cls-1"
            d="M11,22A10,10,0,1,1,21,12,10,10,0,0,1,11,22ZM11,4a8,8,0,1,0,8,8A8,8,0,0,0,11,4Z"
          />
          <path
            className="cls-1"
            d="M28,29.74a3,3,0,0,1-1.93-.7L19.94,23.9a3,3,0,0,1,3.86-4.6l6.13,5.14A3,3,0,0,1,28,29.74ZM21.87,20.6h-.09a1,1,0,0,0-.55,1.77l6.13,5.14a1,1,0,0,0,1.41-.12,1,1,0,0,0,.23-.73,1,1,0,0,0-.36-.68l-6.13-5.15A1,1,0,0,0,21.87,20.6Z"
          />
          <path
            className="cls-1"
            d="M20,21a1,1,0,0,1-.64-.23L17,18.82a1,1,0,0,1,1.28-1.54l2.34,1.95a1,1,0,0,1,.13,1.41A1,1,0,0,1,20,21Z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Search;
