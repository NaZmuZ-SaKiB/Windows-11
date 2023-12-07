import cls from "classnames";
import styles from "./fileExplorer.module.scss";
import FileExplorerGroupName from "./fileExplorerGroupName";
import { drivesData } from "./fileExplorerData";

const FileExplorerDrives = () => {
  return (
    <div className={cls(styles.fileExplorer__drives__container)}>
      <FileExplorerGroupName text={"Drives and devices (4)"} />

      <div className={cls(styles.fileExplorer__drives)}>
        {drivesData.map((drive) => (
          <div
            key={drive.name}
            className={cls(styles.fileExplorer__drives__drive)}
          >
            <img src={`/images/icons/${drive.icon}`} alt={drive.name} />
            <div className={cls(styles.fileExplorer__drives__drive__info)}>
              <span>{drive.name}</span>
              <div className={cls(styles.progress)}></div>
              <span>{drive.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileExplorerDrives;
