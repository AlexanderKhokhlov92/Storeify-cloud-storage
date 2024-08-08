import { useState } from "react";
import Input from "../input/Input";
import styles from "./AppModal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setAppModalDisplay } from "../../../redux/slices/fileSlice";
import { createDir } from "../../../services/fileService";

const AppModal = () => {
  const [dirName, setDirName] = useState("");
  const appModalDisplay = useSelector((state) => state.file.appModalDisplay);
  const currentDir = useSelector((state) => state.file.currentDir);
  const dispatch = useDispatch();

  function createHendler() {
    dispatch(createDir(currentDir, dirName));
    console.log(currentDir);
  }

  const handleDirNameChange = (e) => {
    setDirName(e.target.value);
  };

  return (
    <div
      className={styles.appModal}
      onClick={() => dispatch(setAppModalDisplay("none"))}
      style={{ display: appModalDisplay }}
    >
      <div
        className={styles.appModal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.appModal__header}>
          <h3 className={styles.appModal__title}>Create new folder</h3>
          <button
            className={styles.appModal__close}
            onClick={() => dispatch(setAppModalDisplay("none"))}
          >
            X
          </button>
        </div>
        <Input
          type="text"
          placeholder="Enter name"
          value={dirName}
          onChange={handleDirNameChange}
        />
        <button
          className={styles.appModal__create}
          onClick={() => {
            createHendler();
            setDirName("");
            dispatch(setAppModalDisplay("none"));
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default AppModal;
