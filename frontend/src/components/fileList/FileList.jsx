import { useSelector } from "react-redux";
import File from "../File/File";
import styles from "./FileList.module.scss";

const FileList = () => {
  const files = useSelector((state) => state.file.files);

  return (
    <div className={styles.fileList__wrapper}>
      <h3 className={styles.fileList__title}>Files</h3>
      <div className={styles.fileList__fileInfo}>
        <p className={styles.fileList__name}>Name</p>
        <p className={styles.fileList__ovner}>Owner</p>
        <p className={styles.fileList__date}>Date</p>
        <p className={styles.fileList__size}>Size</p>
      </div>
      <ul className={styles.fileList}>
        {files.map((file) => (
          <File key={file._id} file={file} />
        ))}
      </ul>
    </div>
  );
};

export default FileList;
