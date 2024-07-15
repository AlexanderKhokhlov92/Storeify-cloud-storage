import styles from "./Input.module.scss"; // Подключаем стили для инпута

const Input = ({ type, placeholder, value, onChange, required, className }) => {
  const inputClass = `${styles.input} ${className}`;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={inputClass}
    />
  );
};

export default Input;
