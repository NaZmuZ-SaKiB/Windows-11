import cls from "classnames";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import styles from "./searchMenu.module.scss";

const SearchMenuNav = () => {
  return (
    <div className={cls(styles.searchMenu__nav)}>
      <ul className={cls(styles.searchMenu__nav__left)}>
        <li>All</li>
        <li>Apps</li>
        <li>Documents</li>
        <li>Web</li>
        <li>
          More <MdKeyboardArrowDown />
        </li>
      </ul>
      <ul className={cls(styles.searchMenu__nav__right)}>
        <li>
          <AiOutlineUser />
        </li>
        <li>
          <HiOutlineDotsHorizontal />{" "}
        </li>
      </ul>
    </div>
  );
};

export default SearchMenuNav;
