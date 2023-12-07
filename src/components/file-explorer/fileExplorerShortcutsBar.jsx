import cls from "classnames";
import styles from "./fileExplorer.module.scss";

import { CiCirclePlus } from "react-icons/ci";
import { IoIosCut } from "react-icons/io";
import { FaRegCopy, FaRegPaste } from "react-icons/fa6";
import { FaRegShareSquare } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

const FileExplorerShortcutsBar = () => {
  return (
    <div className={cls(styles.fileExplorer__shortcutsBar)}>
      <div className={cls(styles.fileExplorer__shortcutsBar__newFolder)}>
        <CiCirclePlus className={styles.icon} />
        <span>New</span>
      </div>
      <div className={cls(styles.fileExplorer__shortcutsBar__textShortcuts)}>
        <IoIosCut className={styles.icon} />
        <FaRegCopy className={styles.icon} />
        <FaRegPaste className={styles.icon} />
        <FaRegShareSquare className={styles.icon} />
        <RiDeleteBinLine className={styles.icon} />
      </div>
      <BsThreeDots className={styles.fileExplorer__shortcutsBar__threeDots} />
    </div>
  );
};

export default FileExplorerShortcutsBar;
