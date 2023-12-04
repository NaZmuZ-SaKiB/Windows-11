import cls from "classnames";
import styles from "./searchMenu.module.scss";
import { quickSearches } from "./searchMenuData";

const SearchMenuQuickSearches = () => {
  return (
    <div className={cls(styles.searchMenu__quickSearches__container)}>
      <p>Quick searches</p>
      <div className={cls(styles.searchMenu__quickSearches)}>
        {quickSearches.map((app) => (
          <div
            key={app.name}
            className={cls(styles.searchMenu__quickSearches__app)}
          >
            <app.icon className={cls(styles.icon)} />
            <span>{app.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMenuQuickSearches;
