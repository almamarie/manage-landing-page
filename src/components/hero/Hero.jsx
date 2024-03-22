import React from "react";
import styles from "./Hero.module.css";
import illustrationImg from "../../resources/images/illustration-intro.svg";
import Button from "../ui/button/Button";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.text}>
        <h1>Bring everyone together to build better products</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button className={styles.btn}>Get Started</Button>
      </div>
      <img
        className={styles.illustration}
        src={illustrationImg}
        alt="illustration"
      />
    </section>
  );
};

export default Hero;
