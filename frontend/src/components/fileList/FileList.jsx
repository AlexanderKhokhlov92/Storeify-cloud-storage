//import { useSelector } from "react-redux";
import File from "../File/File";
import styles from "./FileList.module.scss";

const FileList = () => {
  //const files = useSelector((state) => state.file.files).map((file, i) => (<File key={i} />));
  const files = [
    {
      _id: 1,
      name: "New folder",
      type: "dir",
      size: "5gb",
      date: "20.01.2024",
    },
    { _id: 3, name: "New file", type: "jpg", size: "5gb", date: "20.01.2020" },
  ].map((file) => <File file={file} key={file.id} />);
  return (
    <div className={styles.fileList}>
      <p className={styles.fileList__name}>Name</p>
      <p className={styles.fileList__ovner}>Owner</p>
      <p className={styles.fileList__date}>Date</p>
      <p className={styles.fileList__size}>Size</p>
      {files}
    </div>
  );
};

export default FileList;
