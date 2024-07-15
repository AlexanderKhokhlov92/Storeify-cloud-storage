import styles from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import { openModal } from "../../redux/slices/modalSlice";

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
          <button
            className={styles.navbar__loginButton}
            onClick={() => dispatch(openModal("login"))}
          >
            Log In
          </button>
        )}
        {!isAuth && (
          <button
            className={styles.navbar__registrationButton}
            onClick={() => dispatch(openModal("registration"))}
          >
            Get Started
          </button>
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
