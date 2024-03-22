import React from "react";
import styles from "./Header.module.css";
import AppLogo from "../../resources/images/logo.svg";
import Button from "../ui/button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={AppLogo} alt="logo" />
      <nav className={styles.nav}>
        <a className={styles.a} href="#pricing">
          Pricing
        </a>

        <a className={styles.a} href="#products">
          Products
        </a>
        <a className={styles.a} href="#about us">
          About Us
        </a>

        <a className={styles.a} href="#careers">
          Careers
        </a>
        <a className={styles.a} href="#community">
          Community
        </a>
      </nav>

      <Button>Get Started</Button>
    </header>
  );
};

export default Header;
