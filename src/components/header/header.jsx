import React from "react";

import Logo from '../../assets/img/logo.svg';
import Nav from "../nav/nav";

import styles from './header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={Logo} width="150px" alt="лого компании"></img>
           <Nav />
        </header>
    )
}

export default Header;