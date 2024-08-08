import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "../../services/fileService";
import FileList from "../../components/fileList/FileList";
import styles from "./MainPage.module.scss";
import Filters from "../../components/filters/Filters";
import Sidebar from "../../components/sidebar/Sidebar";
import AppModal from "../../components/UI/appModal/AppModal";
import { uploadFile } from "../../services/fileService";
import {
  setAppModalDisplay,
  setCurrentDir,
  popFromStack,
} from "../../redux/slices/fileSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.file.currentDir);
  const dirStack = useSelector((state) => state.file.dirStack);
  const [dragEnter, setDragEnter] = useState(false);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [dispatch, currentDir]);

  function showAppModalHandler() {
    dispatch(setAppModalDisplay("flex"));
  }

  function backClickHandler() {
    if (dirStack.length === 0) return;

    const backDirId = dirStack[dirStack.length - 1]; // Получаем последний элемент стека
    dispatch(popFromStack());
    dispatch(setCurrentDir(backDirId));
  }

  function dragEnterHandler(e) {
    e.preventDefault()
    e.stopPropagation()
    setDragEnter(true)
  }

  function dragLeaveHandler(e) {
    e.preventDefault()
    e.stopPropagation()
    setDragEnter(false)
  }

  function dropHandler(e) {
    e.preventDefault()
    e.stopPropagation()
    let files = [...e.dataTransfer.files]
    files.forEach((file) => dispatch(uploadFile(file, currentDir)));
    setDragEnter(false)
  }

  return (!dragEnter ? 
    <div className={styles.mainPage} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
      <Filters />
      <FileList />
      <Sidebar />
      <button
        className={styles.sidebar__createDir}
        onClick={() => showAppModalHandler()}
      >
        createDir
      </button>
      <button
        className={styles.sidebar__back}
        onClick={() => backClickHandler()}
      >
        back
      </button>
      <AppModal />
    </div>
   : 
    <div className={styles.mainPage__dropArea} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler} onDrop={dropHandler}>Drop file</div>)
  
};

export default MainPage;
