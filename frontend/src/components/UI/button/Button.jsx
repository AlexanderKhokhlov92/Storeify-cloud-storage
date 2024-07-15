import styles from "./Button.module.scss";

const Button = ({ children, onClick, variant = "default", className = "" }) => {
  const validVariants = ["default", "inverse"];

  const buttonVariant = validVariants.includes(variant) ? variant : "default";

  const buttonClass = `${styles.button} ${styles[buttonVariant]} ${className}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
