import cls from "classnames";

import styles from "./startMenu.module.scss";
import { startMenuAppsList } from "./startMenuData";
import { openFileExplorer } from "../../signals";

const handleFileExplorer = (icon) => {
  if (icon === "file-explorer.webp") openFileExplorer();
};

const StartMenuApps = () => {
  return (
    <div className={cls(styles.startMenu__appList)}>
      {startMenuAppsList.map((app) => (
        <div
          key={app.name}
          onClick={() => handleFileExplorer(app.icon)}
          className={cls(styles.startMenu__appList__app)}
        >
          <img src={`/images/icons/${app.icon}`} alt={`${app.name}`} />
          <p>{app.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StartMenuApps;
