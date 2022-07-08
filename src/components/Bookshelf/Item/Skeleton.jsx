import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Item.module.scss";

const Skeleton = (props) => (
  <ContentLoader
    className={styles.bookshelf__item}
    speed={2}
    width={262}
    height={420}
    viewBox="0 0 150 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-3" y="17" rx="14" ry="14" width="150" height="320" />
  </ContentLoader>
);

export default Skeleton;
