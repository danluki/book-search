import { LargeNumberLike } from "crypto";
import React from "react";
import styles from "./Paginate.module.scss";

interface PaginateProps {
  step: number;
  totalItems: number;
  selectedPage: number;
  setSelectedPage: (page: number) => void;
}

const Paginate: React.FC<PaginateProps> = ({
  step,
  totalItems,
  selectedPage,
  setSelectedPage,
}) => {
  const pages = Math.ceil(totalItems / step);

  const onPageClick = (pageNum: number) => {
    setSelectedPage(pageNum);
  };

  const onRightArrowClick = () => {
    if (selectedPage === pages) return;

    setSelectedPage(selectedPage + 1);
  };

  const onLeftArrowClick = () => {
    if (selectedPage === 1) return;

    setSelectedPage(selectedPage - 1);
  };

  const generateArrOfPages = (pages: number, selectedPage: number) => {
    let arr = [];
    if (selectedPage >= 7) {
      arr = [];
      arr.push(selectedPage - 1);
      if (pages - selectedPage > 5) {
        for (let i = selectedPage; i <= selectedPage + 5; i++) {
          arr.push(i);
        }
      } else {
        arr = [];
        for (let i = 8 - (pages - selectedPage) - 1; i >= 1; i--) {
          arr.push(selectedPage - i);
        }
        for (let i = selectedPage; i <= pages; i++) {
          arr.push(i);
        }
      }
    } else {
      for (let i = 1; i <= 8; i++) {
        arr.push(i);
      }
    }
    return arr as number[];
  };

  const pagesNums = generateArrOfPages(pages, selectedPage);

  return (
    <div className={styles.paginate_wrapper}>
      <svg
        onClick={onLeftArrowClick}
        className={styles.paginate_wrapper__icon}
        height="512px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        width="512px"
      >
        <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " />
      </svg>
      {selectedPage >= 7 ? (
        <svg
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "30px", height: "30px" }}
        >
          <rect fill="none" height="256" width="256" />
          <circle cx="128" cy="200" r="12" />
          <circle cx="192" cy="200" r="12" />
          <circle cx="64" cy="200" r="12" />
        </svg>
      ) : (
        <></>
      )}
      {pagesNums.map((pageNum) => (
        <div
          onClick={() => setSelectedPage(pageNum)}
          className={
            pageNum === selectedPage
              ? styles.paginate_wrapper__page_selected
              : styles.paginate_wrapper__page
          }
          key={pageNum}
        >
          {pageNum}
        </div>
      ))}
      {pages >= 7 && pages - selectedPage > 5 ? (
        <svg
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "30px", height: "30px" }}
        >
          <rect fill="none" height="256" width="256" />
          <circle cx="128" cy="200" r="12" />
          <circle cx="192" cy="200" r="12" />
          <circle cx="64" cy="200" r="12" />
        </svg>
      ) : (
        <></>
      )}
      <svg
        onClick={onRightArrowClick}
        className={styles.paginate_wrapper__icon}
        height="512px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        width="512px"
      >
        <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
      </svg>
    </div>
  );
};

export default Paginate;
