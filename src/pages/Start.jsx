import React from "react";
import logo from "../assets/logo.png";
import magnifier from "../assets/magnifier.png";

import styles from "./Start.module.css";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <main className={styles.main}>
      <div className={styles.startContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.start}>
          <Link to="/story/primes" className={styles.startBtn}>
            Start
          </Link>
          <img src={magnifier} alt="btn" className={styles.startMag} />
        </div>
      </div>
    </main>
  );
};

export default Start;
