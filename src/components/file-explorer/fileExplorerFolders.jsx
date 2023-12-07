import cls from "classnames";
import styles from "./fileExplorer.module.scss";
import FileExplorerGroupName from "./fileExplorerGroupName";
import { foldersData } from "./fileExplorerData";

const FileExplorerFolders = () => {
  return (
    <div className={cls(styles.fileExplorer__folders__container)}>
      <FileExplorerGroupName text={"Folders (7)"} />

      <div className={cls(styles.fileExplorer__folders)}>
        {foldersData.map((folder) => (
          <div
            key={folder.name}
            className={cls(styles.fileExplorer__folders__folder)}
          >
            <img src={`/images/icons/${folder.icon}`} alt={folder.name} />
            <span>{folder.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileExplorerFolders;
