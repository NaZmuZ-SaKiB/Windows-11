import styles from "./fileExplorer.module.scss";

import { RiArrowDownSLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const FileExplorerGroupName = ({ text }) => {
  return (
    <div className={styles.fileExplorer__groupTitle}>
      <div className={styles.icon}>
        <RiArrowDownSLine />
      </div>
      <p>{text}</p>
      <div className={styles.hr}></div>
    </div>
  );
};

export default FileExplorerGroupName;
