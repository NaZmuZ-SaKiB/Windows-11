import cls from "classnames";
import styles from "./fileExplorer.module.scss";
import { fileExplorerOpen, fileExplorerSize } from "../../signals";
import FileExplorerIcons from "./fileExplorerIcons";

const FileExplorer = () => {
  return (
    <>
      {/* <div
        className={cls(styles.fileExplorerMini, {
          [styles.show]:
            fileExplorerOpen.value && fileExplorerSize.value === "small",
        })}
      >
        <img src="images/file-explorer.webp" alt="file-explorer" />
        <FileExplorerIcons />
      </div> */}
      {/* <div
        className={cls(styles.fileExplorerMax, {
          [styles.show]:
            fileExplorerOpen.value && fileExplorerSize.value === "large",
        })}
      >
        <img src="images/file-explorer-max.webp" alt="file-explorer-max" />
        <FileExplorerIcons />
      </div> */}
      <div
        className={cls(styles.fileExplorer, {
          [styles.show]: fileExplorerOpen.value,
          [styles.fileExplorer__small]: fileExplorerSize.value === "small",
        })}
      >
        <img
          src={
            fileExplorerSize.value === "small"
              ? "images/file-explorer.webp"
              : "images/file-explorer-max.webp"
          }
          alt="file-explorer"
        />
        <FileExplorerIcons />
      </div>
    </>
  );
};

export default FileExplorer;
