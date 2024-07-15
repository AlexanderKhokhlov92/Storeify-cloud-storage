import { useDispatch } from "react-redux";
import styles from "./WelcomePage.module.scss";
import { openModal } from "../../redux/slices/modalSlice";
import Button from "../../components/UI/button/Button";

const WelcomePage = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.welcomePage}>
      <h1 className={styles.welcomePage__title}>
        Storeify Personal Cloud Storage
      </h1>
      <p className={styles.welcomePage__subtitle}>
        <span>Easy</span> and <span>secure</span> access to your content
      </p>
      <p className={styles.welcomePage__description}>
        Save your photos and access them from any device, anywhere
      </p>
      <div className={styles.welcomePage__buttonWrapper}>
        <Button
          onClick={() => dispatch(openModal("registration"))}
          className={styles.welcomePage__registrationButton}
        >
          Get Started for Free
        </Button>
        <Button variant="inverse" className={styles.welcomePage__plansButton}>
          Plans and Pricing
        </Button>
      </div>
      <p className={styles.welcomePage__loginPrompt}>
        Already have Storeify?{" "}
        <button
          className={styles.welcomePage__loginLink}
          onClick={() => dispatch(openModal("login"))}
        >
          Log In
        </button>
      </p>
    </div>
  );
};

export default WelcomePage;
