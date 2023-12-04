import cls from "classnames";
import styles from "./searchMenu.module.scss";
import { recentApps } from "./searchMenuData";

const SearchMenuRecentApps = () => {
  return (
    <div className={cls(styles.searchMenu__recentApps__container)}>
      <p>Recent</p>
      <div className={cls(styles.searchMenu__recentApps)}>
        {recentApps.map((app) => (
          <div
            key={app.name}
            className={cls(styles.searchMenu__recentApps__app)}
          >
            <img src={`/images/icons/${app.icon}`} alt={app.name} />
            <span>{app.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMenuRecentApps;
