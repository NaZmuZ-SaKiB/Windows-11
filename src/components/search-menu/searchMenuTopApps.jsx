import cls from "classnames";

import styles from "./searchMenu.module.scss";
import { topApps } from "./searchMenuData";
import { openFileExplorer } from "../../signals";

const handleOpenFileExplorer = (icon) => {
  if (icon === "file-explorer.webp") openFileExplorer();
};

const SearchMenuTopApps = () => {
  return (
    <div className={cls(styles.searchMenu__topApps__container)}>
      <p>Top apps</p>
      <div className={cls(styles.searchMenu__topApps)}>
        <div className={cls(styles.searchMenu__topApps__list)}>
          {topApps.map((app) => (
            <div
              key={app.name}
              onClick={() => handleOpenFileExplorer(app.icon)}
              className={cls(styles.searchMenu__topApps__app)}
            >
              <img src={`/images/icons/${app.icon}`} alt={app.name} />
              <span>{app.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchMenuTopApps;
