import cls from "classnames";

import styles from "./searchMenu.module.scss";
import SearchMenuInput from "./searchMenuInput";
import SearchMenuNav from "./searchMenuNav";
import SearchMenuTopApps from "./searchMenuTopApps";
import SearchMenuRecentApps from "./searchMenuRecentApps";
import SearchMenuQuickSearches from "./searchMenuQuickSearches";

import {
  // openFileExplorer,
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

      {/* Main */}
      <div
        className={cls(styles.searchMenu, {
          [styles.show]: searchMenuOpen.value,
        })}
      >
        <SearchMenuInput />
        <SearchMenuNav />
        <SearchMenuTopApps />
        <div className={cls(styles.searchMenu__bottom)}>
          <SearchMenuRecentApps />
          <SearchMenuQuickSearches />
        </div>
      </div>
    </>
  );
};

export default SearchMenu;
