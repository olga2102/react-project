import { useState } from "react";

import Notification from "../notification/notification";

import styles from "./notifications.module.css"

function Notifications({data, NotificationOff}) {

    return (
        <div className={styles.wrapper}>

            {data.map((item)=> {
                return  <Notification key={item.id} item={item} NotificationOff={NotificationOff} /> })
            }
        </div>
    )
}

export default Notifications;