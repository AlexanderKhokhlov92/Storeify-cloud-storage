import { Link } from "react-router-dom";
import styles from "./WelcomePage.module.scss";

const WelcomePage = () => {
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
        <Link
          className={styles.welcomePage__registrationButton}
          to="/registration"
        >
          Get Started for Free
        </Link>
        <Link className={styles.welcomePage__plansButton} to="">
          Plans and Pricing
        </Link>
      </div>
      <p className={styles.welcomePage__loginPrompt}>
        Already have Storeify?{" "}
        <Link className={styles.welcomePage__loginLink} to="/login">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default WelcomePage;
