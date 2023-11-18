import cls from "classnames";
import styles from "./startMenu.module.scss";
import {
  openFileExplorer,
  startMenuOpen,
  toggleStartMenu,
} from "../../signals";

const StartMenu = () => {
  return (
    <>
      <div
        onClick={toggleStartMenu}
        className={cls(styles.resetBackground, {
          [styles.show]: startMenuOpen.value,
        })}
      ></div>
      <div
        className={cls(styles.startMenu, {
          [styles.show]: startMenuOpen.value,
        })}
      >
        <img src="/images/startmenu.webp" alt="start-menu" />
        <img
          onClick={openFileExplorer}
          className={cls(styles.fileExplorerIcon)}
          src="/images/file-icon-startmenu.png"
          alt="file-explorer-icon"
        />
      </div>
    </>
  );
};

export default StartMenu;
