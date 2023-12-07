import cls from "classnames";
import styles from "./fileExplorer.module.scss";
import { sidebarData } from "./fileExplorerData";

const FileExplorerSideBar = () => {
  return (
    <div className={cls(styles.fileExplorer__sideBar)}>
      {sidebarData.map((app) => (
        <div key={app.name} className={cls(styles.fileExplorer__sideBar__app)}>
          <div className={styles.icon}>
            <app.icon />
          </div>
          <img src={`/images/icons/${app.image}`} alt={app.name} />
          <span>{app.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FileExplorerSideBar;
