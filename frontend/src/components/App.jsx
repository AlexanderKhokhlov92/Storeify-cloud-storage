import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import WelcomePage from "../pages/welcomePage/WelcomePage";
import Login from "./login/Login";
import Registration from "./registration/Registration";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
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
