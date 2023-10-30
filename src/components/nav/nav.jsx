import React from "react";
import { Link } from "react-router-dom";

import styles from "./nav.module.css";

function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}><Link to="/">Posts</Link></li>
                <li className={styles.nav__item}><Link to="/todo">ToDo</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;