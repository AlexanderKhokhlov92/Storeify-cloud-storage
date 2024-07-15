import dirLogo from "../../../public/dirLogo.svg";
import fileLogo from "../../../public/fileLogo.svg";
import styles from "./File.module.scss";

const File = ({ file }) => {
  return (
    <div className={styles.file}>
      <div className={styles.file__nameContainer}>
        <h3 className={styles.file__nameTitle}>{file.name}</h3>
        <img
          className={styles.file__logo}
          src={file.type === "dir" ? dirLogo : fileLogo}
          alt=""
          width="40px"
        />
      </div>
      <p>{file.date}</p>
      <p>{file.size}</p>
    </div>
  );
};

export default File;
