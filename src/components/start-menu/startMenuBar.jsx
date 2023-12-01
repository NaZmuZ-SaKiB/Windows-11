/* eslint-disable react/prop-types */
import cls from "classnames";
import styles from "./startMenu.module.scss";

const StartMenuBar = ({ barTitle, buttonTitle }) => {
  return (
    <div className={cls(styles.startMenu__top)}>
      <span>
        <strong>{barTitle}</strong>
      </span>
      <button type="button">{buttonTitle} &nbsp;&nbsp; &gt;</button>
    </div>
  );
};

export default StartMenuBar;
