import cls from "classnames";
import styles from "./searchMenu.module.scss";
import {
  openFileExplorer,
  searchMenuOpen,
  toggleSearchMenu,
} from "../../signals";

const SearchMenu = () => {
  return (
    <>
      <div
        onClick={toggleSearchMenu}
        className={cls(styles.resetBackground, {
          [styles.show]: searchMenuOpen.value,
        })}
      ></div>
      <div
        className={cls(styles.searchMenu, {
          [styles.show]: searchMenuOpen.value,
        })}
      >
        <input type="text" />
        <img src="/images/searchMenu.webp" alt="search-menu" />
        <img
          onClick={openFileExplorer}
          className={cls(styles.fileExplorerIcon)}
          src="/images/file-icon.webp"
          alt="file-explorer-icon-big"
        />
      </div>
    </>
  );
};

export default SearchMenu;
