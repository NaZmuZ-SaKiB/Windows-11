import cls from "classnames";
import styles from "./fileExplorer.module.scss";

import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineArrowDown,
} from "react-icons/hi";
import {
  RiArrowDropDownLine,
  RiArrowDropRightLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { BsArrowClockwise } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";

const FileExplorerNav = () => {
  return (
    <div className={cls(styles.fileExplorer__navBar)}>
      <div className={cls(styles.fileExplorer__navBar__actions)}>
        <div className={cls(styles.icon)}>
          <HiOutlineArrowLeft />
        </div>
        <div className={cls(styles.icon)}>
          <HiOutlineArrowRight />
        </div>
        <div className={cls(styles.icon)}>
          <RiArrowDropDownLine />
        </div>
        <div className={cls(styles.icon)}>
          <HiOutlineArrowDown />
        </div>
      </div>

      <div className={cls(styles.fileExplorer__navBar__addressBar)}>
        <div className={cls(styles.fileExplorer__navBar__addressBar__left)}>
          <img src="/images/icons/this-pc.webp" alt="this pc" />
          <RiArrowDropRightLine />
          <span>This PC</span>
          <RiArrowDropRightLine />
        </div>
        <div className={cls(styles.fileExplorer__navBar__addressBar__right)}>
          <div className={cls(styles.icon)}>
            <RiArrowDownSLine />
          </div>
          <div className={cls(styles.icon)}>
            <BsArrowClockwise />
          </div>
        </div>
      </div>

      <div className={cls(styles.fileExplorer__navBar__searchBar)}>
        <div className={styles.icon}>
          <VscSearch />
        </div>
        <input type="text" placeholder="Search This PC" />
      </div>
    </div>
  );
};

export default FileExplorerNav;
