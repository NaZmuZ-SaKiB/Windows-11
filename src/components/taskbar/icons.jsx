import cls from "classnames";
import styles from "./taskbar.module.scss";
import {
  fileExplorerIconHandle,
  fileExplorerMinimized,
  fileExplorerOpen,
  toggleSearchMenu,
  toggleStartMenu,
} from "../../signals";

const Icons = () => {
  return (
    <ul className={cls(styles.icons)}>
      <li onClick={toggleStartMenu} className={cls(styles.icons__icon)}>
        <img src="/images/start-icon.png" />
      </li>
      <li onClick={toggleSearchMenu} className={cls(styles.icons__icon)}>
        <img src="/images/search-icon.png" />
      </li>
      <li className={cls(styles.icons__icon)}>
        <img src="/images/task-view-icon.png" />
      </li>
      <li className={cls(styles.icons__icon)}>
        <img src="/images/widgets-icon.png" />
      </li>
      <li
        onClick={fileExplorerIconHandle}
        className={cls(styles.icons__icon, {
          [styles.icons__icon__minimized]:
            fileExplorerMinimized.value | fileExplorerOpen.value,
        })}
      >
        <img src="/images/file-explorer-small.png" />
      </li>
      <li className={cls(styles.icons__icon)}>
        <img src="/images/edge-icon.png" />
      </li>
      <li className={cls(styles.icons__icon)}>
        <img src="/images/vscode-icon.png" />
      </li>
      <li className={cls(styles.icons__icon)}>
        <img src="/images/store-icon.png" />
      </li>
    </ul>
  );
};

export default Icons;
