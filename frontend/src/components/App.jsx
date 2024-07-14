import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import WelcomePage from "../pages/welcomePage/WelcomePage";
import Login from "./login/Login";
import Registration from "./registration/Registration";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../services/userService";

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
        {!isAuth && (
          <Routes>
            <Route path="/" Component={WelcomePage} />
            <Route path="/login" Component={Login} />
            <Route path="/registration" Component={Registration} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
