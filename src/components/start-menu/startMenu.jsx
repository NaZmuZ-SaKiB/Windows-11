import cls from "classnames";
import styles from "./startMenu.module.scss";
import { AiOutlineUser, AiOutlinePoweroff } from "react-icons/ai";

import { startMenuOpen, toggleStartMenu } from "../../signals";
import StartMenuApps from "./startMenuApps";
import StartMenuBar from "./startMenuBar";
import StartMenuDocs from "./startMenuDocs";

const StartMenu = () => {
  return (
    <>
      <div
        onClick={toggleStartMenu}
        className={cls(styles.resetBackground, {
          [styles.show]: startMenuOpen.value,
        })}
      ></div>
      {/* Main */}
      <div
        className={cls(styles.startMenu, {
          [styles.show]: startMenuOpen.value,
        })}
      >
        <StartMenuBar barTitle="Pinned" buttonTitle="All apps" />
        <StartMenuApps />
        <StartMenuBar barTitle="Recommended" buttonTitle="More" />
        <StartMenuDocs />
        <div className={cls(styles.startMenu__bottom)}>
          <div className={cls(styles.startMenu__bottom__user)}>
            <AiOutlineUser className={cls(styles.icon)} />
            <span>SaKiB</span>
          </div>
          <div className={cls(styles.startMenu__bottom__powerButton)}>
            <AiOutlinePoweroff className={cls(styles.icon)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StartMenu;
