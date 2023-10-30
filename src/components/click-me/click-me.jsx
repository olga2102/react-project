import styles from "./click-me.module.css";

function ClickMe({NotificationOn, newNotification}) {
    return (
    <button className={styles.button} onClick={()=>{NotificationOn(); newNotification()}}>Click me!</button>
    )
}

export default ClickMe;
