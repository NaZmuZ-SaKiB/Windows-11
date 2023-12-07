import cls from "classnames";
import styles from "./fileExplorer.module.scss";

import { FaRegWindowMinimize } from "react-icons/fa";
import { IoMdSquareOutline } from "react-icons/io";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

import {
  closeFileExplorer,
  fileExplorerSize,
  MinimizeFileExplorer,
  toggleFileExplorerSize,
} from "../../signals";

const FileExplorerTopBar = () => {
  return (
    <div className={cls(styles.fileExplorer__topBar)}>
      <div className={cls(styles.fileExplorer__topBar__title)}>
        <img src="/images/icons/file-explorer.webp" alt="file-explorer-icon" />
        <span>File Explorer</span>
      </div>
      <div className={cls(styles.fileExplorer__topBar__actions)}>
        <FaRegWindowMinimize
          onClick={MinimizeFileExplorer}
          className={cls(styles.icon)}
        />
        {fileExplorerSize.value === "small" ? (
          <IoMdSquareOutline
            onClick={toggleFileExplorerSize}
            className={cls(styles.icon)}
          />
        ) : (
          <HiOutlineSquare2Stack
            onClick={toggleFileExplorerSize}
            className={cls(styles.icon, styles.resize)}
          />
        )}

        <MdClose
          onClick={closeFileExplorer}
          className={cls(styles.icon, styles.close)}
        />
      </div>
    </div>
  );
};

export default FileExplorerTopBar;
