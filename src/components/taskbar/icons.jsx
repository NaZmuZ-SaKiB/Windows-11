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
        <img src="/images/icons/start.webp" />
      </li>
      <li onClick={toggleSearchMenu} className={cls(styles.icons__icon)}>
        <img src="/images/icons/search.webp" />
      </li>
      <li className={cls(styles.icons__icon)}>
        <img src="/images/icons/task-view.webp" />
      </li>
      <li className={cls(styles.icons__icon)}>
        <img src="/images/icons/widgets.webp" />
      </li>
      <li
        onClick={fileExplorerIconHandle}
        className={cls(styles.icons__icon, {
          [styles.icons__icon__minimized]:
            fileExplorerMinimized.value | fileExplorerOpen.value,
        })}
      >
        <img src="/images/icons/file-explorer-big.webp" />
      </li>
      <li className={cls(styles.icons__icon)}>
        <img src="/images/icons/edge-big.webp" />
      </li>
      <li className={cls(styles.icons__icon)}>
        <img src="/images/icons/vs-code.webp" />
      </li>
      <li className={cls(styles.icons__icon)}>
        <img src="/images/icons/store-big.webp" />
      </li>
    </ul>
  );
};

export default Icons;
