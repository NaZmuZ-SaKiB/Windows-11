import cls from "classnames";
import styles from "./startMenu.module.scss";
import { startMenuDocumentsList } from "./startMenuData";

const StartMenuDocs = () => {
  return (
    <div className={cls(styles.startMenu__docs)}>
      {startMenuDocumentsList.map((doc) => (
        <div key={doc.name} className={cls(styles.startMenu__docs__doc)}>
          <img src={`/images/icons/${doc.icon}`} alt={`${doc.name}`} />
          <div className={cls(styles.startMenu__docs__doc__info)}>
            <strong>{doc.name}</strong>
            <span>{doc.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StartMenuDocs;
