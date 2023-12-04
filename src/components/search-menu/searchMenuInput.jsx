import cls from "classnames";
import { VscSearch } from "react-icons/vsc";

import styles from "./searchMenu.module.scss";

const SearchMenuInput = () => {
  return (
    <div className={styles.searchMenu__searchBox__container}>
      <div className={cls(styles.searchMenu__searchBox)}>
        <VscSearch className={cls(styles.icon)} />
        <input type="text" placeholder="Type here to search" />
      </div>
    </div>
  );
};

export default SearchMenuInput;
