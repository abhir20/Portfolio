import React from "react";
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    return <nav className={styles.navbar}>

        <a href="/" className={styles.title}>Portfolio</a>

        <div className={styles.menu}>
            <img className={styles.menuBtn}
                src= {getImageUrl("./menu/menuButton.png")} alt="menu-button"/>
            <ul className={styles.menuItems}>
                <li><a  href="#about"> About </a></li>
                <li><a href="#experience"> Experience </a></li>
                <li><a href="#projects"> Projects </a></li>
                <li><a href="#contact"> Contact </a></li>
            </ul>
        </div>
    </nav>;
}