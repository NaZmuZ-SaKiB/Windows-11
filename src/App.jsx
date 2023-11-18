import cls from "classnames";

import styles from "./App.module.scss";
import Taskbar from "./components/taskbar/taskbar";
import StartMenu from "./components/start-menu/startMenu";
import SearchMenu from "./components/search-menu/searchMenu";
import FileExplorer from "./components/file-explorer/fileExplorer";

function App() {
  return (
    <div className={cls(styles.body)}>
      <FileExplorer />
      <Taskbar />
      <StartMenu />
      <SearchMenu />
    </div>
  );
}

export default App;
