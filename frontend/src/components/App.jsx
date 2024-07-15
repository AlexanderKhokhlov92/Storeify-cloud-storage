import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import WelcomePage from "../pages/welcomePage/WelcomePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../services/userService";
import Modal from "./modal/Modal";
import MainPage from "../pages/diskPage/MainPage";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(auth());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        {!isAuth ? (
          <Routes>
            <Route path="/" Component={WelcomePage} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" Component={MainPage} />
          </Routes>
        )}
        <Modal />
      </div>
    </BrowserRouter>
  );
}

export default App;
