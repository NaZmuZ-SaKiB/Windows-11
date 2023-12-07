import cls from "classnames";

import styles from "./App.module.scss";
import Taskbar from "./components/taskbar/taskbar";
import StartMenu from "./components/start-menu/startMenu";
import SearchMenu from "./components/search-menu/searchMenu";
import FileExplorer from "./components/file-explorer/fileExplorer";

function App() {
  return (
    <div className={cls(styles.body)}>
      <div className={styles.FileExplorer__container}>
        <FileExplorer />
      </div>
      <Taskbar />
      <StartMenu />
      <SearchMenu />
    </div>
  );
}

export default App;
