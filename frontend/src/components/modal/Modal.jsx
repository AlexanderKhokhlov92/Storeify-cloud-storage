import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/modalSlice";
import styles from "./Modal.module.scss";
import Login from "../authorization/Login";
import Registration from "../authorization/Registration";

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, contentType } = useSelector((state) => state.modal);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        dispatch(closeModal());
      }
    };

    if (isOpen && modalRef.current) {
      modalRef.current.focus();
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [dispatch, isOpen]);

  const closeModalAndReset = () => {
    dispatch(closeModal());
  };

  if (!isOpen) return null;

  let content;
  switch (contentType) {
    case "login":
      content = <Login onSuccess={closeModalAndReset} />;
      break;
    case "registration":
      content = <Registration onSuccess={closeModalAndReset} />;
      break;
    default:
      content = null;
  }

  return (
    <div
      className={styles.modal__overlay}
      onClick={() => dispatch(closeModal())}
    >
      <div
        ref={modalRef}
        tabIndex={0}
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.modal__closeButton}
          onClick={() => dispatch(closeModal())}
        >
          X
        </button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
