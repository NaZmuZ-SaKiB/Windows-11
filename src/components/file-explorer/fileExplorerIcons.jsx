import cls from "classnames";
import styles from "./fileExplorer.module.scss";
import {
  closeFileExplorer,
  fileExplorerSize,
  MinimizeFileExplorer,
  toggleFileExplorerSize,
} from "../../signals";

const FileExplorerIcons = () => {
  return (
    <ul
      className={cls(styles.icons, {
        [styles.large]: fileExplorerSize === "large",
      })}
    >
      <li onClick={MinimizeFileExplorer} className={cls(styles.icons__icon)}>
        _
      </li>
      <li onClick={toggleFileExplorerSize} className={cls(styles.icons__icon)}>
        □
      </li>
      <li
        onClick={closeFileExplorer}
        className={cls(styles.icons__icon, styles.icons__icon__close)}
      >
        &times;
      </li>
    </ul>
  );
};

export default FileExplorerIcons;
