import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/userSlice";

const Navbar = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.navbar}>
      <p className={styles.navbar__logo}>Storeify</p>
      <div className={styles.navbar__LinkContainer}>
        {!isAuth && (
          <NavLink to="/login" className={styles.navbar__loginButton}>
            Log In
          </NavLink>
        )}
        {!isAuth && (
          <NavLink
            to="/registration"
            className={styles.navbar__registrationButton}
          >
            Get Started
          </NavLink>
        )}
        {isAuth && (
          <button
            onClick={handleLogout}
            className={styles.navbar__registrationButton}
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
