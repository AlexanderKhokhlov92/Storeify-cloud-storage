import { useDispatch, useSelector } from "react-redux";
import styles from "./Sidebar.module.scss";
import { uploadFile } from "../../services/fileService";

const Sidebar = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.file.currentDir);

  function fileUploadHandler(e) {
    const files = [...e.target.files];
    files.forEach((file) => dispatch(uploadFile(file, currentDir)));
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__upload}>
        <label className={styles.sidebar__uploadLabel} htmlFor="uploadInput">
          upload file
        </label>
        <input
          type="file"
          id="uploadInput"
          className={styles.sidebar__uploadInput}
          onChange={(e) => fileUploadHandler(e)}
          multiple={true}
        />
      </div>
    </div>
  );
};

export default Sidebar;
