import cls from "classnames";
import styles from "./taskbar.module.scss";
import Icons from "./icons";

const Taskbar = () => {
  return (
    <div className={cls(styles.taskbar)}>
      <Icons />
    </div>
  );
};

export default Taskbar;
