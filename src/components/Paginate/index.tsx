import React from "react";
import styles from "./Paginate.module.scss";

interface PaginateProps {
  step: number;
  totalItems: number;
}

const Paginate: React.FC<PaginateProps> = ({ step, totalItems }) => {
  const [selectedPage, setSelectedPage] = React.useState(1);
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

  const generateArrOfPages = (pages: number) => {
    let arr = [];

    for (let i = 1; i <= pages; i++) {
      arr.push(i);
    }
    return arr;
  };

  const pagesNums = generateArrOfPages(pages);

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
      {pagesNums.map((pageNum) => (
        <div
          onClick={() => setSelectedPage(pageNum)}
          className={
            pageNum === selectedPage
              ? styles.paginate_wrapper__page_selected
              : styles.paginate_wrapper__page
          }
        >
          {pageNum}
        </div>
      ))}
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
