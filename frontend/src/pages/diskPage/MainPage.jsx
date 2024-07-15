import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "../../services/fileService";
import FileList from "../../components/fileList/FileList";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.file.currentDir);

  useEffect(() => {
    dispatch(getFiles());
  }, [dispatch, currentDir]);
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPage__buttonList}>
        <button className={styles.mainPage__back}>back</button>
        <button className={styles.mainPage__createDir}>createDir</button>
      </div>
      <FileList />
    </div>
  );
};

export default MainPage;
