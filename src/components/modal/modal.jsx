import styles from "./modal.module.css";

function Modal({children, closeModal}) {

    return (
        <div className={styles.modal}>         
            <div className={styles.wrapper}>
                <button className={styles.close} onClick={closeModal}>x</button>
                {children}
            </div>
        </div>
    )
} 

export default Modal;