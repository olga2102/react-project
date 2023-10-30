import { useEffect } from "react";

import styles from "./notification.module.css"

function Notification({item, NotificationOff}) {
    
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            NotificationOff(item.id)
        }, 3000)

        return () => clearTimeout(timeout);
    }, [])

    return (
        <div className={styles.inner}>
            <button className={styles.close} onClick={()=>NotificationOff(item.id)}>x</button>
            <p className={styles.text}>{item.text} {item.id}</p>
        </div>
    )
}

export default Notification;