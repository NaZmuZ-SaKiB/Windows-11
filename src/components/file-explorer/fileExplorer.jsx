import cls from "classnames";
import styles from "./fileExplorer.module.scss";

import FileExplorerTopBar from "./fileExplorerTopBar";
import FileExplorerShortcutsBar from "./fileExplorerShortcutsBar";
import FileExplorerNav from "./fileExplorerNav";
import FileExplorerSideBar from "./fileExplorerSideBar";
import FileExplorerFolders from "./fileExplorerFolders";
import FileExplorerDrives from "./fileExplorerDrives";
import { fileExplorerOpen, fileExplorerSize } from "../../signals";

const FileExplorer = () => {
  return (
    <div
      className={cls(styles.fileExplorer, {
        [styles.show]: fileExplorerOpen.value,
        [styles.fileExplorer__small]: fileExplorerSize.value === "small",
      })}
    >
      <FileExplorerTopBar />
      <FileExplorerShortcutsBar />
      <FileExplorerNav />
      <div className={styles.fileExplorer__main}>
        <FileExplorerSideBar />
        <div className={styles.fileExplorer__main__body}>
          <FileExplorerFolders />
          <FileExplorerDrives />
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
