import axios from "axios";
import { setFiles } from "../redux/slices/fileSlice";

export function getFiles(dirId) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/files${dirId ? `?parent=` + dirId : ""}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(response.data);
      dispatch(setFiles(response.data)); // Диспатч экшена для обновления состояния файлов
    } catch (error) {
      alert(error.response.data.message);
    }
  };
}
