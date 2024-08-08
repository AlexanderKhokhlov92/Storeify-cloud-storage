import { useDispatch, useSelector } from "react-redux";
import dirLogo from "../../../public/dirLogo.svg";
import fileLogo from "../../../public/fileLogo.svg";
import styles from "./File.module.scss";
import { pushToStack, setCurrentDir } from "../../redux/slices/fileSlice";

const File = ({ file }) => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.file.currentDir);

  function openDirHandler() {
    dispatch(pushToStack(currentDir));
    dispatch(setCurrentDir(file._id));
  }

  return (
    <li
      className={styles.file}
      onClick={
        file.type === "dir"
          ? () => {
              openDirHandler();
            }
          : null
      }
    >
      <div className={styles.file__nameContainer}>
        <h3 className={styles.file__nameTitle}>{file.name}</h3>
        <img
          className={styles.file__logo}
          src={file.type === "dir" ? dirLogo : fileLogo}
          alt=""
          width="30px"
        />
      </div>
      <p className={styles.file__date}>{file.date.slice(0, 10)}</p>
      <p className={styles.file__size}>{file.size}</p>
    </li>
  );
};

export default File;
